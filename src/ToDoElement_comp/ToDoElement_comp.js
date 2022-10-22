
//-------------------------------------------------
import './ToDoElement_comp.css';
import ReactDOM from "react-dom";
import React from "react";

export default class ToDoElement_comp extends React.Component {
  state = {
    complete : ""
  };
  constructor(props)
  {
   
    super(props);
    this.state={
      complete : ""
    };
  }


  render() {
    return (
      <>
      <div class="row toDoElement">
                <div class="col-2 "><button onClick={this.Complete}  type="button" class="btn btn-success Bbtn">Complete</button></div> 
                <div class="col-2 "><button onClick={this.deleteThis}  type="button" class="btn btn-danger Bbtn">Delete</button></div> 
                <div class="col-8 disp" style={{textDecoration : `${this.state.complete}`}}>{this.props.title}</div> 

            </div>
      
      </>
    );
  }



   Complete = () => {
     
    this.setState({
      
      complete : 'line-through'
    })
  }

     deleteThis = () => {
  
      this.props.deleteRecordd(this.props.id);
      
      
    }
  
}
