import { HeaderContainer } from './styles';

import logo from '../../assets/Logo.svg';
import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="logotipo" />
            <nav>
                <NavLink to="/" title="timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Historico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}
