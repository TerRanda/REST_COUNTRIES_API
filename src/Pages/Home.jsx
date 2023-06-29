import { React, useContext } from 'react'
import { Context } from '../Context'
// import { useParams } from 'react-router-dom'
import '../css/Home.css'
import { Link } from 'react-router-dom';

function Home() {

  const {darkMode, country, search} = useContext(Context);
  console.log(country);

  
  return (
    <main className={darkMode ? 'App darkMode' : 'App'} id='countryBox'>
      
        {
          country &&
          country.map((item, index) => {
            console.log(item);
            
            return(
                    <div className='countryItem'key={index}>
                      <Link to={`/detail/${item.flag}`}>
                        <img src={item.flags.png} alt='flags'></img>
                      </Link>
                        <div className='info'>
                          <p className='infoName'>{item.name.common} {item.translations.kor.common}</p>
                          <p className='infoDetail'>Population: {item.population.toLocaleString()}</p>
                          <p className='infoDetail'>Region: {item.region}</p>
                          <p className='infoDetail'>Capital: { item.capital != null ? item.capital : "None"}</p>
                        </div>
                      
                    </div>
            )
          }
        )}
      
    </main>
  )
}

export default Home