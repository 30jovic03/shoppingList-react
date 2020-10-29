import React, {Component} from 'react';
import './App.css';
import HeadingBar from './HeadingBar'
import Items from './Items'
import AddItem from './AddItem'
import CalculateTotal from './CalculateTotal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrash);

class App extends Component {
  state = {
    items: [
      {id: 1, content: 'milk', completed: false, qty: 1, price: 100},
      {id: 2, content: 'juice', completed: true, qty: 3, price: 170},
      {id: 3, content: 'bread', completed: false, qty: 2, price: 120}
    ]
  }
  addItem = (item) => {
    item.id = Math.random();
    item.completed = false;
    if (isNaN(item.qty)) {
      item.qty = 1;
    }
    item.price = 0;
    let items = [...this.state.items, item];
    this.setState ({
      items
    })
  }
  toggleItem = (id) => {
    let items = this.state.items;
    items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item
    })
    this.setState ({
      items
    })
  }
  editItem = (content, id) => {
    let items = this.state.items;
    items.map(item => {
      if (item.id === id) {
        item.content = content;
      }
      return item
    })
    this.setState ({
      items
    })
  }
  editQty = (newQty, id) => {
    let items = this.state.items;
    items.map(item => {
      if (item.id === id) {
        (isNaN(item.qty)) ? item.qty = 1 : item.qty = newQty;
        }
        return item
      }
    )
    this.setState ({
      items
    })
  }
  editPrice = (newPrice, id) => {
    let items = this.state.items;
    items.map(item => {
      if (item.id === id) {
        (isNaN(item.price)) ? item.price = 0 : item.price = newPrice;
        }
        return item
      }
    )
    this.setState ({
      items
    })
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState ({
      items
    })
  }
  render() {
    return (
      <div className="shopping-app container">
        <h1 className="mx-auto">Shopping List App</h1>
        <AddItem addItem={this.addItem}/>
        <HeadingBar />
        <Items 
        items={this.state.items} 
        toggleItem={this.toggleItem} 
        editItem={this.editItem} 
        editQty={this.editQty}
        editPrice={this.editPrice}
        deleteItem={this.deleteItem} 
        />
        <CalculateTotal items={this.state.items} />
      </div>
    );
  }
}

export default App;
