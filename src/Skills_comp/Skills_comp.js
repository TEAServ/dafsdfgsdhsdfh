
//------------------------------------
//-------------------------------------------------
import './Skills_comp.css';

import _400x500Skill from '../media/400x500Skill.png';


//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import SkillsBtn_comp from '../SkillsBtn_comp/SkillsBtn_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



 class Skills_comp extends React.Component {
  state = {
    skillImgMain : _400x500Skill,
    title: 'My Skills',
    details: 'Select a skill to see details',
    DetailsBtn : true

  };

  componentDidMount()
  {

    this.setState({
      BtnsArr : [ <SkillsBtn_comp key={0} title={"HTML5"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100HTML.png'}    MainImgUrl={'media/400x500HTML.png'} selected={this.state.selected} classTheme={"skillBtnCont"}           fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Form',"Video/Audio","Canvas"]} chartVals={[95,80,40]}  />,
      <SkillsBtn_comp key={1} title={"CSS3"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100CSS.png'}               MainImgUrl={'media/400x500CSS.png'} selected={this.state.selected} classTheme={"skillBtnCont"}               fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Styling','Shadows','Animation','Transform']} chartVals={[95,70,80,75]}  />,
      <SkillsBtn_comp key={2} title={"JavaScript"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100JS.png'}         MainImgUrl={'media/400x500JS.png'} selected={this.state.selected}  classTheme={"skillBtnCont"}                fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['native JS','ES6','TS']} chartVals={[95,90,60]}  />,
      <SkillsBtn_comp key={3} title={"React.js"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100React3.png'}           MainImgUrl={'media/400x500React.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}        fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['redux','axios','class comp.','func. comp.']} chartVals={[95,85,90,80]}  />,
      <SkillsBtn_comp key={4} title={"Bootstrap"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100BS.png'}          MainImgUrl={'media/400x500BS.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}               fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Grid','Flex','Forms','Modal','Navs','Utilities']} chartVals={[95,90,85,80,75,70]}  />,
      <SkillsBtn_comp key={5} title={"WebGL"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100WebGL.png'}              MainImgUrl={'media/400x500WebGL.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}         fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Unity Engine','C#','3D Modeling','3d Shaders']} chartVals={[85,80,60,65]}  />,
      <SkillsBtn_comp key={6} title={"Node.js"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Node.png'}            MainImgUrl={'media/400x500Node.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}           fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={['Express','Mongoose','authentication','REST APIs','MVC patern']} chartVals={[95,90,80,85,75]}  />,
      <SkillsBtn_comp key={7} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,
    
      //revit api
      <SkillsBtn_comp key={8} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //C#
      <SkillsBtn_comp key={9} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //Python
      <SkillsBtn_comp key={10} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //Unity
      <SkillsBtn_comp key={11} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //AR
      <SkillsBtn_comp key={12} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //Dynamo
      <SkillsBtn_comp key={13} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //Navis
      <SkillsBtn_comp key={14} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

      //CAD
      <SkillsBtn_comp key={15} title={"MongoDB"} details={'asdj a ada fwegf wfsgf  se fwuf sydfsgfagf sdfs hfhr 5rt jht jtys'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"idkd  shs rwjhf wergh hweuyfe geg weutg herugf wehsudjy hfbn 4thtjiuriuh qerj herqwef jthdhugdsy kjfgeg rp' nmhdaycgvadsygeq rhg"} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,

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
  BtnClickHandeler = (title,details,key,IMG) => 
  {
    this.setState({
      title : title,
      details : details,
      skillImgMain:IMG,
      DetailsBtn : false
      

    })
    this.props.setSelectedBtn(title)

  }
  ShowDetails = () =>
  {
    //alert(this.props.state.selected)
    this.props.setSkillPageData({
      details:this.props.state.selectedData.details,
      portrait:this.props.state.selectedData.portrait,
      chartParams:this.props.state.selectedData.chartParams,
      chartVals:this.props.state.selectedData.chartVals,
      title:this.props.state.selectedData.title
    })
    

    this.props.state.history.push('/skill')

    
    try {
      if (window.innerWidth < 800) {
        var ele = document.getElementById('ghost');
        ele.scrollIntoView({behavior: 'smooth'})
        
      } else {
        
        var ele = document.getElementById('myChart');
        ele.scrollIntoView({behavior: 'smooth', block: "end"})
      }
      
      
    } catch (error) {
       document.body.scrollTop = 60;
       document.documentElement.scrollTop = 60;
      
    }
  }


  render() {


    return (
      <>
      <div>
        <div class="skillSectionHeader">
            <span class="headerTitle" >My Skills</span>
            <br />
            <span class="headerDes">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolor quibusdam aspernatur. Rem libero qui eligendi totam esse, consequuntur culpa cumque ducimus nihil minus at illo deleniti quod in amet?</span>
        </div>
        
        <div  class="container">
            <div id="HomeSkills" class="row skillContainer">
                
                <div  class="col-sm-5 skillDetails">
                {this.props.state.selectedData.portrait?(
                  <>
                  <img class="skillImgMain img-fluid" src={this.props.state.selectedData.portrait} alt="" />
                  <div class="skillDetailsMain" >
                        <span class="skillTitle">{this.props.state.selectedData.title}</span>
                        <div class="sepSkill"></div>
                        <div class="skillTitleDes">
                            <span class="skillDes">{this.props.state.selectedData.prife}</span>

                        </div>
                        

                    </div>
                 
                  </>
                ):(
                  <>
                  <img class="skillImgMain img-fluid" src={this.state.skillImgMain} alt="" />
                    <div class="skillDetailsMain" >
                        <span class="skillTitle">{this.state.title}</span>
                        <div class="sepSkill"></div>
                        <div class="skillTitleDes">
                            <span class="skillDes">{this.state.details}</span>

                        </div>
                        

                    </div>
                    </>
                  
                )}
                    
                    
                    
                    

    
                </div>
                <div class="col-sm-7 skillBtns">
                    <div class="btnsContainer">
                      
                      {this.state.BtnsArr}

                    </div>
                    <br />
                    <button type="button" class="btn btn-outline-dark detailsBtn" onClick={this.ShowDetails} disabled={!this.props.state.selectedData.portrait}>Show details</button>
    
                </div>
            </div>
            <br /><br /><br />

        </div>
    </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(Skills_comp);





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