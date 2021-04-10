import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.name1} exercises={props.excount1} />    
      <Part part={props.name2} exercises={props.excount2} />
      <Part part={props.name3} exercises={props.excount3} />    
    </div>
  )
}

const Part = (props) => {
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
      <Content 
      name1={part1} 
      excount1={exercises1}
      name2={part2} 
      excount2={exercises2}
      name3={part3} 
      excount3={exercises3} />

      

      <Total exercises={exercises1 + exercises2 + exercises3} />

    </div>
  )

}

export default App
