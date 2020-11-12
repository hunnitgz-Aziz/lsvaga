import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import Logo from '../../images/site-logo.png'

const FadeOut = keyframes`
  0% { opacity: 1; -webkit-transform: scale(1);}
  85% {opacity: 1; -webkit-transform: scale(1.05);}
  100% {-webkit-transform: scale(.1); opacity: 0; visibility: hidden}
`

const Wrapper = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  overflow: hidden;
  opacity: 1;

  &.fade-out {
    animation: ${FadeOut} 0.5s ease-out;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  margin: auto;
  flex-flow: row wrap;
`

const EnterButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  margin-top: 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
`

function test() {
  document.querySelector('.remove').style.display = 'none'
}

const SplashPage = () => {
  return (
    <Wrapper className="remove">
      <Container>
        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r6X1hh4MRIE?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <EnterButton onClick={test}>Enter Site</EnterButton>
      </Container>
    </Wrapper>
  )
}

export default SplashPage
