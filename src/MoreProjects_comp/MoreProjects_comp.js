
//------------------------------------
//-------------------------------------------------
import './MoreProjects_comp.css';

import pbg from '../media/pbg.jpeg';
import jum from '../media/jum.png';
import por from '../media/por.png';
import ikea from '../media/ikea.png';

//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import PortfolioCard_comp from '../PortfolioCard_comp/PortfolioCard_comp';
import ProjectCard_comp from '../ProjectCard_comp/ProjectCard_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



class MoreProjects_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidMount()
  {

    // this.setState({
    //   CardsArr : [ 
    //     <PortfolioCard_comp title={'Portfolio website'} pImg={por}/>,
    //     <PortfolioCard_comp title={'Jumia clone'} pImg={jum}/>,
    //     <PortfolioCard_comp title={'IKEA'} pImg={ikea}/>
    //   ]
    // });


  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }

  slide(direction)
  {
    var testimonial_group = document.getElementById('testimonial-group');
    this.sideScroll(testimonial_group,direction,1,300,5);
  }
  sideScroll(element,direction,speed,distance,step)
  {
   var scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
  }




  render() {


    return (
      <>
    <h2>Explore More</h2>
    <div class='showAll' ><a href="">Show All</a></div>
    <div class="row SliderContainer">

      <div class="col-1 leftArrow"><i onClick={(e) => {this.slide('left')}} class="fas fa-caret-left Arroww"></i></div>
      <div class="col-10 Slider">
        <div class="container testimonial-group">
        <div class="row text-center testimonial-group"  id="testimonial-group" >
          
        <ProjectCard_comp class="col-4" title={'Jumia clone'} pImg={jum}/>
        <ProjectCard_comp class="col-4" title={'Portfolio website'} pImg={por}/>
        <ProjectCard_comp class="col-4" title={'IKEA'} pImg={ikea}/>
        <ProjectCard_comp class="col-4" title={'Jumia clone fsdf fdgddh'} pImg={jum}/>

        </div>
  
      </div>
    </div>
    <div class="col-1 rightArrow"><i  onClick={(e) => {this.slide('right')}}  class="fas fa-caret-right Arroww"></i></div>
    </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(MoreProjects_comp);





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