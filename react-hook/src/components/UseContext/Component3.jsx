import React from 'react'
import { mycontext } from '../../App'
import { useContext } from 'react'

export default function component3() {
    const examplecontext=useContext(mycontext);
  return (
    <div>
       <h1>hello this is my message:{examplecontext}</h1>
      
    </div>
  )
}
