import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import {Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';



function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
  // function to find the sum
  const getTotal=()=>{
    if (cartArray.length>0) {
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    } 
    else{
      setTotal(0)
    }
  }
 useEffect(()=>{
  getTotal()
 },[cartArray])

 const handlecart=()=>{
  alert('Thank you,order placed succesfully')
  dispatch(emptyCart())
  navigate('/')
 }

  return (
    <div style={{marginTop:'100px'}} >
    <div className="row w-100 ">
      { cartArray?.length>0?
      <div className="col m-5 d-flex justify-content-center align-items-center">
        <table className='table shadow border'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartArray?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td> <img style={{width:'50px', height:'50px'}} src={item.image}></img> </td>
              <td>₹ {item.price}</td>
              <td> <Button onClick={()=>dispatch(removeFromCart(item.id))} varient="outline-danger"><i class="fa-solid fa-trash-can "></i></Button> </td>
            </tr>

            ))
          }
          </tbody>
        </table>
        <div className='col-lg-4 justify-content-center align-items-center flex-column ms-5'>
          <div className='border shadow p-5'>
            <h3 className='fw-bolder text-primary'>Order summary</h3>
            <h4>Total Products:<span className='fw-bolder text-warning'>{cartArray.length}</span></h4>
            <h4>Price :<span className=' fw-bolder text-warning'>{total}</span></h4>
            <button onClick={handlecart} className='btn btn-success rounded w-75 mt-3'>CheckOut</button>
            
          </div>
          
        </div>
      </div> : <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column' >
        <img src='https://imgs.search.brave.com/5BJ93jMnuTWIVtlvf-J14tiNkcuIl8LVHAWGvXSLdM4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2Fk/aW5nLmlvL3MvaWNv/bi81YWF4c24uc3Zn.svg' height={'300px'} alt='no image' />
        <h3 className='text-danger fw-bolder'>Your cart is empty</h3>
        <button className='btn btn-success mt-2'><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-arrow-left"></i></Link></button>
      </div> 
      }

    </div> 
    
  </div>
  )
  }

export default Cart;