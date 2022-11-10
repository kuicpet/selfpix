import React from 'react'
import styled from 'styled-components'

const Button = ({ text, handleClick, children }) => {
  return (
    <Container type='button' onClick={handleClick}>
      {text}
      {children}
    </Container>
  )
}

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  outline: none;
  border-radius: 6px;
  padding: 0.25rem 1.5rem;
  margin: 1rem ;
  cursor: pointer;
  background-color: rgb(255, 171, 76);
  left: -2px;
  top: -2px;
  box-shadow: 2px 2px black;
  z-index: 100;
  transition: all 0.1s ease-in-out;
  :hover {
    transform: translateY(2px);
    box-shadow: 0 0 0;
  }
`

export default Button
