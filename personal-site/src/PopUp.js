import React, { useState } from 'react'
import './PopUp.css'
import { Button, Paper } from '@mui/material'
//import ModalButton from './modal-button'

function PopUp(props) {
  //const [isShown, setisShown] = useState(false)

  return props.trigger ? (
    <>
      <div className='page-mask'>
        <div className='formContainer'>
          {props.children}
          {/* <Button onClick={() => props.setTrigger(false)}> Close </Button> */}
        </div>
      </div>
    </>
  ) : (
    ''
  )
}

export default PopUp
