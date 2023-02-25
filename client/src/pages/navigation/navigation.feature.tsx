import { FC, useEffect, useMemo, useState } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { logo } from '../../assets';
import { NavLink, useNavigate } from "react-router-dom";
import './styles/navigation.style.scss';

export interface NavigationProps {}

export interface NavigationActionProps {}

export const NavigationFeature: FC<NavigationProps & NavigationActionProps> = () => {
    const navigate = useNavigate();

    const [currentPathname, setCurrentPathname] = useState<string>(window.location.pathname);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    interface NavData {
        label: string;
        path: string;
    }

    const navData:NavData[] = useMemo(() => [
        {
            label: 'Home',
            path: './home'
        },
        {
            label: 'Lunar Calendar',
            path: './lunar-calendar'
        },
        {
            label: 'Summary',
            path: './summary'
        },
        {
            label: 'Contact Us',
            path: './contact-us'
        }
    ], [])

    useEffect(() => {
        buildNavigation();
    }, [currentPathname]);  // eslint-disable-line

    /**
     * Loop over Nav Data and return cunstructed Navigation Items.
     * If url pathname matches selected nav item, item will be emboldened
     */
    const buildNavigation = () => {
        return (
            navData.map((nav:NavData, index: number) => {
                return (
                    <li key={`nav-data-item-${index}`}>
                        <NavLink 
                            data-testid={`navigation-feature-nav-item-${index}`}
                            onClick={() => {
                                setCurrentPathname(nav.path);
                                setShowMobileMenu(!showMobileMenu);
                            }} 
                            className={currentPathname === nav.path ? 'selected-nav':''} 
                            to={nav.path}>
                                {nav.label}
                        </NavLink>
                    </li>
                )
            })
        );
    }

    const navigateHome = () => {
        setCurrentPathname('/');
        navigate('./');
    }

    const clickLogoHandler = () => {
        navigateHome();
    }

    const clickTitleHandler = () => {
        navigateHome();
    }
    
    const menuIconClickHandler = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <FeatureContainer  classes={"navigation-feature-container"} data-testid="navigation-feature-container">
            <div className='nav__brand'>
                <i className="pi pi-bars mobile-menu-icon" onClick={menuIconClickHandler} ></i>
                <img data-testid="navigation-feature-logo" className="app-logo" src={`.${logo}`} alt="Logo" onClick={clickLogoHandler} />
                <h1 data-testid="navigation-feature-title" className="app-title" onClick={clickTitleHandler}>Lunar Calendar</h1>
                <ul className={`nav__links ${showMobileMenu && 'active'}`}>
                    {buildNavigation()}
                </ul>
            </div>
        </FeatureContainer>
    )
}
