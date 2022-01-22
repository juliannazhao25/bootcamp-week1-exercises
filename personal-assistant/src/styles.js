import styled from 'styled-components'

export const WrapperDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bdf8e9;
`

export const Container = styled.div`
  padding: 30px;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4aecc3;
  font-family: 'Times New Roman';
  transition: 0.5s ease;

  &:hover {
      box-shadow: 10px 10px 5px lightgray;
  }
`

export const PinkTitle = styled.h1`
  font-family: sans-serif;
  font-size: 1.5em;
  color: #ec4a73;
`

export const WhiteTitle = styled.h1`
  font-family: sans-serif;
  font-size: 1.5em;
  color: white;
`
