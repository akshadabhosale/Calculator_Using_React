import React from "react";
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

class Board extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th> </th>
                <th></th>
                <th> </th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td> <Button variant="outline-secondary">0</Button>{' '}</td>
                <td><Button variant="outline-secondary">0</Button>{' '}</td>
                <td><Button variant="outline-secondary">0</Button>{' '}</td>
                <td><Button variant="outline-secondary">0</Button>{' '}</td>
                </tr>
                <tr>
                <td><Button variant="outline-secondary">0</Button>{' '}</td>
                <td><Button variant="outline-secondary">0</Button>{' '}</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
        )
    }

}

export default Board;