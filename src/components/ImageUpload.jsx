import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import FileBase from 'react-file-base64'
import Button from './Button'

const ImageUpload = () => {
  const initialValues = {
    userImage: '',
  }
  const [values, setValues] = useState(initialValues)
  return (
    <Container>
      <Link to='/'>Go back</Link>
      <div>
        <img src={values.userImage ? values.userImage : ''} alt='' />

        <label>
          {values.userImage ? 'Edit Image': 'Uplaod Image'}
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setValues({ ...values, userImage: base64 })}
          />
        </label>
      </div>
      <Button text='Submit' />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 2px solid black;
  height: 25rem;
  border-radius: 8px;
  height: auto;
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
  div {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    img {
      width: 15rem;
      height: 15rem;
      border: 2px solid black;
      object-fit: cover;
      border-radius: 6px;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid black;
      outline: none;
      border-radius: 6px;
      padding: 0.25rem 1.5rem;
      margin: 1rem;
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
    }
    input[type='file'] {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`
export default ImageUpload
