import './App.css'
import {Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
      <Routes>
        {/* Making the two routes */}
        {/* / ---> SignIn */}
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App
