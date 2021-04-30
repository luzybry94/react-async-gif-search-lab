import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchValue: ''
    }

    searchChangeHandler = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state.searchValue)
        this.state.searchValue = ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='search for gifs' value={this.state.searchValue} onChange={this.searchChangeHandler} />
            </form>
        )
    }
}

export default GifSearch