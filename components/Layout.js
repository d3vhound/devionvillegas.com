import styled from 'styled-components'
import Navbar from './Navbar'

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	padding: 0 2rem; 

	@media (min-width: 768px) {
		width: 85%
	}
`

export default (props) => (
	<Wrapper>
		<Navbar />
		{props.children}
	</Wrapper>
)