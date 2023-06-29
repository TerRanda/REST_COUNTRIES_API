import { useEffect, useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import { Context } from './Context'
import Search from './components/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [country, setCountry] = useState(null);
  const [ darkMode, setDarkMode ] = useState(false);
  const [ search, setSearch ] = useState('');
  

  const fetchCountry = () => {
    const url = 
    `https://restcountries.com/v3.1/all`;

    fetch(url)
      .then(res => res.json())
      .then(data => { 
        setCountry(data);
        console.log(data);
      })
      .catch(()=>{
        console.log('에러');
      })
  }
  
  useEffect(()=>{
   fetchCountry();
    return() => {
    }
  },[]); 

  const handleDarkmode = () => {
    setDarkMode(!darkMode);
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  return (
    <BrowserRouter>
        <Context.Provider value={{
          country, darkMode, handleDarkmode, search,
          handleSearch
          }}>
          <Header/>
          <Search/>   
          <Routes>    
            <Route path='/'
             element={<Home data={country}/>} />
           
            <Route path='/detail/:flag'
             element={<Detail data={country}/>} />     
          </Routes>  
        </Context.Provider>
    </BrowserRouter>
  )
}

export default App
