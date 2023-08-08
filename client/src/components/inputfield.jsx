import { TextField } from '@material-ui/core'
import React from 'react'


export default function InputField({value,placeholder,onChange}) {
  return (
    <div>

         <TextField  value={value}  onChange={onChange} placeholder={placeholder}/>
            </div>
  )
}
