import React, { useEffect, useState } from 'react'
import {
  WrapperDiv, Container, PinkTitle, WhiteTitle,
} from '../../styles'

const Greeting = () => {
  const [weather, setWeather] = useState({})
  const [time, setTime] = useState({})

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date()
      let AmPm = 'AM'
      let hour = newDate.getHours()
      if (hour > 12) AmPm = 'PM'
      hour %= 12
      if (hour === 0) hour = 12
      setTime([hour, (`0${newDate.getMinutes()}`).slice(-2), AmPm])
    }, 1000)
    const fetchData = async () => {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=886705b4c1182eb1c69f28eb8c520e20')
      const data = await res.json()
      // setWeather(data.weather[0])
      // API says 'Your account is temporary blocked due to exceeding of requests limitation of your subscription type'
      setWeather({description: 'weather today'})
    }
    fetchData()
  }, [])

  return (
    <WrapperDiv>
      <Container>
        <PinkTitle>Beep boop.</PinkTitle>
        <WhiteTitle>Hi there, I&apos;m your personal assistant!</WhiteTitle>
        <table>
          <tr>
            <td>
              <WhiteTitle>
                It is now
              </WhiteTitle>
            </td>
            <td style={{ padding: 10 }}>
              <PinkTitle style={{ fontSize: 35 }}>
                {time[0]}
                :
                {time[1]}
                {' '}
                {time[2]}
              </PinkTitle>
            </td>
            <td>
              <WhiteTitle> in Boston.</WhiteTitle>
            </td>
          </tr>
        </table>
        <WhiteTitle style={{ fontSize: 20 }}>
          The weather forecast predicts
          {' '}
          {weather.description}
          .
        </WhiteTitle>
        <PinkTitle>Ready to be productive?</PinkTitle>
      </Container>
    </WrapperDiv>
  )
}

export default Greeting
