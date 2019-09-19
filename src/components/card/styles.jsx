import styled from 'styled-components'

import colors from '../../styles/colors'


const CardStyles = {
  Container: styled.div`
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.2);
    min-height: ${({ minHeight }) => `${minHeight}rem` || 'initial'};
    text-align: ${({ centered }) => (centered ? 'center' : 'initial')};
  `
}


export default CardStyles
