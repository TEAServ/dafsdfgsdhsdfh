
//------------------------------------
//-------------------------------------------------
import './About_comp.css';



//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';
import IMG1 from '../media/11.png';
import IMG2 from '../media/22.png';
import IMG3 from '../media/33.png';


 class About_comp extends React.Component {
  state = {


  };

  componentDidMount()
  {




  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }

   AnimateImage(e)
  {
    var ele = document.getElementById('ss');
    var img = document.getElementById('iimg1');
    var imgUP = document.getElementById('iimg3');
    var parentLength = 450;
    var movingMarginPercent = 5;




    const target = e.target;
            
    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();
            
    // Mouse position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    var X =  (x*10)/parentLength;
    var Y =  (y*10)/parentLength;
    var LEFT = -X+5;
    var TOP = -Y+5;
    img.style.top = `${TOP/8}%`;
    img.style.left = `${LEFT/8}%`;
    imgUP.style.top = `${(TOP)/2}%`;
    imgUP.style.left = `${(LEFT)/2}%`;





  }
  


  render() {



//     var ele = document.getElementById('ss');
//     var img = document.getElementById('iimg1');
//     var imgUP = document.getElementById('iimg3');
//     var parentLength = 450;
//     var movingMarginPercent = 5;
//     //mousemove
//     ele.addEventListener('mousemove', function(e) {
//     // Get the target
//     const target = e.target;
            
//     // Get the bounding rectangle of target
//     const rect = target.getBoundingClientRect();
            
//     // Mouse position
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     var X =  (x*10)/parentLength;
//     var Y =  (y*10)/parentLength;
//     var LEFT = -X+5;
//     var TOP = -Y+5;
//     img.style.top = `${TOP}%`;
//     img.style.left = `${LEFT}%`;
//     imgUP.style.top = `${(TOP+5)/3}%`;
//     imgUP.style.left = `${(LEFT+5)/3}%`;

//     console.log(TOP);
//     console.log(LEFT);
// });






    return (
      <>
       <div class="container-fluid" id='aboutSection'>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-6 aboutCont">
                    <div class="aboutLeftSide">

                        <div class="aboutMe">
                            
                            <span class="about" id='aboutSectionn'>About</span><br/>
                            <div className={'mee'}>

                            <span class="me">Me</span>
                            </div>
    
                        </div><br/>
                    </div>
                    <div className={'aboutDetailss'}>
                    <span class="aboutDetails">
                    A Mechanical based BIM Engineer interested in developing and implementing BIM software, 
specialized in BIM Automation and BIM application development using desktop development and full 
stack web development technologies...
                    </span>

                    </div>
                        <br/>
                        <div class="seeMoreBtnContt">
                <div class="seeMoreBtnCont">
                            <button type="button" class="btn btn-dark seeMoreBtn" >Details</button>
                        </div>
                </div>
                </div>
                <div class="col-md-5 viewerCont">


                <div id="ss" onMouseMove={(e)=>{this.AnimateImage(e)}}  class="Ccont">
                    <img class="iimg2" src={IMG2} alt="" />
                    <img id="iimg1" class="iimg1" src={IMG1} alt="" />
                    <img id="iimg3" class="iimg3" src={IMG3} alt="" />
                </div>


                </div>
                <div class="col-md-1 btnGhost">
                <div class="seeMoreBtnCont">
                            <button type="button" class="btn btn-dark seeMoreBtn" >Details</button>
                        </div>
                </div>

            </div>

        </div>
        <br/><br/><br/><br/><br/>
      
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(About_comp);





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