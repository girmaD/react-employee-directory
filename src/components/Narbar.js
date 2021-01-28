import React from 'react';

function Navbar() {
   return (    
    <div className="container-fluid py-3 text-white" style={{backgroundColor: '#03002e'}}>
        <h2 className="text-center">Employee Directory</h2>
        <p className="lead text-center">Click on controls to filter by heading or use the search box to narrow your results</p>
    </div>    
   );    
}

export default Navbar;