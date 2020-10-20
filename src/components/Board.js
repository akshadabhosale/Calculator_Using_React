import React from "react";
import { Button } from 'react-bootstrap';
//import Table from 'react-bootstrap/Table';
import Result from "./Result"
import "./Result.css"

class Board extends React.Component{
    constructor(props)
    {
        super(props);
    }
   keyPress=(i)=>{
        alert(i);
    }

    render()
    {
    
        return(
        <div>
            <Result/>
            <Button variant="outline-secondary" value="7" className="btn" onClick={()=>this.keyPress(7)}>7</Button>{' '}
            <Button variant="outline-secondary" value="8" className="btn" onClick={()=>this.keyPress(8)} >8</Button>{' '}
            <Button variant="outline-secondary" value="9" className="btn" onClick={()=>this.keyPress(9)}>9</Button>{' '}
            <Button variant="outline-secondary" value="/" className="btn" onClick={()=>this.keyPress("/")}>/</Button>{' '}

            <br></br>
            <Button variant="outline-secondary" value="4" className="btn" onClick={()=>this.keyPress(4)}>4</Button>{' '}
            <Button variant="outline-secondary" value="5" className="btn" onClick={()=>this.keyPress(5)}>5</Button>{' '}
            <Button variant="outline-secondary" value="6" className="btn" onClick={()=>this.keyPress(6)}>6</Button>{' '}
            <Button variant="outline-secondary" value="*" className="btn" onClick={()=>this.keyPress("*")}>*</Button>{' '}
            <br></br>
            <Button variant="outline-secondary" value="1" className="btn" onClick={()=>this.keyPress(1)}>1</Button>{' '}
            <Button variant="outline-secondary" value="2" className="btn" onClick={()=>this.keyPress(2)}>2</Button>{' '}
            <Button variant="outline-secondary" value="3" className="btn" onClick={()=>this.keyPress(3)}>3</Button>{' '}
            <Button variant="outline-secondary" value="-" className="btn" onClick={()=>this.keyPress("-")}>-</Button>{' '}
            <br></br>
            <Button variant="outline-secondary" value="0" className="btn" onClick={()=>this.keyPress(0)}>0</Button>{' '}
            <Button variant="outline-secondary" value="." className="btn" onClick={()=>this.keyPress(".")}>.</Button>{' '}
            <Button variant="outline-secondary" value="=" className="btn" onClick={()=>this.keyPress("=")}>=</Button>{' '}
            <Button variant="outline-secondary" value="+" className="btn" onClick={()=>this.keyPress("+")}>+</Button>{' '}



            </div>
        )
    }

}

export default Board;