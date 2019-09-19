import React from 'react'
import PropTypes from 'prop-types'

import CardStyles from './styles'


const Card = ({ children, minHeight, centered }) => (
  <CardStyles.Container className="card" minHeight={minHeight} centered={centered}>
    {children}
  </CardStyles.Container>
)


Card.propTypes = {
  children: PropTypes.node,
  minHeight: PropTypes.number,
  centered: PropTypes.bool
}


Card.defaultProps = {
  children: null,
  minHeight: null,
  centered: false
}


export default Card
