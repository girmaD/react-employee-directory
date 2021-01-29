import React from 'react';

function SearchFrom(props) {
    // console.log(props.filter)
    return (       
        <div className="d-flex justify-content-center my-2 shadow p-3 mb-5 bg-white rounded">  
            <form onSubmit={props.handleFormSubmit}>              
                <input 
                    type="text" 
                    id="search" 
                    placeholder="search"
                    name="search"
                    onChange={props.handleInputChange}                    
                    value={props.search}
                />  
            </form>                          
        </div>          
    );
}

export default SearchFrom;