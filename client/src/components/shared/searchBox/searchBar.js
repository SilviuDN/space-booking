import { Component } from 'react';
import Select from 'react-select'
// import styled from '@emotion/styled'


class searchBar extends Component {
    constructor() {
        super()
        this.state = {
            selectedOption: null,
            airports: [],
            destinations: [],
            typingTimeout: 0,
        }
        // this.searchList = undefined

    }



    handleChange = selectedOption => {

        this.setState({ selectedOption, })

        this.props.setTravel(this.props.dataKey, selectedOption.id)
    }




    handleSearch = (e) => {

        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }

        this.setState({

            typingTimeout: setTimeout(() => {
                e.keyCode === 32 ? this.loadData(this.props.dataToLoad, 'alldestinations') : this.loadData(this.props.dataToLoad, e.target.value)

            }, 400)

        })
    }



    loadData = (service, searchString) => {


        if (this.props.dataKey === 'destinations') {

            if (searchString === 'alldestinations') {

                service
                    .getDestinations()
                    .then(response => this.setState({ [this.props.dataKey]: response.data }))
                    .catch(err => console.log(err))

            } else {

                service
                    .searchBoxData(searchString)
                    .then(response => this.setState({ [this.props.dataKey]: response.data }))
                    .catch(err => console.log(err))
            }

        } else {

            service
                .searchAvailFlights(this.props.destinationId || this.state.selectedOption?.id)
                .then(response => this.setState({ [this.props.dataKey]: response.data }))
                .catch(err => console.log(err))

        }

    }


    componentDidMount = () => this.loadData(this.props.dataToLoad, 'alldestinations')


    componentDidUpdate(prevProps, prevState) {
        prevProps.destinationId !== this.props.destinationId && this.loadData(this.props.dataToLoad)
    }





    render() {

        // const StyledSearch = styled(Select)`
        //         width: 300px;
        //         padding: 20px;
        //         .select__menu-list::-webkit-scrollbar{
        //         width: 4px;
        //         height: 0px;
        //         }
        //         .select__menu-list::-webkit-scrollbar-track{
        //         background: #f1f1f1;
        //         }
        //         .select__menu-list::-webkit-scrollbar-thumb{
        //         background: #888;
        //         }
        //         .select__menu-list::-webkit-scrollbar-thumb:hover{
        //         background: #555;
        //         }
        //         `

        const customStyles = {
            control: (base, state) => ({
                ...base,
                // fontFamily: 'Times New Roman',
                fontSize: 18,
                border: state.isFocused ? 0 : 0,
                boxShadow: state.isFocused ? 0 : 0,
                cursor: 'text',
                borderRadius: 5,
                borderBottom: 'solid 1px',
            }),

            option: (styles, { isFocused }) => {
                return {
                    ...styles,
                    cursor: 'pointer',
                    backgroundColor: isFocused ? 'white' : 'white',
                    color: isFocused ? 'rgba(255, 80, 86)' : 'black',
                    lineHeight: 2,
                }
            },

            input: styles => ({
                ...styles,
                color: 'black',
                fontFamily: 'Times New Roman, Times, Serif',
            }),

            menu: styles => ({
                ...styles,
                marginTop: 0,
                paddingTop: 5,
                paddingBottom: 5,
                boxShadow: 'none',
                borderRadius: 0,
                border: '1px solid #1e2746',
            }),

            singleValue: styles => ({
                ...styles,
                color: 'rgba(255, 80, 86)',
            }),
        }


        const options = this.state[this.props.dataKey]?.map(
            (data) => {

                const { name, _id } = data

                if (this.props.dataKey === 'destinations') {

                    return {
                        id: _id,
                        value: name,
                    }
                } else {

                    const { name, _id } = data.airport
                    const { city, country } = data.airport.address
                    return {
                        id: _id,
                        value: name + ' - ' + city + ' (' + country + ')',
                    }


                }

            }

        )


        return (



            <div>
                <Select
                    value={this.state.selectedOption}
                    options={options}
                    getOptionLabel={(options) => options['value']}
                    getOptionValue={(options) => options['id']}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSearch}
                    placeholder="Search... "
                    openMenuOnClick={true}


                    classNamePrefix="select"
                    styles={customStyles}
                />
            </div>
        )
    }
}

export default searchBar