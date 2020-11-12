import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Flyer from '../images/event-flyer.jpeg'
import Banner from '~/components/Banner'
import { breakpoints } from '../utils/styles'

import SEO from '~/components/seo'
import { keyframes } from '@emotion/core'

import FrontCover from '../images/front-cover.jpg'
import BackCover from '../images/backcover.jpg'
import SpineRight from '../images/spine-right.jpg'
import SpineLeft from '../images/spine.jpg'

import VideoBanner from '~/components/VideoSlider'

import ProductGrid from '~/components/ProductGrid'
import PhotoBook from '~/components/Lookbook'
import SplashPage from '~/components/Splash'

const Wrapper = styled.div``
const EventFlyer = styled.img`
  display: block;
  max-width: 640px;
  margin: auto;
  width: 100%;
`

const Container = styled.div`
  padding: 0 1.45rem;
  margin: 0 auto;
  max-width: 1200px;
`

const Section = styled.section`
  margin: 4rem 0;
`

const SectionWrapper = styled.div``

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (max-width: ${breakpoints.l}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Album = styled.div`
  position: relative;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 4rem;

  img {
    width: 100%;
  }
`

const AlbumInfo = styled.div`
  p {
    font-size: 52px;
    text-transform: uppercase;
    color: #333;
    letter-spacing: 0.15em;
    margin: 1rem 0 2rem;
  }
`

const Button = styled.a`
  background: transparent;
  border: 1px solid #333;
  border-radius: 48px;
  text-align: center;
  color: #333;
  text-decoration: none;
  padding: 1rem 2rem;

  &:hover {
    background: #333;
    color: #e0e0e0;
  }
`

const Canvas = styled.div`
  &.perspective {
    perspective: 800px;
  }

  &.center-xy {
    z-index: 1;
  }

  &.perspective,
  .btn {
    display: inline-block;
  }

  .btn {
    border: 0;
    color: #fff;
    transform-style: preserve-3d;
    background-size: cover;
  }

  .btn--3d {
    will-change: transform;
    width: 100%;
    margin: auto;
    max-width: 430px;
    margin-top: 10%;
    margin-left: 5%;
    min-width: 340px;
  }
`

const CanvasWrap = styled.div`
  perspective: 800px;
  width: 350px;
  height: 350px;
  margin: auto;
`

const SpinAround = keyframes`
  to {
    transform: rotateY(1turn)
  }
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${SpinAround} 8s infinite linear;

  > div {
    position: absolute;
    width: 354px;
    height: 321px;
    overflow: hidden;
  }

  &:hover {
    animation-play-state: paused;
  }
`

const Front = styled.div`
  background-image: url(${FrontCover});
  background-size: cover;
`

const Back = styled.div`
  background-image: url(${BackCover});
  background-size: contain;
  transform: translateZ(-10px) rotateY(180deg);
`

const Left = styled.div`
  background-image: url(${SpineLeft});
  width: 15.5px !important;
  transform: translateZ(-5px) rotateY(90deg);
  background-size: cover;
  border: 1px solid #c3c3c3;
  height: 318px !important;
  left: -9px;
`

const Right = styled.div`
  background-image: url(${SpineRight});
  width: 15.5px !important;
  transform: translateZ(-5px) rotateY(90deg);
  background-size: cover;
  border: 1px solid #c3c3c3;
  height: 318px !important;
  left: 346px;
`

const Top = styled.div`
  top: -5px;
  background: #222;
  height: 10px !important;
  transform: translateZ(-5px) rotateX(90deg);
`

const Bottom = styled.div`
  background: #222;
  height: 10px !important;
  transform: translateZ(-5px) rotateX(90deg);
  top: 316px;
`

const IndexPage = ({ data }) => {
  const rapPosts = data.allContentfulRaps.edges

  return (
    <>
      <SEO
        title="Home"
        keywords={[`Hanz`, `Gran Santo`, `Lake side vagabond`]}
      />
      <Wrapper>
        <Banner />
        <Container>
          <Section id="raps">
            <SectionWrapper>
              <AlbumContainer>
                <AlbumInfo
                  style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h4
                    style={{
                      width: '100%',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                    }}
                  >
                    New album
                  </h4>
                  <p
                    style={{
                      width: '100%',
                      fontSize: '6vw',
                      textAlign: 'center',
                    }}
                  >
                    Vagabond
                  </p>
                  <Button target="_blank" href="https://gs.fanlink.to/vagabond">
                    Pre-save now!
                  </Button>
                </AlbumInfo>
                <Canvas className="perspective center-xy">
                  <div className="btn btn--3d">
                    <CanvasWrap>
                      <a href="https://gs.fanlink.to/vagabond" target="_blank">
                        <Box>
                          <Front></Front>
                          <Back></Back>
                          <Left></Left>
                          <Right></Right>
                          <Top></Top>
                          <Bottom></Bottom>
                        </Box>
                      </a>
                    </CanvasWrap>
                  </div>
                </Canvas>
              </AlbumContainer>
            </SectionWrapper>
          </Section>
          <Section>
            <SectionWrapper>
              <AlbumContainer>
                {rapPosts.map(({ node: post }) => (
                  <Album key={post.id}>
                    <img src={post.albumCover.file.url} />
                    <AlbumInfo className="album-info">
                      <p>{post.title}</p>
                      <Button target="_blank" href={post.albumLink}>
                        {post.buttonName}
                      </Button>
                    </AlbumInfo>
                  </Album>
                ))}
              </AlbumContainer>
            </SectionWrapper>
          </Section>
        </Container>
        <Section id="cinema">
          <VideoBanner posts={data.allContentfulVideo.edges} />
        </Section>
        <Container>
          <Section id="library">
            <PhotoBook />
          </Section>
          <Section id="sale" style={{ margin: '6rem 0 4rem' }}>
            <SectionWrapper>
              <ProductGrid />
            </SectionWrapper>
          </Section>
        </Container>
      </Wrapper>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query RapsPostsIndexPageQuery {
    allContentfulRaps(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          albumLink
          buttonName
          albumCover {
            file {
              url
            }
          }
        }
      }
    }

    allContentfulVideo(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          videoLink {
            childMarkdownRemark {
              id
              rawMarkdownBody
            }
            videoLink
          }
        }
      }
    }
  }
`
