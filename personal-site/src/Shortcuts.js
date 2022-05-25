import './Shortcuts.css'
import { sData } from './sData'

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
            <article key={i} className='shortcut'>
              <img className='image' src={shortcut.image} alt='' />
              <h1 className='title '>{shortcut.title}</h1>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Shortcuts
