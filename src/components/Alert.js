import React from 'react'

const Alert = (props) => {
  return (
    <div className="alert alert-primary" role="alert">
 {props.messages}
</div>
  )
}

export default Alert
