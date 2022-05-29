import './Shortcuts.css';
import { sData } from './sData';
import { MoreVert, MoreVertOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import PopUp from './PopUp';
import SForm from './SForm';

/* const shortcut = ({ image, name}) => {
  return (
    <article className='shortcut'>
      <img src={image} />
      <h1>{name}</h1>
    </article>
  )
} */

const Shortcuts = () => {
  const [open, setOpen] = useState(false);
  const [shortcutData, setShortcutData] = useState(sData);

  const saveNewData = (data) => {
    console.log(data);

    console.log(shortcutData);

    //const newShortcutData = [...shortcutData, data];
    setShortcutData((shortcutData) => {
      return [...shortcutData, data];
    });
  };

  const closePopup = (popupState) => {
    console.log(popupState);
    setOpen(popupState);
  };

  return (
    <div className='sCut'>
      <div className='container'>
        {shortcutData.map((shortcut, i) => {
          return (
            <div key={i} className='shortcut'>
              <a href={shortcut.url}>
                <div>
                  <img className='image' src={shortcut.image} alt='' />
                  <MoreVert className='vert' />
                  <p className='name'>{shortcut.nameValue}</p>
                </div>
              </a>
            </div>
          );
        })}
        <div className='shortcut'>
          <div className='addShrt' onClick={() => setOpen(true)}>
            <img
              className='image'
              src='https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png'
              alt=''
            />
            <MoreVert className='vert' />
            <p className='name'>Add Shortcut</p>
          </div>
        </div>
      </div>
      <PopUp trigger={open} setTrigger={setOpen}>
        <SForm onSubmit={saveNewData} changeState={closePopup} />
      </PopUp>
    </div>
  );
};

export default Shortcuts;
