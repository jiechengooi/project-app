import React, { useContext, useState, useEffect } from 'react';
import Logo from 'assets/images/logo.webp';
import {
	Nav,
	NavLogo,
	NavLogoImage,
	NavList,
	NavLink,
	NavItem,
	NavWrapper,
	NavCartSpan,
	NavCart,
	NavUser,
	NavBurger,
} from './NavBarElements';

import { useAuth, CartContext } from 'contexts';
import { withRouter, useHistory } from 'react-router';

const NavBar = (props) => {
	const { currentUser } = useAuth();
	const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
	const [scroll, setScroll] = useState(false);
	const history = useHistory();

	const {
		state: { cart },
		dispatch,
	} = useContext(CartContext);

	useEffect(() => {
		if (history.location.pathname === '/') {
			window.addEventListener('scroll', () => {
				setScroll(window.scrollY > 1);
			});
		}

		return () => {
			window.removeEventListener('scroll', null);
		};
	}, [history.location.pathname]);

	useEffect(() => {
		if (localStorage.getItem('cart') && !isInitiallyFetched) {
			dispatch({
				type: 'SET_ITEMS',
				payload: JSON.parse(localStorage.getItem('cart')),
			});
			setIsInitiallyFetched(true);
		}
	}, [isInitiallyFetched, dispatch]);

	const stylesNav = {
		position: 'static',
		backgroundColor: 'var(--color-grey-dark)',
		padding: '1rem 4rem',
		height: '10rem',
	};

	const stylesLogo = {
		height: '8rem',
	};

	const { pathname } = props.location;
	const { toggle } = props;

	const conditionalMenu = () => {
		if (pathname === '/') {
			return null;
		} else if (pathname.substring(0, 6) === '/admin') {
			return { display: 'none' };
		} else return stylesNav;
	};

	return (
		<Nav
			style={conditionalMenu()}
			className={scroll ? 'fixed-menu' : ''}
		>
			<NavWrapper>
				<NavLogo to="/">
					Blicious
				</NavLogo>
				<NavList>
					<NavItem>
						<NavLink
							to={{
								pathname: '/login',
								query: '/admin',
							}}
						>
							Admin
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/products">Products</NavLink>
					</NavItem>
				</NavList>
				<NavLink to={currentUser ? '/user' : '/login'}>
					<NavUser fontSize="3rem" />
				</NavLink>
				<NavLink to="/cart">
					<NavCart />
					{cart.length >= 1 && (
						<NavCartSpan>{cart.length}</NavCartSpan>
					)}
				</NavLink>
				<NavBurger onClick={toggle} />
			</NavWrapper>
		</Nav>
	);
};

export default withRouter(NavBar);
