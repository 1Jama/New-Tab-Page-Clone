import logo from './logo.svg'
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function Navbar() {
  return (
    <div className='App'>
      <nav className='navbar'>
        <div className='container'>
          <ul className='nav'>
            <a href='#'>Gmail</a>

            <a href='#'>Images</a>

            <AppsIcon className='appsIcon'>apps</AppsIcon>

            <img
              className='profilePicture'
              src='https://lh3.googleusercontent.com/ogw/ADea4I546A71zoRb5SbYy8YXipugWmnq7H6jvzAcY56SOw=s32-c-mo'
            />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
