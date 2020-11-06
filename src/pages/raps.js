import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/styles'

import SEO from '~/components/seo'

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: ${breakpoints.l}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Album = styled.div`
  position: relative;
  transition: transform 0.3s ease-in-out;
  a {
    display: block;
  }
  img {
    width: 100%;
  }

  &:hover {
    .album-info {
      opacity: 1;
    }
  }
`

const AlbumInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(224, 224, 224, 0.8);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  opacity: 0;
`

const AlbumInfoInnerWrapper = styled.div`
  p {
    margin: 0;
  }

  p,
  a {
    color: #222;
    text-decoration: none;
  }
`

const RapsPage = ({ data }) => {
  const rapPosts = data.allContentfulRaps.edges
  return (
    <>
      <SEO title="Raps" />
      <AlbumContainer>
        {rapPosts.map(({ node: post }) => (
          <Album key={post.id}>
            <a href={post.albumLink}>
              <AlbumInfo className="album-info">
                <AlbumInfoInnerWrapper>
                  <p>{post.title}</p>
                  <a href={post.albumLink}>{post.buttonName}</a>
                </AlbumInfoInnerWrapper>
              </AlbumInfo>
              <img src={post.albumCover.file.url} />
            </a>
          </Album>
        ))}
      </AlbumContainer>
    </>
  )
}

export default RapsPage

export const query = graphql`
  query RapsPostsPageQuery {
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
  }
`
