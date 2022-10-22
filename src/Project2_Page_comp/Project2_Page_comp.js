
//------------------------------------
//-------------------------------------------------
import './Project2_Page_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";
import Skills_topPage_comp from '../Skills_topPage_comp/Skills_topPage_comp';
import Skills_comp from '../Skills_comp/Skills_comp';
import ProjectCard_comp from '../ProjectCard_comp/ProjectCard_comp';
import MoreProjects_comp from '../MoreProjects_comp/MoreProjects_comp';
import ProjectCarousel_comp from '../ProjectCarousel_comp/ProjectCarousel_comp';

import a from '../media/giphy.gif';
import b from '../media/Untitled.png';
import c from '../media/ny.jpg';

import jum from '../media/jum.png';
import por from '../media/por.png';
import ikea from '../media/ikea.png';

import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';

class Project2_Page_comp extends React.Component {
  state = {

  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }

  componentDidMount()
  {
    this.RecordHistory();
    
    if (!this.props.state.projectPageData.prjName) {
      
      //console.log(this.props.state);
      //alert('NOO project')
      this.props.history.push(`/project/${this.props.match.params.id}`)
   // window.location.reload();
      
    }

  }

  RecordHistory()
  {
    if (!this.props.state.history) {
     // alert('hi')
      
      this.props.setHistoryObj(this.props.history)
    }
    else{
     // alert('bye')
      console.log(this.props);
    }
      this.props.setMatchObj(this.props.match)
  }











  render() {
    return (
      <>
      <div class="container projectCont">
    <div class="row">
      <div class="col-md-7  leftSide "  id="leftSide" >
        <div class="titlee">
          <h1>{this.props.state.projectPageData.prjName}</h1>
          <span>{this.props.state.projectPageData.projTitle}</span>
        </div>
        <div class="row projDetails">
          <div class="col-md-6 projFeaturesSec">
            <h4 class="Features">Features2</h4>
            <ul class='ListPoints' >
              <li>Coffee jhr e gbdf jhbj hgdf fb fgdfgj jfgdf fgd dfdfg</li>
              <li>Tea</li>
                    <li>Milk</li>
                    
                  </ul>
                </div>
                <div class="col-md-6 projToolsSec">
                  <h4 class="Tools">Tools</h4>
                  <ul class='ListPoints'>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    
                  </ul>
                </div>
                
              </div>
            </div>
            <div class="col-md-5  rightSide" id="rightSide">

    <ProjectCarousel_comp prjName={this.props.state.projectPageData.prjName} projTitle={this.props.state.projectPageData.projTitle} imgs={this.props.state.projectPageData.imgs} ytVidID={this.props.state.projectPageData.ytVidID} DwnldLink={this.props.state.projectPageData.DwnldLink} />
            
            </div>
    </div>
    <h2>Discription</h2>
    <div>{this.props.state.projectPageData.Discr}</div>
    <br/><br/>
    <MoreProjects_comp />
  </div>

















      
      </>
    );
  }

  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(Project2_Page_comp);





// //------------------------------------
// //-------------------------------------------------
// import './Header_comp.css';
// //import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
// import ReactDOM from "react-dom";
// import React from "react";

// export default class Header_comp extends React.Component {
//   state = {

//   };
//   // constructor(props)
//   // {
   
//   //   super(props);
//   //   this.state={
//   //     complete : ""
//   //   };
//   // }


//   render() {
//     return (
//       <>

//       </>
//     );
//   }

  
// }