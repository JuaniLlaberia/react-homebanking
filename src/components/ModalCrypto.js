import React from 'react'
import useAxios from '../hooks/useAxios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ModalCrypto = ({onCLoseHandle, id}) => {
  const { response } = useAxios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);

  if(!response) {
    return <div>Loading...</div>
  }

  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2)}));

  const options = {
    responsive: true
  }

  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
    datasets:[
      {fill: true,
       label: id,
      data:coinChartData.map(val => val.y),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',},
    ]
  }


  return (
    <div className='modal-crypto'>
      {/* <h6 className='crypto-title'>{id.slice(0,1).toUpperCase() + id.slice(1)}</h6> */}
      <Line width='700vw' height='300vh' options={options} data={data}/>
      <button onClick={onCLoseHandle} className='close-modal-crypto'><FontAwesomeIcon icon={faX}/></button>
    </div>
  )
}

export default ModalCrypto
