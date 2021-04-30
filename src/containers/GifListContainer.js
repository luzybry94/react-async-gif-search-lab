import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state = {
      gifs: []
  }

  fetchGifs = (searchTerm = 'dolphins') => {
    const url =  `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=1DqSftQxpJ1McYjOATADXhpdeST8DA6T&rating=g&limit=3`

    fetch(url)
      .then(res => res.json())
      .then(gifData => this.setState({ gifs: gifData.data.map(gif => gif.images.original.url )}))
    
  }

  componentDidMount() {
      this.fetchGifs()
  }

  render() {
      return (
          <div>
              <GifSearch submitHandler={this.fetchGifs} />
              <GifList gifs={this.state.gifs} />
          </div>
      )
  }
}

export default GifListContainer