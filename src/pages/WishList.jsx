import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';


function WishList() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch=useDispatch()

  const handlewishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div style={{marginTop:'100px'}}>
      <Row>
     { wishlistArray?.length>0?
       wishlistArray?.map((item)=><Col>
       <Card style={{ width: '18rem',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)' }}>
         <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
         <Card.Body>
           <Card.Title>{item.title.slice(0,20)}...</Card.Title>
           <Card.Text>
           <p>{item.description.slice(0,50)} ...</p>
           <p className='fw-bolder'>Price: ₹{item.price} </p>
           </Card.Text>
           <div className='d-flex align-items-center justify-content-between'>
               <Button onClick={()=>dispatch(removeFromWishlist(item.id))}  variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
               <Button onClick={()=>handlewishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
           </div>
         </Card.Body>
       </Card>
       </Col>) 
       :<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
         <img style={{width:'600px'}} src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="" />
         <h3 className='text-align-center'>no items</h3>
         <button className='btn btn-success'><Link style={{textDecoration:'none',color:'white'}} to={'/'}>back to home</Link></button>
        </div>}
      </Row>
    </div>
  )
}

export default WishList