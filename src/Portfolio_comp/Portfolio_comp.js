
//------------------------------------
//-------------------------------------------------
import './Portfolio_comp.css';

import pbg from '../media/pbg.jpeg';
import jum from '../media/jum.png';
import por from '../media/por.png';
import ikea from '../media/ikea.png';

import a from '../media/giphy.gif';
import b from '../media/Untitled.png';
import c from '../media/ny.jpg';
//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import PortfolioCard_comp from '../PortfolioCard_comp/PortfolioCard_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



 class Portfolio_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidMount()
  {

    this.setState({
      CardsArr : [ 
        <PortfolioCard_comp title={'Portfolio website'} pImg={por} ProjectPageOpj={{prjName:'Portfolio website',projTitle:'sdfgsd fjghddh dsfsdifew weyfh sdf.',imgs:[por,a,b,c],ytVidID:"Srykscp6LWk",DwnldLink:"",Discr:'HI Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi non odit ratione at aperiam magnam voluptatum id modi veritatis ipsam recusandae ad ut, explicabo perspiciatis a ullam vero sapiente.'}}/>,
        <PortfolioCard_comp title={'Jumia clone'} pImg={jum} ProjectPageOpj={{prjName:'Jumia clone',projTitle:'ooer i gd dfgh ad gfydo',imgs:[jum,a,c],ytVidID:"LuqCTUeF-Fg",DwnldLink:"https://mega.nz/file/HvQiiRLC#FDYDSCDupGzZYWdDjbGO9CYme__SSN-zNZ_XfwJL4R0",Discr:'HI Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi non odit ratione at aperiam magnam voluptatum id modi veritatis ipsam recusandae ad ut, explicabo perspiciatis a ullam vero sapiente.'}}/>,
        <PortfolioCard_comp title={'IKEA'} pImg={ikea} ProjectPageOpj={{prjName:'IKEA',projTitle:'iorotioeo sfdsp; pdfoer',imgs:[ikea,b],ytVidID:"hnVvP3bFSMM",DwnldLink:"",Discr:'HI Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi non odit ratione at aperiam magnam voluptatum id modi veritatis ipsam recusandae ad ut, explicabo perspiciatis a ullam vero sapiente.'}}/>
      ]
    });


  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }




  render() {


    return (
      <>
<div class="container-fluid portCont" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.5)) , url(${pbg})` }}>
            <div class="row portfolioMainRow" id="portfolioSection">

                <div class="col-lg-7 portLeft" id="portfolioSection2">
                    <span class="portTitle">Portfolio</span><br/>
                    <span class="portTitlee">check my projects</span><br/>
                    <div class="portBtnCont">
                        <button type="button" class="btn btn-outline-light btn-lg" >Explore All</button>
                    </div>
                </div>
                <div class="col-lg-5 portRight">
                    {/* <!-- /////////////////////////////////////// --> */}
                    {this.state.CardsArr}
                    {/* <!-- /////////////////////////////////////// --> */}
                    {/* portBtn */}
                    <div class="portBtnContt">
                        <button type="button" class="btn btn-outline-light btn-lg  portBtn" >Explore All</button>
                    </div>
                </div>

            </div>

        </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(Portfolio_comp);





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