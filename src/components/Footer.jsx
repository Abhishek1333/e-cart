import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-primary text-light'>
    <div className="footer d-flex align-items-center justify-content-evenly w-100">
      <div className="website" style={{width:'400px'}}>
        <h4 style={{overflow:'hidden'}}><i class="fa-solid fa-cart-shopping"></i>{' '}
          E-Cart</h4>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit optio quaerat odio voluptatem. Reprehenderit, necessitatibus</h6>
      </div>
      <div className="link d-flex flex-column ms-5">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>WishList</Link>
      </div>
      <div className="guides d-flex flex-column ms-5">
        <h4>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootsrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
      </div>
      <di v className="contact ms-5">
        <h4>contact Us</h4>
        <div className='d-flex'>
          <input type="text" className='form-control' placeholder='enter your email' />
          <button className='btn btn-warning text-white ms-3'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly mt-3'>
        <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x "></i></Link>
        <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
        <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
        <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
        </div>
      </di>
    </div>
    <p className='mt-5'>copyright@2023,built with react</p>
  </div>
  )
}

export default Footer