import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Flyer from '../images/event-flyer.jpeg'

import SEO from '~/components/seo'

const Wrapper = styled.div``
const EventFlyer = styled.img`
  display: block;
  width: 100%;
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`Hanz`, `Gran Santo`, `Lake side vagabond`]} />
    <Wrapper>
      <EventFlyer src={Flyer} />
    </Wrapper>
  </>
)

export default IndexPage
