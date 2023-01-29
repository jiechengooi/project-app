import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { device } from 'utils/breakpoints';
export const Nav = styled.nav`
	position: absolute;
	height: 20rem;
	z-index: 5001;
	width: 100%;
	padding: 4rem;
	transition: all 0.2s ease;
`;

export const NavWrapper = styled.div`
	max-width: 136rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

export const NavLogo = styled(Link)``;

export const NavLogoImage = styled.img`
	height: 17rem;
	transition: all 0.2s ease;
	@media ${device.mobileM} {
		height: 10rem;
	}
`;

export const NavList = styled.ul`
	margin-left: auto;
	display: flex;
	justify-content: center;
	font-size: 2rem;
	font-family: 'Arvo', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	@media (max-width: 960px) {
		display: none;
	}
`;

export const NavItem = styled.li``;

export const NavCartSpan = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	background-color: var(--color-primary);
	height: 2.4rem;
	width: 2.4rem;
	font-size: 2.4rem;
	border-radius: 50%;
	top: ${({ top }) => top ?? '-1.8rem'};
	right: ${({ right }) => right ?? '-1.8rem'};
	color: var(--color-grey-light);
`;

export const NavLink = styled(Link)`
	position: relative;
	color: var(--color-grey-light);
	margin-left: 5rem;
	transition: color 0.3s;
	&:hover {
		color: var(--color-primary);
	}
	@media (max-width: 960px) {
		display: none;
	}
`;

export const NavCart = styled(FiShoppingCart)`
	font-size: ${({ fontSize }) => fontSize ?? '3rem'};
`;

export const NavUser = styled(FiUser)`
	color: var(--color-grey-light);
	transition: color 0.3s;
	&:hover {
		color: var(--color-primary);
	}
`;

export const NavBurger = styled(FaBars)`
	font-size: 5rem;
	color: var(--color-grey-light);
	cursor: pointer;
	display: none;
	@media (max-width: 960px) {
		display: block;
	}
`;
