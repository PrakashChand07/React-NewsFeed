import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import  Pagination  from '../Pagination/Pagination';

const Navbar = () => {
  return (
    <>
      <div id="header">
    <ul>
      <li className="f"><Link to="#">Home</Link></li>
      <li><Link to="about.html">About Us</Link></li>
      <li><Link to="page.html">Demo Page</Link></li>
      <li><Link to="contact.html">Contact Page</Link></li>
    </ul>
    <p className="links">Subscribe: <Link to="#">Posts</Link> | <Link to="#">Comments</Link> | <Link to="#">Email</Link> </p>
    <div className="break"></div>
    <div className="logo">
      <h1><Link to="#">The Web News</Link></h1>
    </div>
    <div className="ad468x60"> <Link to="#"><img src="images/ad468x60.gif" alt="" /></Link> </div>
    <div className="break"></div>
  </div>
<div>
  <div id="content">
    <div className="single">
    <Pagination/>
    </div>
  </div>
  <div id="sidebar">
    <div className="ads"> <Link to="#"><img src="images/ad125x125.jpg" alt="" /></Link> <Link to="#"><img src="images/ad125x125.jpg" alt="" /></Link> <Link to="#"><img src="images/ad125x125.jpg" alt="" /></Link> <Link to="#"><img src="images/ad125x125.jpg" alt="" /></Link> </div>
   
    <div className="wrapper">
      <h2>Popular Posts</h2>
      <ul>
        <li><Link to="#">Make Money Online Creating Websites</Link></li>
        <li><Link to="#">Top 100 Internet Marketing Tips</Link></li>
        <li><Link to="#">Tutorial: How to add Videos in your Post</Link></li>
        <li><Link to="#">Sample Post Unordered List</Link></li>
        <li><Link to="#">Sample Post Blockquote</Link></li>
      </ul>
      <h2>Flickr Photos</h2>
      <div className="flickr"> <Link to="#"><img src="images/_thumb3.jpg" alt="" /></Link> <Link to="#"><img src="images/_thumb4.jpg" alt="" /></Link> <Link to="#"><img src="images/_thumb5.jpg" alt="" /></Link> <Link to="#"><img src="images/_thumb6.jpg" alt="" /></Link> <Link to="#"><img src="images/_thumb7.jpg" alt="" /></Link> <Link to="#"><img src="images/_thumb8.jpg" alt="" /></Link> </div>
      
      <h2>Featured Video</h2>
      <div className="video"> <img src="images/_video.jpg" alt="" /> </div>
 

      <h2>Tags</h2>
      <div className="tags"> </div>
   
    
      <div className="l sbar">
        <h2>Categories</h2>
        <ul>
          <li><Link to="#">Entertainment</Link></li>
          <li><Link to="#">Fashion</Link></li>
          <li><Link to="#">Internet</Link></li>
          <li><Link to="#">Marketing</Link></li>
          <li><Link to="#">Lifestyle</Link></li>
          <li><Link to="#">Make Money</Link></li>
          <li><Link to="#">Entertainment</Link></li>
          <li><Link to="#">Fashion</Link></li>
          <li><Link to="#">Internet</Link></li>
          <li><Link to="#">Marketing</Link></li>
          <li><Link to="#">Lifestyle</Link></li>
          <li><Link to="#">Make Money</Link></li>
        </ul>
        <h2>Pages</h2>
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Archives</Link></li>
          <li><Link to="#">Links</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="#">Sitemap</Link></li>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Archives</Link></li>
          <li><Link to="#">Links</Link></li>
          <li><Link to="#">Sitemap</Link></li>
        </ul>
      </div>
        
      <div className="r sbar">
        <h2>Archives</h2>
        <ul>
          <li><Link to="#">August 2008</Link></li>
          <li><Link to="#">July 2008</Link></li>
          <li><Link to="#">June 2008</Link></li>
          <li><Link to="#">May 2008</Link></li>
          <li><Link to="#">April 2008</Link></li>
          <li><Link to="#">March 2008</Link></li>
          <li><Link to="#">August 2023</Link></li>
          <li><Link to="#">July 2023</Link></li>
          <li><Link to="#">June 2023</Link></li>
          <li><Link to="#">May 2023</Link></li>
          <li><Link to="#">April 2023</Link></li>
          <li><Link to="#">March 2023</Link></li>
        </ul>
        <h2>Blogroll</h2>
        <ul>
          <li><Link to="#">Carlos</Link></li>
          <li><Link to="#">Digital Point Forum</Link></li>
          <li><Link to="#">Eric's Photo Gallery</Link></li>
          <li><Link to="#">Fashion Trends</Link></li>
          <li><Link to="#">Google </Link></li>
          <li><Link to="#">Carlos</Link></li>
          <li><Link to="#">Digital Point </Link></li>
          <li><Link to="#">Eric's Photo </Link></li>
          <li><Link to="#">Fashion Trends</Link></li>
          <li><Link to="#">Google </Link></li>
        </ul>
      </div>
    </div>
  </div>
  <div id="footer">
    <p>Copyright &copy; 2009 - <Link to="#">THE WED NEWS</Link> &middot; All Rights Reserved</p>
    <p>Managed by: <Link to="#">Prakash Wed Developer</Link> | Get More <Link to="#">WORLD CLASS NEWS</Link></p>
  </div>
</div>
    </>
  )
}

export default Navbar;