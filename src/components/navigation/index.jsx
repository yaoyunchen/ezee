import React from 'react'
import { Link, navigate } from 'gatsby'

import { Container, Row, Col } from 'react-awesome-styled-grid'

import NavigationStyles from './styles'

import { GlobalStyles } from '../../styles/GlobalStyleComponent'

const content = {
  logo: {
    src: '',
    alt: 'Title'
  },

  login: {
    text: 'Login',
    path: 'login'
  },

  logout: {
    text: 'Logout',
    path: 'logout'
  }
}


const Navigation = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <NavigationStyles.Container className="nagivation-container">
          {/* Logo */}
          <NavigationStyles.Logo>
            <h2>{content.logo.alt}</h2>
          </NavigationStyles.Logo>

          {/* Login */}
          <NavigationStyles.Login>
            <Link to={content.login.path}>
              {content.login.text}
            </Link>
          </NavigationStyles.Login>
        </NavigationStyles.Container>
      </Col>

      <Col xs={12}>
        <GlobalStyles.Separator />
      </Col>
    </Row>
  </Container>
)


export default Navigation
