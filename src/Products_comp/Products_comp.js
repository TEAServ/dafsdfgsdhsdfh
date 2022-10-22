
//------------------------------------
//-------------------------------------------------
import './Products_comp.css';
import ProductCard_comp from '../ProductCard_comp/ProductCard_comp';
import ReactDOM from "react-dom";
import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentProducsPage } from '../store/actions';

class Products_comp extends React.Component {
  state = {
    products:[],

    title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptopsss',
    imgSrc:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    category:'men clothings',
    price:'109.99'

    

  };
//res.data.items[0].volumeInfo.title
//res.data.items[0].volumeInfo.imageLinks.thumbnail
//res.data.items[0].saleInfo.buyLink
  componentDidMount()
  {
    if (this.props.state.productsPage.length == 0) {
      
    console.log("API");
    var pArr = [];
    var title = '';
    var imgSrc = '';
    var category = '';
    var price = ''; 
    
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        title = res.data[i].title;
        imgSrc = res.data[i].image;
        category = res.data[i].category;
        price = res.data[i].price;

        pArr.push({
          title,
          imgSrc,
          category,
          price
        });
        this.props.setCurrentProducsPage(pArr);
        this.state.products.push(<ProductCard_comp title={title} imgSrc={imgSrc} category={category} price={price} />)


        
      }

    })
    .catch(console.log())
  
 
  }
else{
  for (let i = 0; i < this.props.state.productsPage.length; i++) {
  this.state.products.push(<ProductCard_comp title={this.props.state.productsPage[i].title} imgSrc={this.props.state.productsPage[i].imgSrc} category={this.props.state.productsPage[i].category} price={this.props.state.productsPage[i].price} />)
    this.setState({z:i})
  
}
}




  }
  componentWillUnmount()
  {

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
 <div class="cont-p">

        

<div class="flxCont-p">

{this.state.products}


    
   







   

    
</div>
</div>


      </>
    );
  }



  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setCurrentProducsPage})(Products_comp);



