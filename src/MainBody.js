import React from 'react'
import Card from './components/Card'

export default function MainBody(props){
var test = props.params[0].description;

return(
    
      <Card params={props.params} />
    

  )


}