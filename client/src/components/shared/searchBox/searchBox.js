import { Component } from 'react'

class SearchBox extends Component {
    constructor() {
        super()
        this.state = {
            searchBox: '',
            typingTimeout: 0
        }
    }


    handleSearch = (e) => {

        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }

        this.setState({

            searchBox: e.target.value,
            typingTimeout: setTimeout(() => {

                this.props.load(this.state.searchBox);

            }, 500)
        });
    }



    render() {
        return (

            <input type="text" className="form-control" placeholder="SearchBox" name="search" value={this.state.searchBox} onChange={e => { this.handleSearch(e) }} />

        )
    }
}

export default SearchBox;