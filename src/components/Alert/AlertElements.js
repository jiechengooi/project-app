import styled, { keyframes, css } from 'styled-components/macro';

import { GiConfirmed } from 'react-icons/gi';
const fadeIn = keyframes`
from {
    opacity: 0%;
}

to {
    opacity: 100%;
}
`;

export const AlertContainer = styled.div`
	z-index: 10;
	position: absolute;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
	left: ${({ left }) => left};
	font-size: 1.6rem;
	color: #fff;
	background-color: ${({ success }) =>
		success ? 'var(--color-green)' : ''};
	padding: 1rem;
	display: flex;
	align-items: center;
	opacity: 100%;
	font-weight: 100;
	border-radius: 0.5rem;
	animation: ${({ noanimate }) =>
		noanimate
			? 'none'
			: css`
					${fadeIn} 0.71s cubic-bezier(0.075, 0.82, 0.165, 1)
			  `};
`;
export const AlertSuccessIcon = styled(GiConfirmed)`
	margin-right: 0.5rem;
	font-size: 2rem;
	vertical-align: middle;
`;
