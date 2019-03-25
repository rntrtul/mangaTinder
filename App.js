import React, { Component } from 'react'
import MangaList from './Manga/MangaList.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MangaList />
      </div>
    )
  }
}

export default App
