import React from 'react';

function SearchFrom(props) {
    return (       
        <div className="d-flex justify-content-center my-2 shadow p-3 mb-5 bg-white rounded">                
                <input 
                    type="text" 
                    id="search" 
                    placeholder="search"
                    name="search"
                    onChange={props.handleInputChange}
                    onSubmit={props.handleFormSubmit}
                />                            
        </div>          
    );
}

export default SearchFrom;