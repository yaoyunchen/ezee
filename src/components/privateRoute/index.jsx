import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { isBrowser, isLoggedIn } from '../../services/auth'

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)

    if (isBrowser && !isLoggedIn && window.location.pathname !== '/login') {
      navigate('/login')
      return null
    }
  }


  render() {
    const { component: Component, ...rest } = this.props
    return <Component {...rest} />
  }
}


PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}


export default PrivateRoute
