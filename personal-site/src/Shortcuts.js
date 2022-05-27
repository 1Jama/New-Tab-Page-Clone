import './Shortcuts.css'
import { sData } from './sData'
import { MoreVert, MoreVertOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import PopUp from './PopUp'
import SForm from './SForm'

/* const shortcut = ({ image, title }) => {
  return (
    <article className='shortcut'>
      <img src={image} />
      <h1>{title}</h1>
    </article>
  )
} */

const Shortcuts = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='sCut'>
      <div className='container'>
        {sData.map((shortcut, i) => {
          return (
            <div key={i} className='shortcut'>
              <div>
                <img className='image' src={shortcut.image} alt='' />
                <MoreVert className='vert' />
                <p className='title '>{shortcut.title}</p>
              </div>
            </div>
          )
        })}
        <div className='shortcut'>
          <div className='addShrt' onClick={() => setOpen(true)}>
            <img
              className='image'
              src='https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png'
              alt=''
            />
            <MoreVert className='vert' />
            <p className='title '>Add Shortcut</p>
          </div>
        </div>
      </div>
      <PopUp trigger={open} setTrigger={setOpen}>
        <SForm />
      </PopUp>
    </div>
  )
}

export default Shortcuts
