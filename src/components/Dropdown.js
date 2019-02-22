import React, { Component } from 'react'
import '../css/App.css'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
        listOpen: false,
        headerTitle: this.props.title
    }
  this.close = this.close.bind(this)
  this.selectItem = this.selectItem.bind(this)
  this.toggleList = this.toggleList.bind(this)
  }
  componentDidUpdate() {
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen) {
          window.addEventListener('click', this.close) 
      } else {
          window.removeEventListener('click', this.close)
      }
    }, 0)
  }
  componentWillMount() {
    window.removeEventListener('click', this.close)
  }

  close(timeOut) {
    this.setState({
      listOpen: false
    })
  }

  selectItem(title, id, stateKey){
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey))
  }

  toggleList(){
    console.log(this.state)
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  render() {
    const{list, toggleItem} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className='dropdown-wrapper'>
        <div className='dropdown-header' onClick={this.toggleList}>
          <div className='dropdown-header-title'>{headerTitle}</div>
        </div>
        {listOpen && <ul className='dropdown-list' onClick={e => e.stopPropagation()}>
          {list.map((item) => (
            <li className='dropdown-list-item' key={item.id}>
            {item.title}
            </li>
          ))}
          </ul>}
      </div>
    )
  }
}

export default Dropdown;
