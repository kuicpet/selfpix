import React from 'react'
import styled from 'styled-components'

const Button = ({ text, handleClick }) => {
  return (
    <Container type='button' onClick={handleClick}>
      {text}
    </Container>
  )
}

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  outline: none;
`

export default Button
