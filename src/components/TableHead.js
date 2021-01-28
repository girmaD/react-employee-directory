import React from 'react';

function TableHead(props) {
    
    return (
        <thead className="bg-dark text-white">
            <tr>
                <th scope="col">Image</th>
                <th scope="col"><button onClick={props.handleSort} className="btn btn-dark">Name &#x0005E;</button></th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead> 
    )
}
 export default TableHead;
