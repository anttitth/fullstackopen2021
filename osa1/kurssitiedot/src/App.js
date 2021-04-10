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
     <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
     <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
     <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
        

    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>

  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises  }
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'fundamentals of react',
        exercises: 10
      },
      {
        name: 'Using rops to pass data',
        exercises: 7
      },
      {
        name: 'state of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />



      <Total parts={course.parts} />

    </div>
  )

}

export default App
