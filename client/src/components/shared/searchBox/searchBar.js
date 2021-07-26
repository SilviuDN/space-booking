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


        this.setState({ selectedOption })

        this.props.setTravel(this.props.dataKey, selectedOption.id)
    }




    handleSearch = (e) => {

        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }



        this.setState({

            typingTimeout: setTimeout(() => {
                this.loadData(this.props.dataToLoad, e.target.value)

            }, 400)

        })
    }




    loadData = (service, searchString, all) => {


        if (all !== 'all') {

            // le pasamos el servicio desde el padre como datatoload
            service
                .searchBoxData(searchString)
                .then(response => {
                    console.log(response)
                    this.setState({ [this.props.dataKey]: response.data })
                })

                .catch(err => console.log(err))

        }
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
                fontFamily: 'Times New Roman',
                fontSize: 18,
                border: state.isFocused ? 0 : 0,
                boxShadow: state.isFocused ? 0 : 0,
                cursor: 'text',
                borderRadius: 0,
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
                boxShadow: 'none',
                borderRadius: 0,
            }),

            singleValue: styles => ({
                ...styles,
                color: 'rgba(255, 80, 86)',
            }),
        }


        const options = this.state[this.props.dataKey]?.map(
            (data) => {

                const { name, _id } = data

                if (data.address) {
                    const { city, country } = data.address
                    return {
                        id: _id,
                        value: name + ' - ' + city + ' (' + country + ')',
                    }
                } else {
                    return {
                        id: _id,
                        value: name,
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
                    placeholder="Search..."
                    openMenuOnClick={false}

                    classNamePrefix="select"
                    styles={customStyles}
                />
            </div>
        )
    }
}

export default searchBar