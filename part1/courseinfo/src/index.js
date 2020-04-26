import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (

        <h1>
            {props.header}
        </h1>

    )
}


const Part = (props) => {
    return (
        <div>
            <p>
                {props.part}  {props.number}
            </p>
        </div>
    )
}

const Content = (props) => {

    console.log(props);

    return (
        <div>
            <Part part={props.arr[0].name} number={props.arr[0].exercises} />
            <Part part={props.arr[1].name} number={props.arr[1].exercises} />
            <Part part={props.arr[2].name} number={props.arr[2].exercises} />
        </div>
    )
}

const Total = (props) => {

    return (
        <div>
            <p>
                Number of exercises {props.arr[0].exercises + props.arr[1].exercises + props.arr[2].exercises}
            </p>
        </div>
    )
}

const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <>
            <Header header={course.name} />
            <Content arr={course.parts} />
            <Total arr={course.parts} />


        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
