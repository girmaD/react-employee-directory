import React, {Component} from 'react';
import Navbar from './Narbar'
import SearchFrom from './SearchForm';
import Table from './Table';
import API from '../utils/API'

//a stateful class component
class EmployeeContainer extends Component {
    //defines the inital value of a state  
    state = {
        results: [],
        search: "",        
        isCliked: false
    }
    //runs searchEmployee function when the page loads
    componentDidMount() {
        
        this.searchEmployees();        
    }
    //searchEmployee funstion calls an API and then updates results property of the state variable
    searchEmployees = () => {
        API()             
        .then(res => this.setState({ results: res.data.results }))                
        .catch(err => console.log(err));    
    };
    //updates search property of the state with event.target.value and runs handle filter function
    handleInputChange = event => {        
      this.setState({ search: event.target.value });  
      this.handleFilter();    
    };

    //hanldleFilter function creates a new arr by filtering the origianl results array with elements containig the typed search characters on first or last name
    handleFilter = () => {
      let arr = this.state.results;            
      let newArr = arr.filter(result => result.name.first.indexOf(this.state.search) !== -1 || result.name.last.indexOf(this.state.search) !== -1)
      
      this.setState({results: newArr})
    }
    
    //this functions prevents default on submit
    //runs handleFilter on submit and updates the state var search to be empty after submit is done
    handleFormSubmit = event => {
      event.preventDefault();
      this.handleFilter();
      this.setState({search: ""});
    };

    //this function sorts the results array both in ascending and descending order
    //it uses the boolean property of isCliked to toggle between asceding and descending order
    handleSort = () => {      
      let arr = this.state.results
      //if isClicked is false - sort by ascending
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
      }
      //if already ascending - sort by decsending
      else {
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
    //calling render function - a must do for class components
    //pass search, handleInputChange and handleFormSubmit as props to SearchForm
    //pass handleSort and results as props to Table
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