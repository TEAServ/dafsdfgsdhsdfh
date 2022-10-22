
//---------------------------------------------

import './RegisterModal_comp.css';
import ReactDOM from "react-dom";
import React from "react";

export default class RegisterModal_comp extends React.Component {
  state = {
    warningClass : '',
    modalClosure : '',
    userName : ''

  };
  constructor(props)
  {
   
    super(props);
    // this.state={
    //   complete : ""
    // };
  }


  render() {
    return (
      <>

      
                        {/* <!-- The Modal --> */}
  <div isopen='true' class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
        
        
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
          
            








            <h2 className='frmHeader' >Register</h2><br/>
            <form onSubmit={(e) => {this.SubmitManually(e)}} id="form2" class="needs-validation" novalidate>

                <div class="form-group">
                  <label for="uname">username:</label>
                  <input type="text" onChange={(e) => {this.UpdateUserName(e)}} class="form-control" id="uname" placeholder="Enter username" name="uname" pattern="^[A-Za-z][A-Za-z0-9]{4,10}"  required />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback alert alert-danger">Please fill out this field.</div>
                </div>

                <div class="form-group">
                    <label for="p1">password:</label>
                    <input type="password" class="form-control" onKeyUp={this.UpdateRegEx} id="p1" placeholder="Enter your password" name="uname" pattern="[0-9]{8,15}"  required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback alert alert-danger">8 numbers</div>
                  </div>

                  <div class="form-group">
                    <label for="p2">confirm password:</label>
                    <input type="password" onInvalid={this.ApplyWarningClass} className={'form-control ' + `${this.state.warningClass}`} onKeyUp={this.UpdateRegEx} id="p2" placeholder="Re-enter your password" name="uname" pattern=""  required />
                    
                    <div class="invalid-feedback alert alert-warning">Password doesn't match</div>
                  </div><br/>


                <div className='nxtBtnCont'>
                    <button id='aq' className='nxtBtn' type='submit'   onClick={(e) => {this.checkk2(e)}} class="btn btn-primary"  >Next</button><div data-dismiss='modal' id='CloseModal'></div>
                </div>



                
              </form>














        </div>
        {/* <!--/Modal body --> */}
        
        
        
      </div>
    </div>
  </div>


        

      </>
    );
  }




   UpdateUserName = (e) => {

    this.setState({
      userName : e.target.value
    })
  }

   UpdateRegEx = () => {
    var pass1 = document.getElementById("p1");
    var pass2 = document.getElementById("p2");
    pass2.setAttribute("pattern","("+pass1.value+")")
}




 checkk2 = (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  //data-dismiss="modal" 
  var form2 = document.getElementById("form2");
  if (form2.checkValidity() === false) {
    console.log(e);
    
    form2.classList.add('was-validated');
      e.preventDefault();
      e.stopPropagation();
  } else
  {
   
   //console.log("------------------------------------");
      //console.log(this.props.mail,this.state.userName);
      
       document.getElementById('CloseModal').click();

      this.props.routingHistory.push(`/todo/${this.props.mail}/${this.state.userName}`)
    
  }
 
}


 ApplyWarningClass = () => {
  this.setState(
    {
      warningClass : 'warning'
    });
  
}
SubmitManually = (e) => {

  //var modal = document.getElementById('myModal');
  //modal.modal('hide');
   e.preventDefault();
  // e.stopPropagation();
}






  
}
