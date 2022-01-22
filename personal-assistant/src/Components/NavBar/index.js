import React from 'react'
import { Container, StyledNavLink } from './styles'

const NavBar = () => (
  <Container>
    <StyledNavLink to="/">GREETING</StyledNavLink>
    <StyledNavLink to="/todo">TODO</StyledNavLink>
  </Container>
)

export default NavBar
