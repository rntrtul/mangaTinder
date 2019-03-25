import React, { Component } from 'react'

class MangaDetails extends Component {
  titleWasClicked () {
    { alert('clicked') }
  }

  render () {
    const { manga } = this.props
    return (
      <div>
        <h2 onClick={this.titleWasClicked}>{manga.Title}</h2>
        <p>Author: {manga.Author} <br /> Chapters: {manga.Chapters}</p>
      </div>
    )
  }
}

export default MangaDetails
