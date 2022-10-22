
//------------------------------------
//-------------------------------------------------
import './BookCard_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentCart } from '../store/actions';
//import { setCurrentCartBooks } from '../store/actions';

class BookCard_comp extends React.Component {
  state = {
    addedBooks : [""]

  };
//res.data.items[0].volumeInfo.title
//res.data.items[0].volumeInfo.imageLinks.thumbnail
//res.data.items[0].saleInfo.buyLink
  componentDidMount()
  {


  }
  componentWillUnmount()
  {

  }
  constructor(props)
  {
   
    super(props);
    // this.state={
    //   complete : ""
    // };
  }


  render() {
    console.log(this.props.buyLink);
    return (
      <>
 <div class="portfolioComp">
                
                <div class='container-fluid cnt'>
                <div class="imgCont" >
                    <img class="mx-auto d-block  thum" src={this.props.imgSrc} alt="" />
                </div>
                <br/>
                <div class="row bookDetails">
                    <div class="col-9 bookName">{this.props.title}</div>
                    <div class="col-3 bookBuy"><a target="blank" href={this.props.buyLink}><button  type="button" class="btn btn-success"><i class="fas fa-download"></i></button></a></div>
                </div>
            </div>
            </div>

      </>
    );
  }

  AddBookToCart = () =>
  {//debugger
    var isAdded = false;
    var pushed = false;
    for (let i = 0; i < this.props.state.addedBooks.length; i++) {

      if (this.props.title == this.props.state.addedBooks[i]) {
        isAdded = true;
      }

}
if (!isAdded) {
 // this.state.addedBooks.push(this.props.title)
  // this.setState({z:this.props.title})
  // console.log('--------------------------');
  // console.log(this.state.addedBooks);
  // console.log('--------------------------');
  // console.log(this.props.title);

  this.props.setCurrentCart((parseInt(this.props.state.count) + 1).toString())

  var books = [...this.props.state.addedBooks,this.props.title];
 // this.props.setCurrentCartBooks(books)
} else {
  console.log(this.props.state.addedBooks);
  
  
}
  }

  
  
  
  
  
  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setCurrentCart})(BookCard_comp);

