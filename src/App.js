import './App.css';
import React, {   useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'
import { Route, Routes} from "react-router-dom";



const App = () => {
  const pagesize = 9;
  const apiKey = process.env.REACT_APP_KEY
  const [progress, setProgress] = useState(0)

  return( 
      <div>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height = {6}
        waitingTime	= {1000}
       />
        <Routes>
          <Route exact path="/"  element={<News setProgress={setProgress}  key="general"  category='general' pagesize={pagesize} apiKey={apiKey} country="in" Key="general"/>}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress}  key="business" category='business'  pagesize={pagesize} apiKey={apiKey} country="in" Key="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="entertainment" category='entertainment'  pagesize={pagesize} apiKey={apiKey} country="in" Key="entertainment"/>}></Route>
          <Route exact path="/General" element={ <News setProgress={setProgress} key="general" category='general'  pagesize={pagesize} apiKey={apiKey} country="in" Key="general"/>}></Route>
          <Route exact path="/Health" element={ <News setProgress={setProgress}  key="health" category='health'  pagesize={pagesize} apiKey={apiKey} country="in" Key="health"/>}></Route>
          <Route exact path="/Science" element={ <News setProgress={setProgress}  key="science" category='science'  pagesize={pagesize} apiKey={apiKey} country="in" Key="science"/>}></Route>
          <Route exact path="/Sports" element={ <News setProgress={setProgress}  key="sports" category='sports'  pagesize={pagesize} apiKey={apiKey} country="in" Key="sports"/>}></Route>
          <Route exact path="/Technology" element={ <News setProgress={setProgress}  key="technology"  category='technology' pagesize={pagesize} apiKey={apiKey} country="in" Key="technology"/>}></Route>
        </Routes>
      <Footer/>
    </div>
    

)}
export default App;





