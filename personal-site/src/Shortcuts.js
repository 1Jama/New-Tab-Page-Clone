import './Shortcuts.css'
import { sData } from './sData'
import { MoreVert, MoreVertOutlined } from '@mui/icons-material'

/* const shortcut = ({ image, title }) => {
  return (
    <article className='shortcut'>
      <img src={image} />
      <h1>{title}</h1>
    </article>
  )
} */

const Shortcuts = () => {
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
      </div>
    </div>
  )
}

export default Shortcuts
