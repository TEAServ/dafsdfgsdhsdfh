
//------------------------------------
//-------------------------------------------------
import './ToDoList_comp.css';
import ToDoElement_comp from '../ToDoElement_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";

export default class ToDoList_comp extends React.Component {
  state = {
    records : [],
        z:''
  };
  constructor(props)
  {
   
    super(props);
    // this.state={
    //   complete : ""
    // };
  }
  componentDidMount()
  {

    // console.log(this.props);
    // console.log(this.props.match.params.mail );

  }
  componentWillUnmount()
  {
    console.log('bye');
  }


  render() {
    return (
      <>

<div class="body">
        <div class="container ToDoContainer">

            <div class="row">
                <div class="col-4">
                    <br/><br/>
                    <h4>{this.props.match.params.name}</h4>
                    <span>{this.props.match.params.mail }</span>
                    <br/><br/>

                </div> 
                <div class="col-8 lgOut">
                  {this.props.match.params.name? (<button  type="button" onClick={() => this.props.history.push('/todo')} class="btn btn-outline-warning">Log Out</button>
                  ):(<button  type="button" onClick={() => this.props.history.push('/register')} class="btn btn-outline-warning">Sign Up</button>
                  )}

                    
                </div> 

            </div>
            <div class="row">
                
                <button onClick={this.AddRecord}  type="button" class="btn btn-info btn-block">Add TO-DO Element</button>

            </div>
            <div class="row">
                <div class="col-12 txtBox">
                <form id="formmm"  class="was-validated">
                    <div class="form-group">
                      <input type="text" class="form-control" id="todoHead" placeholder="TO-DO Title" name="uname" required />

                    </div>
                    </form>
                </div>
            </div>

            {/* <!-- ------------------------------------------------------ --> */}

           {this.state.records}

            {/* <!-- ------------------------------------------------------ --> */}
<br/><br/><br/>
        </div>
    </div>

      </>
    );
  }

   AddRecord = () => {
     
    var formy = document.getElementById('formmm');
    var txtBox = document.getElementById('todoHead');
    var title = txtBox.value;
    if (formy.checkValidity() === true) {
       this.state.records.push( <ToDoElement_comp key={title.toString()}  id={title} title={title} deleteRecordd={this.deleteRec} />)
       console.log(this.state.records);    
       this.setState({
            records:this.state.records.slice()
           })
           
        
    }
    txtBox.value = "";
}


 deleteRec = (id) => {
    console.log(id);
    //debugger
    console.log(this.state.records);
    var arr = this.state.records.filter(word => word.key != id)
    this.setState({
        records:arr
    })
    //setRecords([...records])
   // states.records.filter(word => word.length > 6)
   //  var arr = states.records;
   //  setStates({
   //      ...states,
   //      records : arr
   //  })
    
}




  
}