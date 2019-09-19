import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import SEO from '../../components/seo'
import Navigation from '../../components/navigation'

import { GlobalStyles } from '../../styles/GlobalStyleComponent'

const content = {
  seo: {
    title: 'EzeeRiders | Team Portal'
  }
}


class TeamPortalPage extends React.Component {
  constructor(props) {
    super(props)
    if (window.location.pathname === '/team-portal') window.location.replace('/')
    return null
  }


  render() {
    return (
      <GlobalStyles.Page id="team-portal">
        <SEO title={content.seo.title} />

        <Navigation />

        <Container>
          <Row>
            <Col xs={12}>
              <p>
                Stuff
              </p>
            </Col>
          </Row>
        </Container>
      </GlobalStyles.Page>
    );
  }
}


export default TeamPortalPage
