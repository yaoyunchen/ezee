import styled from 'styled-components'

import colors from '../../styles/colors'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 1rem;
`


const Logo = styled.div`
  flex: 1;
  color: ${colors.secondary};
`


const Login = styled.div`
  flex: 1;
  text-align: right;
  color: ${colors.secondary};
`


const NavigationStyles = {
  Container,
  Logo,
  Login
}


export default NavigationStyles
