import React, {Component} from 'react';
import Navbar from './Narbar'
import SearchFrom from './SearchForm';
import Table from './Table';
import API from '../utils/API'


class EmployeeContainer extends Component {
    state = {
        results: [],
        search: ""
    }
    componentDidMount() {
        this.searchEmployees();
      }

    searchEmployees = () => {
        API()        
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, search the Giphy API for `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };

    render(){
        return (
            <>
                <Navbar />
                <SearchFrom 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Table result={this.state.results}/>
            </>
        );
    }
}

export default EmployeeContainer;