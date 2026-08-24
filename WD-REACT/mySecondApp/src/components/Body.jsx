import React from 'react'

const Student = ({ id, name, age, major }) => {
    return (
        <div>
            <h1>Student ID: {id}</h1>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Major: {major}</p>
        </div>
    )
}

const Body = () => {
    const bodyStyle = {
        color: 'red',
        backgroundColor: 'black',
        padding: '10px',
        textAlign: 'center',
        minHeight: '10vh'

    }
    return (
        <div>
            <h1 style={bodyStyle}>
                Body Content
            </h1>
            <Student id="student1" name="John Doe" age={20} major="Computer Science" />
    </div>
  )
}

export default Body