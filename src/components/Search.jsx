import { React, useContext } from 'react'
import { Context } from '../Context';
import '../css/Search.css'
function Search() {

  const { search, handleSearch, darkMode } = useContext(Context);

  return (
    <div className={darkMode ? 'App darkMode' : 'App'} id='search-group'>
      <input type='search' value={search} placeholder='search' onChange={handleSearch} 
      className={darkMode ? 'darkinput' : 'input'}>
        
      </input>
      <button className={darkMode ? 'darkSearch' : 'search'}>search</button>
    </div>
  )
}

export default Search