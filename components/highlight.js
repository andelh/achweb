import styled from 'styled-components'

export const Highlight = styled.span`
	::after {
		content: '';
		width: 80px;
		height: 10px;
		margin: 0 auto;
		margin-top: -7px;
		display: block;
		background: rgb(14, 153, 238);
		background: linear-gradient(
			63deg,
			rgba(14, 153, 238, 1) 0%,
			rgba(2, 105, 226, 1) 100%
		);

		@media (min-width: 450px) {
			display: none;
		}
	}
`
