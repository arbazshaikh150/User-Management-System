import './App.css'
import {Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Routes>
        {/* Making the two routes */}
        {/* / ---> SignIn */}
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<Profile/>}></Route>

      </Routes>
    </>
  )
}

export default App
