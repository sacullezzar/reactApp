import React, { Component } from 'react'
import '../src/css/App.css'
import Dropdown from './components/Dropdown'



class App extends Component {
  constructor() {
    super()
    this.state = {
      menuOptions: [
        {id:1, key:1, title:'Characters', selected:false},
        {id:2, key:2, title:'Episodes', selected:false}]
    }
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }
  render() {
    return (
      <div className='App'>
        <Dropdown title='Hello' list={this.state.menuOptions} toggleItem={this.toggleSelected}/>
      </div>
    )
  }
}

export default App