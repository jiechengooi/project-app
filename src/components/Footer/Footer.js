import React from 'react';

import {
	FooterContainer,
	FooterMedia,
	FooterMediaIcon,
	FooterLogo,
	FooterAddress,
	FooterDetail,
	FooterCopy,
} from './FooterElements';

import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';

import Logo from 'assets/images/logo.webp';

import { withRouter } from 'react-router';

const Footer = (props) => {
	const { location } = props;
	if (location.pathname.match(/admin/)) {
		return null;
	}
	return (
		<FooterContainer>
			<FooterAddress>
				<FooterDetail>Blicious</FooterDetail>
				<FooterDetail>
					Designed by group 9
				</FooterDetail>
			</FooterAddress>
			<FooterCopy>2023@All right served.</FooterCopy>
		</FooterContainer>
	);
};

export default withRouter(Footer);
