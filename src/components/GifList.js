import React from 'react'

class GifList extends React.Component {

    listGifs = () => {
        return this.props.gifs.map(gif => <li><img src={gif}/></li>)
    }

    render() {
        return (
          <ul>
              {this.listGifs()}
          </ul>
        )
    }
}

export default GifList