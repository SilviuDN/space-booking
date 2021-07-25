import { Component } from 'react';
import AirportService from '../../services/AirportService';
import Select from 'react-select'
import styled from '@emotion/styled'


class searchBar extends Component {
    constructor() {
        super()
        this.state = {
            selectedOption: null,
            airports: []
        }
        // this.searchList = undefined
        this.AirportService = new AirportService()
    }

    handleChange = selectedOption => {

        console.log(selectedOption)
        this.setState({ selectedOption })
        // code to make something happen after selecting an option
    }



    loadData = () => {

        this.AirportService
            .getAirportsData()
            .then(response => {
                this.setState({ airports: response.data })
            })

            .catch(err => console.log(err))




    }



    componentDidMount = () => this.loadData()



    render() {

        const StyledSearch = styled(Select)`
                width: 300px;
                padding: 20px;
                .select__menu-list::-webkit-scrollbar{
                width: 4px;
                height: 0px;
                }
                .select__menu-list::-webkit-scrollbar-track{
                background: #f1f1f1;
                }
                .select__menu-list::-webkit-scrollbar-thumb{
                background: #888;
                }
                .select__menu-list::-webkit-scrollbar-thumb:hover{
                background: #555;
                }
                `

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


        const options = this.state.airports?.map(
            ({ name, _id }) => {
                return {
                    id: _id,
                    value: name
                }
            }
        )


        return (

            // id: name,
            // value: name



            <div>
                <Select
                    value={this.state.selectedOption}
                    options={options}
                    getOptionLabel={(options) => options['value']}
                    getOptionValue={(options) => options['id']}
                    onChange={this.handleChange}
                    placeholder="Search..."
                    openMenuOnClick={true}

                    classNamePrefix="select"
                    styles={StyledSearch}
                />
            </div>
        )
    }
}

export default searchBar