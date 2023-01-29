import styled, { keyframes } from 'styled-components/macro';

import { motion } from 'framer-motion';
import { device } from 'utils/breakpoints';
export const HeroImageWrapper = styled(motion.div)`
	height: 100vh;
	width: 100%;
	position: absolute;
	z-index: 0;

	&::after {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	@media ${device.laptopS} {
		min-height: 100vh;
		min-height: -webkit-fill-available;
	}
`;

export const HeroIMG = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: 0;
	position: absolute;
	top: 0;
`;

export const HeroContainer = styled.header`
	background-position: center;
	background-size: cover;
	height: 100vh;
	background-color: black;
	@media ${device.laptopS} {
		min-height: 100vh;
		min-height: -webkit-fill-available;
	}
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	position: absolute;
	top: 45vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 65rem;
	color: var(--color-white);
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;
	z-index: 2;
	position: relative;
	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

export const HeroWrapper = styled.div`
	max-width: 136rem;
	margin: 0 auto;
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 3px 5px var(--color-primary);
	letter-spacing: 3px;
`;

export const HeroSpan = styled.span`
	font-family: Shadows Into Light Two, handwriting;
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-top: 1.2rem;
	margin-bottom: 2rem;
	color: white;
	font-weight: 400;
`;

export const HeroP = styled.p`
	font-family: Arvo, serif;
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-top: 1.2rem;
	margin-bottom: 2rem;
	color: ${({ color }) => color};
	font-weight: 700;
`;

const filter = keyframes`
from {
    filter: blur(3px)
}
to { filter: blur(0px)}
`;

export const HeroShape = styled.img`
	position: absolute;
	z-index: 3;
	width: 100%;
	bottom: -0.1rem;
	left: 0;
	animation: ${filter} 0.2s ease;
	@media ${device.laptopS} {
		display: none;
	}
`;
