import React, { Component } from 'react'
import MangaData from '../data/MangaData.json'
import MangaDetails from './MangaDetails.js'

class MangaList extends Component {
  render () {
    return (
      <div >
        <h1>Manga List:</h1>
        {MangaData.map((manga, index) => {
          return <MangaDetails manga={manga} key={`manga-List key is ${index}`} />
        })}
      </div>
    )
  }
}

export default MangaList
