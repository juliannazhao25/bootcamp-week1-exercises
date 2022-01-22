import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledNavBarButton = styled.div`
  width: 10%;
  margin: 20px 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
  }
`

export const StyledNavLink = styled(NavLink).attrs()`
  font-family: 'Verdana';
  font-size: 22px;
  color: black;
  margin: 0 20px;
  text-decoration: none;
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 22px;
  color: white;
  text-decoration: none;
`
