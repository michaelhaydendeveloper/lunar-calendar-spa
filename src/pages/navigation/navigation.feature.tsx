import { FC, useEffect, useState } from "react";
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

    const navData:NavData[] = [
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
    ]

    useEffect(() => {
        buildNavigation();
    }, [currentPathname]);

    const buildNavigation = () => {
        
        return (
            navData.map((nav:NavData) => {
                return (
                    <li><Link onClick={(event) => setCurrentPathname(nav.path)} className={currentPathname === nav.path ? 'selected-nav':''} to={nav.path}>{nav.label}</Link></li>
                )
            })
        );
    }

    return (
        <FeatureContainer>
            <nav>
                <div className='nav__brand'>
                    <img src={logo} alt="Logo" />
                    <h1>Lunar Calendar</h1>
                    <ul className='nav__links'>
                       {buildNavigation()}
                    </ul>
                </div>
            </nav>
        </FeatureContainer>
    )
}
