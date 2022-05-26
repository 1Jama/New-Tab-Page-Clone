import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Shortcuts from './Shortcuts'

function App() {
  return (
    <>
      <Navbar />
      <div className='appContainer'>
        <Searchbar />
        <Shortcuts />
      </div>
    </>
  )
}

export default App
