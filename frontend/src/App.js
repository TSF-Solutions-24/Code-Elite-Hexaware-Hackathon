import React from 'react'
import StartPage from './pages/StartPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Registration/SignUp'
import Home from './pages/Home'
import Login from './pages/Registration/Login'
import YourDetails from './pages/Registration/YourDetails'
import Certificate from './pages/Registration/Certificate'
import SocialConnect from './pages/Registration/SocialConnect'
import ProgrammingLanguage from './pages/Registration/ProgrammingLanguage'
import Courses from './pages/Courses'
import Resources from './pages/Resources'
import Leaderboard from './pages/Registration/Leaderboard'
import Videos from './pages/Videos'
import Asessment from './pages/Asessment'
import VideosPlay from './pages/VideosPlay'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/registration/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/registration/login' element={<Login/>}/>
          <Route path='/registration/yourDetails' element={<YourDetails/>} />
          <Route path='/registration/certificate' element={<Certificate/>} />
          <Route path='/registration/socialConnect' element={<SocialConnect/>} />
          <Route path='/registration/programming' element={<ProgrammingLanguage/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/assessment' element={<Asessment/>}/>
          <Route path='/videosPlay' element={<VideosPlay/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
