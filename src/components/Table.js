import React from 'react';
import TableBody from './TableBody'
import TableHead from './TableHead';

function Table(props) {     
    return (       
        <table className="table  mx-3 px-3">
            <TableHead handleSort={props.handleSort}  />         
            <TableBody result={props.result}/>
        </table>    
    );
};
export default Table;