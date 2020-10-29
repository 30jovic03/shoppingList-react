import React from 'react'

const CalculateTotal = ({items}) => {
  let total = 0;
  items.map(item => {
    total += item.qty * item.price;
    return total
  })
  return (
    <div className="row justify-content-end">
      <h2 className="col-2">Total:</h2>
      <h3 className="col-2">{total}</h3>
    </div>
  )
}

export default CalculateTotal