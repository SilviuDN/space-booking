import { Component } from 'react';

class RadioButton extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
            value: ''

        }
    }


    handleRadioButton = (e, jumpState) => {


        this.setState({
            checked: !this.state.checked
        })
        e.target.checked = this.state.checked


        if (this.props.value === 1 && this.state.value === '') {
            this.setState({ value: 'popino1' })
        } else if (this.props.value === 2 && this.state.value === '') {
            this.setState({ value: 'popino2' })
        } else if (this.props.value === 3 && this.state.value === '') {
            this.setState({ value: 'popino3' })
        } else {
            this.setState({ value: '' })
        }

        setTimeout(() => {
            this.props.setRadioValue(this.props.value, this.state.value)

        }, 1000)

    }

    handleChange = (e) => {


    }


    render() {
        return (
            <>
                <input type="radio" className="radio" checked={this.state.checked} onClick={(e) => this.handleRadioButton(e)} onChange={() => this.handleChange()} />
                {
                    this.props.value === 1 ? <span className="radio-text">Popino 1</span> :
                        this.props.value === 2 ? <span className="radio-text">Popino 1</span> :
                            this.props.value === 3 ? <span className="radio-text">Popino 1</span> :
                                null

                }
            </>
        )
    }
}

export default RadioButton