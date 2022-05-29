import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { NewReleases, Shortcut } from '@mui/icons-material';
import './SForm.css';
import Shortcuts from './Shortcuts';

export const SForm = (props) => {
  const [urlValue, setUrlValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const image =
    'https://www.citypng.com/public/uploads/preview/-11594687246vzsjesy7bd.png';

  const handleSubmit = (e) => {
    e.preventDefault();

    const newShortcut = { image, nameValue, urlValue };

    /*  const name1 = newShortcut.nameValue;
    const url1 = newShortcut.urlValue; */
    if (nameValue && urlValue) {
      props.onSubmit(newShortcut);
    }

    props.changeState(false);
  };
  return (
    <div className='popupContainer'>
      <form className='popupPadding'>
        <h3 className='heading'>Add shortcut</h3>
        <label htmlFor='name' className='name'>
          Name
        </label>
        <TextField
          className='tFld'
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          hiddenLabel
          id='name'
          variant='filled'
          size='small'
        />
        <br />
        <br />
        <label htmlFor='url' className='name'>
          URL
        </label>
        <TextField
          className='tFld'
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          hiddenLabel
          id='url'
          variant='filled'
          size='small'
        />
        <div className='bCont'>
          <Button className='Button' variant='contained' onClick={handleSubmit}>
            Close
          </Button>
          <Button
            type='submit'
            className='Button'
            variant='contained'
            onClick={handleSubmit}
          >
            Done
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SForm;
