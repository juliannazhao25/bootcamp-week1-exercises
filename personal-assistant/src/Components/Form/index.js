import React, { useState } from 'react'
import FormInput from './components/FormInput'
import FormButton from './components/FormButton'
import {
  Table, NoButton, LineThrough, StyledDiv, StyledH2
} from './styles'
import { Container, PinkTitle } from '../../styles'

const Form = () => {
  const [name, setName] = useState('')
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])

  const filter = (searched, taskList) => taskList.filter(t => String(t).includes(searched))

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodosHelper()
    }
  }

  const setTodosHelper = () => {
    if (name === '') {
      alert('task has no name')
    } else if (todos.filter(t => String(t) === name).length !== 0) {
      alert('task already exists')
    } else {
      setTodos([...todos, name])
      setName('')
    }
  }

  const complete = task => {
    setTodos(todos.filter(t => t !== task))
    setCompleted([...completed, task])
  }

  const deleteTodos = task => {
    setTodos(todos.filter(t => t !== task))
  }

  const deleteCompleted = task => {
    setCompleted(completed.filter(t => t !== task))
  }

  const ExistingTasks = () => (
    <StyledDiv>
      <PinkTitle>My To-Do List</PinkTitle>
      <Table>
        {filter(search, todos).map(task => (
          <tr>
            <td>{task}</td>
            <td>
              <NoButton onClick={() => complete(task)}>complete</NoButton>
              <NoButton onClick={() => deleteTodos(task)}>delete</NoButton>
            </td>
          </tr>
        ))}
      </Table>
    </StyledDiv>
  )

  const CompletedTasks = () => (
    <StyledDiv>
      <PinkTitle>Completed tasks!</PinkTitle>
      <Table>
        {filter(search, completed).map(task => (
          <tr>
            <LineThrough>{task}</LineThrough>
            <td>
              <NoButton onClick={() => deleteCompleted(task)}>delete</NoButton>
            </td>
          </tr>
        ))}
      </Table>
    </StyledDiv>
  )

  let plural = 'tasks'

  if (todos.length === 1) plural = 'task'

  let text = `You have ${todos.length} ${plural} left!`
  if (todos.length === 0) text = 'Woohoo no work left!'

  if (todos.length === 0 && completed.length === 0) {
    return (
      <Container>
        <PinkTitle>
          {text}
        </PinkTitle>
        <StyledH2>New Task:</StyledH2>
        <FormInput value={name} setValue={setName} action={handleKeyPress} />
        <FormButton text="Create" action={setTodosHelper} />
      </Container>
    )
  }

  if (todos.length === 0) {
    return (
      <Container>
        <PinkTitle>
          {text}
        </PinkTitle>
        <StyledH2>New Task:</StyledH2>
        <FormInput value={name} setValue={setName} action={handleKeyPress} />
        <FormButton text="Create" action={setTodosHelper} />
        <StyledH2>Search Tasks:</StyledH2>
        <FormInput value={search} setValue={setSearch} />
        <CompletedTasks />
      </Container>
    )
  }

  if (completed.length === 0) {
    return (
      <Container>
        <PinkTitle>
          {text}
        </PinkTitle>
        <StyledH2>New Task:</StyledH2>
        <FormInput value={name} setValue={setName} action={handleKeyPress} />
        <FormButton text="Create" action={setTodosHelper} />
        <StyledH2>Search Tasks:</StyledH2>
        <FormInput value={search} setValue={setSearch} />
        <ExistingTasks />
      </Container>
    )
  }

  return (
    <Container>
      <PinkTitle>
        {text}
      </PinkTitle>
      <StyledH2>New Task:</StyledH2>
      <FormInput value={name} setValue={setName} action={handleKeyPress} />
      <FormButton text="Create" action={setTodosHelper} />
      <StyledH2>Search Tasks:</StyledH2>
      <FormInput value={search} setValue={setSearch} />
      <ExistingTasks />
      <CompletedTasks />
    </Container>
  )
}

export default Form
