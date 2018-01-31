import '../App.css';
import React, { Component } from 'react';
import { Button, Card} from 'antd';

export class Calculator extends Component {
  constructor(props){
      super(props);
      this.state = {
        prev: [],
        total: []
      };
  }
  inputDigit(int) {
    let newArr = this.state.total.slice();
    newArr.push(int);
    this.setState({total: newArr});
  }
  operation(prevNum, op) {
    let store = this.arrToNum(prevNum);
    let newArr = this.state.prev.slice();
    newArr.push(store , op);
    console.log("pusharray "+newArr)
    let string = newArr.join(" ");
    console.log("operation "+string)
    this.setState({total:[] , prev: [string]});
    return prevNum;
  }

  clearInput() {
    this.setState({total:[],prev:[]});
  }

  sum(currNum) {
    let store = this.arrToNum(currNum);
    let newArr = this.state.prev.slice();
    newArr.push(store);
    console.log( newArr.join(" "));
    let sum = eval(newArr.join(" "));
    this.setState({total:[sum],prev:[]});
  }

  arrToNum(arr) {
    let test = Number(arr.join(''));
    return test;
  }

  displaynum(num) {
    console.log(num);
    let newNum = this.arrToNum(num);
    let formatNum = newNum.toString();
    console.log(formatNum)
    return formatNum;
  }
  render() {


    return (

        <Card style={{ width: 500 , backgroundColor : this.props.myColor , borderRadius:"20px" ,textAlign:"center"}}>
            <div style={{ backgroundColor : "#d9d9d9" , fontSize:"26px",textAlign:"right",paddingRight:"10px" }}> <p>{this.displaynum(this.state.total)}</p></div>
            <div>
    <div style={{ marginTop : "10px" }} >
    <Button  type="danger"  style={{ width : "400px" }} onClick={() => this.clearInput()} >AC</Button>

    </div>
    <div>
    <Button type="primary" onClick={() => this.inputDigit(7)}>7</Button>
    <Button  type="primary" onClick={() => this.inputDigit(8)}>8</Button>
    <Button type="primary" onClick={() => this.inputDigit(9)}>9</Button>
    <Button type="danger" onClick={() => this.operation(this.state.total,"*")}>x</Button>
    </div>
    <div>
    <Button type="primary" onClick={() => this.inputDigit(4)}>4</Button>
    <Button type="primary" onClick={() => this.inputDigit(5)}>5</Button>
    <Button type="primary" onClick={() => this.inputDigit(6)}>6</Button>
    <Button type="danger" onClick={() => this.operation(this.state.total,"-")}>-</Button>
    </div>
    <div>
    <Button type="primary" onClick={() => this.inputDigit(1)}>1</Button>
    <Button type="primary" onClick={() => this.inputDigit(2)}>2</Button>
    <Button type="primary" onClick={() => this.inputDigit(3)}>3</Button>
    <Button type="danger" onClick={() => this.operation(this.state.total,"+")}>+</Button>
    </div>
    <div>
    <Button type="primary" onClick={() => this.inputDigit(0)}>0</Button>
    <Button type="danger" onClick={() => this.inputDigit(".")}>.</Button>
    <Button type="danger" onClick={() => this.operation(this.state.total,"/")}>/</Button>
    <Button type="danger" onClick={() => this.sum(this.state.total)}>=</Button>
      </div>
            </div>
  
        </Card>
      );
    }
}