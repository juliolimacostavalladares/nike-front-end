import {useEffect, useState} from 'react'

import './App.css'

function App() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/json")
      .then((response) => response.json())
      .then((data) => setApi(data));
  }, [])
  console.log(api)
  
  return (
    <div>
      {api.map((i) => {
        return(
          <div key={i.data.day} class="snkr-release produto produto--aviseme"><div className="snkr-release__info">
      <div classNames="snkr-release__date">
          </div>
          </div>
          <div className="produto__imagem">
          <a title="" className="aspect-radio-box snkr-release__img" >
            <img className="aspect-radio-box-inside" src={i.img}/>
            </a>
            <div className="produto__detalhe">
              <h2 className="produto__detalhe-titulo">{i.name}<br/>
              <span className="snkr-release__mobile-date">{`${i.data.day}/${i.data.month}`}
              </span>
              </h2>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default App;
