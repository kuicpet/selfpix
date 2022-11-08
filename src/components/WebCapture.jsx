import React, { useState, useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import styled from 'styled-components/macro'
import Button from './Button'
import { Link } from 'react-router-dom'

const videoConstraints = {
  width: 240,
  height: 240,
  facingMode: 'user',
}

const WebCapture = () => {
  const webcamRef = useRef(null)
  const [image, setImage] = useState('')

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  }, [webcamRef])

  const handleCapture = (e) => {
    e.preventDefault()
    capture()
  }

  const handleRetake = (e) => {
    e.preventDefault()
    setImage('')
  }

  return (
    <Container>
      <Link to='/'>Go back</Link>
      {image === '' ? (
        <Webcam
          audio={false}
          height={240}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={240}
          videoConstraints={videoConstraints}
        />
      ) : (
        <img src={image} />
      )}

      <Wrapper>
        {image !== '' ? (
          <Button text='Retake Selfie' handleClick={handleRetake} />
        ) : (
          <Button text='Capture Selfie' handleClick={handleCapture} />
        )}
      </Wrapper>
      <Button text='Submit' />
    </Container>
  )
}

export const Container = styled.div`
  position: relative;
  width: 50%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: auto;
  padding: 0.5rem;
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
  video {
    border: 2px solid black;
    border-radius: 6px;
  }
  img {
    width: 15rem;
    height: 15rem;
    //border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    border-radius: 6px;
  }
`
export const Wrapper = styled.div`
  //border: 2px solid red ;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  margin: 1rem;
`
export default WebCapture
