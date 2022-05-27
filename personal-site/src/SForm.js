import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, Paper } from '@mui/material'
import { Shortcut } from '@mui/icons-material'
import './SForm.css'

export const SForm = () => {
  const [textValue, setTextValue] = useState('')
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  const onTextChange = (e) => setTextValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const shortcut = { title, url }
  }
  return (
    <div className='sForm'>
      <h3 className='heading'>Add shortcut</h3>
      <p className='title'>Name</p>
      <TextField
        className='tFld'
        onChange={onTextChange}
        value={title}
        hiddenLabel
        id='filled-hidden-label-small'
        defaultValue='Small'
        variant='filled'
        size='small'
      />
      <br />
      <br />
      <p className='title'>URL</p>
      <TextField
        className='tFld'
        onChange={onTextChange}
        value={url}
        hiddenLabel
        id='filled-hidden-label-small'
        defaultValue='Small'
        variant='filled'
        size='small'
      />
      <div className='bCont'>
        <Button
          className='Button'
          variant='contained'
          onClick={() => this.props.setTrigger(false)}
        >
          Close
        </Button>
        <Button className='Button' variant='contained' onClick={handleSubmit}>
          Done
        </Button>
      </div>
    </div>
  )
}

export default SForm
