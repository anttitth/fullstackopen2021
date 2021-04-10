import React from 'react'

const Header = (props) => {
  return (
    <di>
      <h1>{props.course}</h1>
    </di>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'fundamentals of react'
  const exercises1 = 10
  const part2 = 'Using rops to pass data'
  const exercises2 = 7
  const part3 = 'state of a component'
  const exercises3 = 14



  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />

    </div>
  )

}

export default App
