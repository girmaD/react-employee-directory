import React from 'react';
import EmployeeList from './EmployeeList'

function Table(props) {    
    return (       
        <table className="table  mx-3 px-3">
            <thead className="bg-dark text-white">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>           
            <EmployeeList result={props.result}/>
        </table>    
    );
};
export default Table;