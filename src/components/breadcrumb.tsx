import * as React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import styled from "styled-components"

const Breadcrumb: React.FC = () => {
  const location = useLocation()

  const type = location.pathname.split("/")[1]
  const tech = location.pathname.split("/")[2]

  const Sep = () => {
    return <SepStyled>/</SepStyled>
  }

  return (
    <div>
      <Wrapper>
        <Link to={`/${type}`}>
          <Type>{type}</Type>
        </Link>
        <Sep />
        <Link to={`/${type}/${tech}`}>
          <Tech>{tech}</Tech>
        </Link>
      </Wrapper>
    </div>
  )
}

export default Breadcrumb

// Styles
const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Type = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`

const Tech = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`

const SepStyled = styled.span`
  font-size: 1.6rem;
  margin: 0 1rem;
  color: var(--primaryColor);
`