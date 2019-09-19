import React from 'react'
import { Router } from '@reach/router' /* eslint-disable-line */
import { Link } from 'gatsby'

import PrivateRoute from '../components/privateRoute'
import TeamPortalPage from './team-portal'
import LoginPage from './login'


const IndexPage = () => (
  <>
    <Router>
      <PrivateRoute path="/" component={TeamPortalPage} />

      <LoginPage path="/login" />
    </Router>
  </>
)


export default IndexPage
