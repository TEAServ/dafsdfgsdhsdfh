
//------------------------------------
//-------------------------------------------------
import './ProductCard_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentCart } from '../store/actions';
import { setCurrentCartProducts } from '../store/actions';

class ProductCard_comp extends React.Component {
  state = {
    addedBooks : [""],
    title : ''


  };
//res.data.items[0].volumeInfo.title
//res.data.items[0].volumeInfo.imageLinks.thumbnail
//res.data.items[0].saleInfo.buyLink
  componentDidMount()
  {
    console.log(this.props.title.length);



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
    if (this.props.title.length >= 60) {

      this.state.title = this.props.title.slice(0, 60)+'...';
    }else{
      this.state.title = this.props.title;
    }
    //console.log(this.props);
    return (
      <>

<div class="portfolioComp-p">
        
        <div class='container-fluid cnt-p'>
        <div class="imgCont-p" >
            <img class="mx-auto d-block  thum-p" src={this.props.imgSrc} alt="" />
        </div>
        <br />
        <div class="row bookDetails-p">
            <div class="col-9 bookName-p">{this.state.title}</div>
            <div class="col-3 bookBuy-p"><button onClick={this.AddProductToCart} type="button" class="btn btn-success"><i class="fas fa-cart-plus"></i></button></div>
        </div>
        <div class="row bookDetails-pp">
            <div class="col-6 category-p"><span>{this.props.category}</span> </div>
            <div class="col-6 price-p">{this.props.price} L.E.</div>
        </div>

        <br />
    </div>
    </div>
 
      </>
    );
  }

  AddProductToCart = () =>
  {//debugger
    var isAdded = false;
    var pushed = false;
    for (let i = 0; i < this.props.state.addedProducts.length; i++) {

      if (this.props.title == this.props.state.addedProducts[i]) {
        isAdded = true;
        break;
      }

}
if (!isAdded) {


  this.props.setCurrentCart((parseInt(this.props.state.count) + 1).toString())

  var prods = [...this.props.state.addedProducts,this.props.title];
  this.props.setCurrentCartProducts(prods)
} else {
  console.log('added');
  
  
}
  }

  
  
  
 
  
  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setCurrentCart, setCurrentCartProducts})(ProductCard_comp);

