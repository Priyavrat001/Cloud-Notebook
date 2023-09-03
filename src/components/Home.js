import React, { useEffect } from 'react'
import { Notes } from './Notes'

export const Home = (props) => {
  const {showAlert} = props
useEffect(() => {
  props.setProgress(10)
  props.setProgress(100)

}, [])

  return (
  <div>
    <Notes showAlert={showAlert}/>
  </div>
  )
}
