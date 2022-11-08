import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button'

const ImageUpload = () => {
  return (
    <Container>
      <Link to='/'>Go back</Link>
      <Button text='Uplaod Photo' />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 2px solid black;
  height: 25rem;
  border-radius: 8px;
  a {
    text-decoration: none;
    color: black;
    margin: 1rem;
    border: 2px solid black;
    padding: 0.125rem 0.5rem;
    border-radius: 8px;
    background-color: #caff04;
    cursor: pointer;
    left: -2px;
    top: -2px;
    z-index: 20;
    box-shadow: 2px 2px black;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: translateY(2px);
      box-shadow: 0 0 0;
    }
  }
`
export default ImageUpload
