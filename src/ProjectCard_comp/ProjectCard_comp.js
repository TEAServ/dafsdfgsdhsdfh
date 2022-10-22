
//------------------------------------
//-------------------------------------------------
import './ProjectCard_comp.css';

//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';

import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



 class ProjectCard_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidMount()
  {

    // this.setState({
    //   BtnsArr : [ <SkillsBtn_comp key={0} title={"HTML5"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100HTML.png'}    MainImgUrl={'media/400x500HTML.png'} selected={this.state.selected} classTheme={"skillBtnCont"}           fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Form',"Video/Audio","Canvas"]} chartVals={[95,80,40]}  />,
    //   <SkillsBtn_comp key={1} title={"CSS3"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100CSS.png'}               MainImgUrl={'media/400x500CSS.png'} selected={this.state.selected} classTheme={"skillBtnCont"}               fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Styling','Shadows','Animation','Transform']} chartVals={[95,70,80,75]}  />,
    //   <SkillsBtn_comp key={2} title={"JavaScript"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100JS.png'}         MainImgUrl={'media/400x500JS.png'} selected={this.state.selected}  classTheme={"skillBtnCont"}                fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={[]} chartVals={[]}  />,
    //   <SkillsBtn_comp key={3} title={"React.js"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100React3.png'}           MainImgUrl={'media/400x500React.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}        fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={[]} chartVals={[]}  />,
    //   <SkillsBtn_comp key={4} title={"Bootstrap"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100BS.png'}          MainImgUrl={'media/400x500BS.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}               fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={[]} chartVals={[]}  />,
    //   <SkillsBtn_comp key={5} title={"WebGL"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100WebGL.png'}              MainImgUrl={'media/400x500WebGL.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}         fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={[]} chartVals={[]}  />,
    //   <SkillsBtn_comp key={6} title={"Node.js"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Node.png'}            MainImgUrl={'media/400x500Node.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}           fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={[]} chartVals={[]}  />,
    //   <SkillsBtn_comp key={7} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={[]} chartVals={[]}  />]
    // });


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

                    <div class="portCardd">
                        <img class="img-fluid portCardImgg" src={this.props.pImg} alt="Chania"/>
                        <div class="cardContentt">
                            <span class="portProjNamee">{this.props.title}</span>
                            <button type="button" class="btn btn-outline-warning portProjBtnn" disabled>Explore</button>
                        </div>
                    </div>

                   

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(ProjectCard_comp);





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