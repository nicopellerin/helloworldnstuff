import React from "react"
import styled from "styled-components"

import "typeface-lora"

import Footer from "./footer"

import { GlobalStyles } from "../styles/global-styles"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div>
        <Main>{children}</Main>
      </div>
      <Footer />
      <GlobalStyles />
    </Wrapper>
  )
}

export default Layout

// Styles
const Wrapper = styled.div``

const Main = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 10rem 0 15rem;
`
