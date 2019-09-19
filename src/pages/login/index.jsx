import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import SEO from '../../components/seo'
import Navigation from '../../components/navigation'
import Card from '../../components/card'

import { GlobalStyles } from '../../styles/GlobalStyleComponent'
import LoginStyles from './styles'


const content = {
  seo: {
    title: 'EzeeRiders | Login'
  }
}


const Login = () => (
  <GlobalStyles.Page id="login">
    <SEO title={content.seo.title} />

    <Navigation />

    <LoginStyles.CardWrapper>
      <Container>
        <Row>
          <Col xs={0} md={1} />

          <Col xs={12} md={6}>
            <Card minHeight={18}>
              <Container>
                <Row>
                  <Col xs={0} md={2} />

                  <Col xs={12} md={4}>
                    <form>
                      asd
                    </form>
                  </Col>

                  <Col xs={0} md={2} />
                </Row>
              </Container>
            </Card>
          </Col>

          <Col xs={0} md={1} />
        </Row>
      </Container>
    </LoginStyles.CardWrapper>
  </GlobalStyles.Page>
)


export default Login
