import React from 'react'
import useAxios from '../hooks/useAxios'
import CoinTrending from './CoinTrending';

const TrendingCrypto = ({page}) => {
  const { response } = useAxios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`);

  return (
    <ul className='trending-container-all' style={{position:'relative'}}>
      {!response &&
      <div>
        <div className='loader' style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', top:'30%', left:'50%', transform: 'translate(-50%, -50%)'}}></div>
        <div>API Error. We apologies, try later!</div>
      </div>}
      {response && response.map(coin => {
        return <CoinTrending key={coin.name} cryptoId={coin.id} img={coin.image} crrPrice={coin.current_price} change={coin.price_change_percentage_24h} name={coin.name} code={coin.symbol}/>
      })}
    </ul>
  )
}

export default TrendingCrypto
