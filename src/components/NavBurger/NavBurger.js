import React, { useContext } from 'react';

import {
	NavBurgerContainer,
	NavBurgerIcons,
	NavBurgerList,
	NavBurgerItem,
	NavBurgerLink,
	NavBurgerIconLink,
	NavBurgerClose,
	NavBurgerOverlay,
} from './NavBurgerElements';

import {
	NavCart,
	NavUser,
	NavCartSpan,
} from '../NavBar/NavBarElements';

import { CartContext } from 'contexts';

export const NavBarBurger = ({ hidden, toggle }) => {
	const {
		state: { cart },
	} = useContext(CartContext);

	return (
		<>
			<NavBurgerOverlay
				onClick={toggle}
				display={hidden ? 'none' : 'block'}
			/>
			<NavBurgerContainer right={hidden ? '-35rem' : '0'}>
				<NavBurgerClose onClick={toggle}>X</NavBurgerClose>
				<NavBurgerIcons>
					<NavBurgerIconLink to="/user" onClick={toggle}>
						<NavUser fontSize="4.5rem" />
					</NavBurgerIconLink>
					<NavBurgerIconLink to="/cart" onClick={toggle}>
						<NavCart fontSize="4.5rem" />
						{cart.length >= 1 && (
							<NavCartSpan top="2.5rem" right="5rem">
								{cart.length}
							</NavCartSpan>
						)}
					</NavBurgerIconLink>
				</NavBurgerIcons>
				<NavBurgerList>
					<NavBurgerItem>
						<NavBurgerLink
							to={{
								pathname: '/login',
								query: '/admin',
							}}
							onClick={toggle}
						>
							Admin demo
						</NavBurgerLink>
					</NavBurgerItem>
					<NavBurgerItem>
						<NavBurgerLink to="/products" onClick={toggle}>
							Products
						</NavBurgerLink>
					</NavBurgerItem>
				</NavBurgerList>
			</NavBurgerContainer>
		</>
	);
};
