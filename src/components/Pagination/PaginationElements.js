import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';

export const PaginationContainer = styled.div`
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left ?? '50%'};
	right: ${({ right }) => right};
	transform: translateX(-50%);
	text-align: center;
`;

export const PaginationP = styled.p`
	font-size: 1.4rem;
	margin-bottom: 1rem;
	text-align: center;
`;

export const PaginationNav = styled.nav`
	display: inline-block;
`;

export const PaginationList = styled.ul`
	display: flex;
`;

export const PaginationItem = styled.li``;

export const PaginationLink = styled(Link)`
	font-size: 1.6rem;
	padding: 0.5rem 1rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background-color: ${({ number, currentpage }) => {
		if (number === currentpage) {
			return 'var(--color-primary)';
		} else {
			return 'var(--color-white)';
		}
	}};
	color: ${({ number, currentpage }) => {
		if (number === currentpage) {
			return 'var(--color-white)';
		} else {
			return '#000';
		}
	}};
	transition: all 0.1s;
	&:hover {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
`;
