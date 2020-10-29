import React, { Component } from 'react'

class AddItem extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState ({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content) {
      this.props.addItem(this.state);
      this.setState ({
        content: ''
      })
    }
  
  }
  render() {
    return (
      <div>
        <form className="row" onSubmit={this.handleSubmit}>
          <h4 className="col-2">Add new item:</h4>
          <input className="col-3" type="text" value={this.state.content} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default AddItem