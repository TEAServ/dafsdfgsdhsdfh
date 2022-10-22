
import './Register_comp.css';
import RegisterModal_comp from '../RegisterModal_comp/RegisterModal_comp';
import ToDoList_comp from '../ToDoList_comp/ToDoList_comp';
import React from "react";

export default class Register_comp extends React.Component {
  state = {
    mail: '',
    IsVisible : true,
    userName:''

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


        <div class="cont">

            <div class="myBody">

                <div class="container">
                    <h2 className='frmHeader' >Register to ToDo List</h2><br/>
                    <form id="formy" class="needs-validation" novalidate>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3"><label for="mail">E-mail:</label>

                                </div>
                                <div class="col-md-9">
                                    <input type="email" class="form-control sss" id="mail" placeholder="Enter your Email" name="uname" pattern="^[A-Za-z][A-Za-z0-9]{2,15}@[a-z]{5,8}(.com|.net)$"  required />
                                    <div class="valid-feedback">Valid.</div>
                                    <div id="alertR" class="invalid-feedback alert alert-danger ">Please fill out this field.</div>
                                </div>
                            </div>
                            <div class="row">
                                <div id="alertC" class="col-12" ></div>
                            </div>
                          
                          
                          
                        </div><br/> 


                        <div className='modalNxtBtn'>
                            <button id="btnNext" type="button" onClick={(e) => {this.checkk(e)}} class="btn btn-primary" data-toggle="modal" data-target="#myModal">Next</button>
                        </div>



                        
                      </form>
                  </div>
                  <RegisterModal_comp mail={this.state.mail} HideParentForm={this.HideMe} sendData={this.setTodoProps} routingHistory={this.props.history} />









            </div>

        </div>


      </>
    );
  }


   checkk = (e) => 
  {
      var formy = document.getElementById("formy");
      var mm = document.getElementById("mail");
          if (formy.checkValidity() === false) {
              //console.log(e);
            e.preventDefault();
            e.stopPropagation();
            formy.classList.add('was-validated');
            
  
          }else
          {
            console.log("------hj-dd-----------------------------");
            console.log(this.props);
              this.setState({
                  mail: mm.value
              });
          } 
  }
  

  
 HideMe = () => 
{
    this.setState({
 
        IsVisible : false
    });
}

 ShowMe = () => 
{
    this.setState({
        IsVisible : true
    });
}
 setTodoProps = (m,u) => {
    console.log('-----------------------------');
    console.log('u:',u);
    this.setState({
        userName : u,
        mail : m
    });
    console.log(this.state);

    
}




  
}