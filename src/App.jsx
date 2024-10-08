  import { useEffect, useState } from 'react'
  import './index.css'
  import axios from 'axios'
  import Tablerow from './components/Tablerow'

  function App() {

    let [data,setData] = useState([])

    async function fetchData(){
    const response = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    setData(response.data)
    }

    useEffect(()=>{
      fetchData()
    },[])

    console.log(data)

    return (
      <>  
        <h1>CoinGecko API</h1>
        <div className='table-container'>
        <table id='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Current Price</th>
              <th>High(24Hrs)</th>
              <th>Low(24Hrs)</th>
            </tr>
          </thead>
          <tbody>
          {data.map((element)=>{
            return <Tablerow key={element.name} element = {element} />
          })}
          </tbody>
        </table>
        </div>
      </>
    )
  }

  export default App
