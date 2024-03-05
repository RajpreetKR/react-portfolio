import React from 'react'

function Project(props) {
    console.log("Props Data: ", props)
  return (
    <div>Data: {props.data.title}</div>
  )
}

export default Project