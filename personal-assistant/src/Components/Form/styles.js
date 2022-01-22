import styled from 'styled-components'

export const Container = styled.div`
  min-width: 700px;
  top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lavender;
  font-family: 'Times New Roman';
  transition: 0.5s ease;

  &:hover {
      box-shadow: 10px 10px 5px lightgray;
  }
`

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  background: #4aecc3;
  padding: 1px;
  border: none;
  color: white;
`

export const NoButton = styled.button`
  font-family: 'Times New Roman';
  font-size: 15px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 2px;
  margin-right: 2px;
  background: #bdf8e9;
  border: none;
  transition: color 0.25s ease-in;
  color: teal;
  border-radius: 12px;

  &:hover {
      color: #ec4a73;
  }
`

export const LineThrough = styled.td`
  text-decoration-line: line-through;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledH2 = styled.h2`
  color: teal;
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 20px;
`