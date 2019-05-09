import React from "react"
import styled from "styled-components"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  height: 720px;
`

const SectionLogo = styled.img``

const SectionTitleGroup = styled.div``

const SectionTitle = styled.h3``
const SectionText = styled.p``

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.title}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)
export default Section
