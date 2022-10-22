
//------------------------------------
//-------------------------------------------------
import './Books_comp.css';
import BookCard_comp from '../BookCard_comp/BookCard_comp';
import ReactDOM from "react-dom";
import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentBooksPage } from '../store/actions';

class Books_comp extends React.Component {
  state = {

    booksList : ['']

  };
//res.data.items[0].volumeInfo.title
//res.data.items[0].volumeInfo.imageLinks.thumbnail
//res.data.items[0].saleInfo.buyLink
  componentDidMount()
  {
    
    // axios.get('https://www.googleapis.com/books/v1/volumes?q=keyword')
    // .then((res)=>{console.log(res.data.items[0].volumeInfo.title,res.data.items[0].volumeInfo.imageLinks.thumbnail,res.data.items[0].volumeInfo.canonicalVolumeLink);})
    // .catch()

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


<div class="conttt">

        <h1 class="portfolioHeader">Get Books {this.props.state.count == '0'? (''):( `(${this.props.state.count} added)`)}</h1>

        <div class="container">


            <form  class="was-validated">
              <div class="form-group">
                
                <input type="text" class="form-control" id="srch" placeholder="Enter BOOK name" name="srch" required />
                
                
              </div>
          
          
          
            </form>
            <div class="bbbtttnnn">

                <button type="button" onClick={this.searchBooks} class="btn btn-warning">Search</button>

            </div>
            
            <br/>
          </div>
          <br/>

        <div class="flxCont">
{this.props.state.booksPage}
          {/* {this.state.booksList} */}

            {/* <BookCard_comp />
            <BookCard_comp />
            <BookCard_comp />
            <BookCard_comp />
            <BookCard_comp /> */}
            

            
        </div>
    </div>



      </>
    );
  }

  searchBooks = () =>  
  {
    
    //console.log(this.props);
    this.props.state.booksPage = [];
    this.setState({
      booksList : []
    })
    var srch = document.getElementById('srch').value;

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${srch}`)
    .then((res)=>{

for (let i = 0; i < res.data.items.length; i++) {
  this.props.state.booksPage.push(<BookCard_comp title={res.data.items[i].volumeInfo.title} imgSrc={res.data.items[i].volumeInfo.imageLinks.thumbnail} buyLink={res.data.items[i].volumeInfo.canonicalVolumeLink} />)
  this.state.booksList.push(<BookCard_comp title={res.data.items[i].volumeInfo.title} imgSrc={res.data.items[i].volumeInfo.imageLinks.thumbnail} buyLink={res.data.items[i].volumeInfo.canonicalVolumeLink} />)
  this.setState({z:i})
}
this.props.state.setCurrentBooksPage(this.props.state.booksPage)

    })
    .catch((e)=>{console.log(e);})
  }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setCurrentBooksPage})(Books_comp);