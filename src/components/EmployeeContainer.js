import React, {Component} from 'react';
import Navbar from './Narbar'
import SearchFrom from './SearchForm';
import Table from './Table';
import API from '../utils/API'


class EmployeeContainer extends Component {
    state = {
        results: [],
        search: "",        
        isCliked: false
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
        const {name, value } = event.target;            
        this.setState({
          [name]: value         
        });
    };
    
      // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      this.searchEmployees(this.state.search);
    };

    handleSort = () => {      
      let arr = this.state.results
      if(!this.state.isCliked){
        arr.sort((a, b) => {
          let nameA = a.name.first.toUpperCase();
          let nameB = b.name.first.toUpperCase();
          if(nameA > nameB) {
            return 1;
          } else {
            return -1
          }
        })
        this.setState({
          results: arr,
          isCliked: true
        })
      } else {
        arr.sort((a, b) => {
          let nameA = a.name.first.toUpperCase();
          let nameB = b.name.first.toUpperCase();
          if(nameA > nameB) {
            return -1;
          } else {
            return 1
          }
        })
        this.setState({
          results: arr,
          isCliked: false
        })
      }
      
    }
    render(){
        return (
            <>
                <Navbar />
                <SearchFrom 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Table 
                  handleSort={this.handleSort} 
                  result={this.state.results}
                />
            </>
        );
    }
}

export default EmployeeContainer;