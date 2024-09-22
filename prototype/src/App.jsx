import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Resources from './pages/Resources'
import SignUp from './pages/registration/SignUp'
import Login from './pages/registration/Login'
import SignUpMobile from './pages/registration/SignUpMobile'
import YourDetails from './pages/registration/YourDetails'
import Certifications from './pages/registration/Certifications'
import SocialConnect from './pages/registration/SocialConnect'
import ProgrammingLanguage from './pages/registration/ProgrammingLanguage'
import LeaderboardPage from './pages/Leaderboard/LeaderboardPage'
import JavaFullStackCourse from './pages/Videos/JavaFullStactCourse'
import Layout from './pages/Videos play/Layout'
import ProctorExam from './pages/Assesment/ProctorExam'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signupmobile' element={<SignUpMobile/>}/>
          <Route path='/yourdetails' element={<YourDetails/>}/>
          <Route path='/certifications' element={<Certifications/>}/>
          <Route path='/socialconnect' element={<SocialConnect/>}/>
          <Route path='/programminglanguage' element={<ProgrammingLanguage/>}/>
          <Route path='/leaderboard' element={<LeaderboardPage/>}/>
          <Route path='/videos' element={<JavaFullStackCourse/>}/>
          <Route path='/videosplay' element={<Layout/>}/>
          <Route path='assessment' element={<ProctorExam/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
