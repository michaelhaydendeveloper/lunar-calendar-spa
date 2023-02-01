import { FC, useEffect, useMemo, useState } from "react";
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

export interface NavigationProps {}

export interface NavigationActionProps {}

export const NavigationFeature: FC<NavigationProps & NavigationActionProps> = () => {
    const [currentPathname, setCurrentPathname] = useState<string>(window.location.pathname);

    interface NavData {
        label: string;
        path: string;
    }

    const navData:NavData[] = useMemo(() => [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Lunar Calendar',
            path: '/lunar-calendar'
        },
        {
            label: 'Summary',
            path: '/summary'
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ], [])

    useEffect(() => {
        buildNavigation();
    }, [currentPathname]);

    /**
     * Loop over Nav Data and return cunstructed Navigation Items.
     * If url pathname matches selected nav item, item will be emboldened
     */
    const buildNavigation = () => {
        return (
            navData.map((nav:NavData, index: number) => {
                return (
                    <li key={`nav-data-item-${index}`}>
                        <Link 
                            data-testid={`navigation-feature-nav-item-${index}`}
                            onClick={() => setCurrentPathname(nav.path)} 
                            className={currentPathname === nav.path ? 'selected-nav':''} 
                            to={nav.path}>
                                {nav.label}
                        </Link>
                    </li>
                )
            })
        );
    }

    return (
        <FeatureContainer>
            <nav data-testid="navigation-feature">
                <div className='nav__brand'>
                    <img data-testid="navigation-feature-logo" src={logo} alt="Logo" />
                    <h1 data-testid="navigation-feature-title">Lunar Calendar</h1>
                    <ul className='nav__links'>
                       {buildNavigation()}
                    </ul>
                </div>
            </nav>
        </FeatureContainer>
    )
}
