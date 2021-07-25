import { Component } from 'react';

class RadioButton extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
            value: '',
            counter: 1,

        }
    }


    handleRadioButton = (e) => {


        if (this.props.value === this.state.counter) {

            this.setState({
                checked: !this.state.checked
            })

            e.target.checked = this.state.checked
        }


        if (this.props.value === this.state.counter && this.state.value === '') {
            this.setState({ value: `popino${this.state.counter}` })

        } else if (this.props.value !== this.state.counter) {

            this.setState({ counter: this.state.counter + 1 })

            setTimeout(() => {
                this.handleRadioButton(e)

            }, 500)



        } else {

            this.setState({ value: '' })
        }

        setTimeout(() => {
            this.props.setRadioValue(this.props.value, this.state.value)

        }, 2000)

    }



    handleChange = (e) => {


    }


    render() {
        return (
            <>
                <input type="radio" className="radio" checked={this.state.checked} onClick={(e) => this.handleRadioButton(e)} onChange={() => this.handleChange()} />
                {
                    <span className="radio-text">radio {this.state.counter}</span>

                }
            </>
        )
    }
}

export default RadioButton