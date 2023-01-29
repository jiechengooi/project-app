import React from 'react';
import LazyLoad from 'react-lazyload';
import {
	OfferContainer,
	OfferH3,
	OfferLink,
	OfferContent,
} from './OfferElements';

export const Offer = () => {
	return (
		<LazyLoad>
			<OfferContainer>
				<OfferContent>
					<OfferH3>Take part in quizzes</OfferH3>
					<OfferH3>and win coupons!</OfferH3>
					<OfferLink
						to={{
							pathname: '/login',
							query: '/user/quizes',
						}}
					>
						Check
					</OfferLink>
				</OfferContent>
			</OfferContainer>
		</LazyLoad>
	);
};
