import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

interface Props {
  title?: string
  image?: string
  link?: string
}

const Card: React.FC<Props> = ({
  title,
  image,
  link = "/tutorials/react/react",
}) => {
  return (
    <Link to={link}>
      <Wrapper
        image={`/card.png`}
        whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}
      >
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  )
}

export default Card

// Styles
const Wrapper = styled(motion.div)`
  background: ${props => `url(${props.image})`};
  background-size: cover;
  padding: 2.5rem 2.5rem;
  border-radius: 10px;
  /* border: 2px solid #222; */
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
`

const Title = styled.h2`
  font-size: 2.6rem;
  color: var(--menuColor);
  max-width: 80%;
  margin: 0;
`

const Desc = styled.p`
  font-size: 1.6rem;
  color: var(--menuColor);
  padding: 0;
  margin: 0;
`
