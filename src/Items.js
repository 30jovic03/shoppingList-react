import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';

const Items = ({items, toggleItem, editItem, editQty, editPrice, deleteItem}) => {

  const itemList = items.length ? (
    items.map(item => {
      return (
        <div className="list-group-item" key={item.id}>
          <div className="row">
          <span>
            <FontAwesomeIcon 
            className='item' icon='check-circle' 
            onClick={() => {toggleItem(item.id)}}
            />
          </span>
          <input 
          type="text" 
          className={'col-7 item' + (item.completed ? ' completed' : '')} 
          value={item.content}
          onChange={(e) => {editItem(e.target.value, item.id)}}
          />
          <span>
            <FontAwesomeIcon 
            className='item' icon='trash' 
            onClick={() => {deleteItem(item.id)}}
            />
          </span>
          <div className="col-1"></div>
          <input 
          type="number"
          step="1"
          min="1" 
          className='item col-1'
          value={item.qty}
          onChange={(e) => {editQty(e.target.value, item.id)}}
          />
          <input 
          type="text" 
          className='item col-1'
          value={item.price}
          onChange={(e) => {editPrice(e.target.value, item.id)}}
          />
          </div>
        </div>
      )
    })
  ) : (
    <h4 className="mx-auto">Nothing more to buy...</h4>
  )
  return (
    <div className="items list-group">
      {itemList}
    </div>
  )
}

export default Items