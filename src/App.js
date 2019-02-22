import React, { Component } from 'react'
import '../src/css/App.css'
import Header from './components/Header'
import Form from './components/form'

class App extends Component {
    makeSearch = (e) => {
      const request = e.target.elements.request.value
        e.preventDefault()
        console.log(e)
        console.log(request)
        // const request = e.target.element.request.value
        // if(request !== null || undefined) {
        //   console.log(request)
        // } else {
        //   console.log('please enter a string')
        // }
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <Form makeSearch={this.makeSearch}/>
            </div>
        )
    }
}

export default App