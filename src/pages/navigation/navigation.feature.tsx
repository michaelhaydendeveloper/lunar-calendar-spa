import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

export interface NavigationProps {}

export interface NavigationActionProps {}

export const NavigationFeature: FC<NavigationProps & NavigationActionProps> = () => {
    
    return (
        <FeatureContainer>
            <nav>
                <div className='nav__brand'>
                    <img src={logo} alt="Logo" />
                    <h1>Lunar Calendar</h1>
                    <ul className='nav__links'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/lunar-calendar"}>Lunar Calendar</Link></li>
                        <li><Link to={"/summary"}>Summary</Link></li>
                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </FeatureContainer>
    )
}
