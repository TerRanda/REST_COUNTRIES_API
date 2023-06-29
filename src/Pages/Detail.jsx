import { React, useContext } from 'react'
import { Context } from '../Context'
import { useParams } from 'react-router-dom'
import '../css/Home.css'
import { Link } from 'react-router-dom';

function Detail() {
  const { darkMode, country } = useContext(Context);
  const { flag } = useParams();
  console.log(country);
  console.log('flag =', flag);

  const item = country?.find((item) => item.flag === flag);
  console.log('item =', item);

  return (
    <div className={darkMode ? 'App darkMode' : 'App'}>
      <Link to={'/'}>Back</Link>
      {
        item ? (
          <div className='detailBox'>
              <img src={item.flags.png} id='detailImg'></img>
            <div id='detailInfo'>
              <p>{item.name.common} {item.translations.kor.common}</p>
              <p><b>Region:</b> {item.region}</p>
              <p><b>Capital:</b>: {item.capital}</p>
              <p><b>Sub Region:</b> {item.subregion}</p>
              <p><b>Top Level Domain:</b> {item.topleveldomain}</p>
              <p><b>Language:</b> {item.language}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
          )
      }
    </div>
  )
}

export default Detail