import React from 'react'
import { useLocation } from 'react-router-dom'

function NewPage() {
    const location = useLocation()
    const data = location.state
    console.log(data)
    
  return (
    <div>This is page:{data.username}</div>
  )
}

export default NewPage