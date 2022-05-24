import logo from './logo.svg'
import './Searchbar.css'

function Searchbar() {
  return (
    <div className='App'>
      <article className='container'>
        <div className='logo'>
          <img
            alt='Google'
            src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          />
        </div>
        <div className='bar'>
          <input
            className='searchbar'
            type='text'
            placeholder='Search Google or type a URL'
          />

          <a href='#'>
            <img
              className='voice'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png'
            />
          </a>
        </div>
      </article>
    </div>
  )
}

export default Searchbar
