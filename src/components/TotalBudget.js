import React from 'react'

const TotalBudget = ({totals, crrTotalAmount}) => {
  return (
    <div className='budget-card total-budget'>
      <p className='budget-card-name'>Total</p>
        <progress className='budget-card-progess' value={crrTotalAmount} max={totals}></progress>
        <p className='amount-card'><span className='crramount-budget-card'>{crrTotalAmount}</span><span className='totalamount-budget-card'>/{totals}</span></p>
    </div>
  )
}

export default TotalBudget
