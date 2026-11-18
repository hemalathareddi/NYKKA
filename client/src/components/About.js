import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLocation } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";


function About() {

  let loc = useLocation();

  return (
   
    <div id='aboutimgs'>
      

    <Carousel data-bs-theme="dark">

      
    <Carousel.Item>
        <img className="d-block w-100" src="https://pbs.twimg.com/media/D5ySBVjV4AUhL9S?format=jpg&name=4096x4096"/>
        <Carousel.Caption id='caption'>
        <Link to="/"id='shopLink' >Shop Now <FaShopify /></Link>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img className="d-block w-100" src="https://nexuscluster.blob.core.windows.net/server01/hrx/HRX/kabir.png"/>
        <Carousel.Caption id='caption'>
          <h1><b>Hrithik Roshan</b>.</h1>
          <h3>THOSE WHO NEVER SETTLE FOR ANYTHING LESS</h3>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <video className="d-block w-100" src='https://nexuscluster.blob.core.windows.net/server01/hrx/home/topvideo-vE5EuNdnxgL0Ck7fK5IGu-1655477435' controls ="" muted autoPlay loop ></video>
        <Carousel.Caption id='caption' >
          <h1><b>HRX</b></h1>
          <h3>FIND YOUR EDGE</h3>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel> 

<br></br>

<div id='clothing'>   
<img width="20%" src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>

<h6>RE-DEFINE YOUR FITNESS EXPERIENCE.</h6>
<h1><b>COLLECTION </b> <ImManWoman  style={{marginTop:'-1%'}}/></h1>
<h1>{loc.state.data.firstName}</h1>
</div> 
  
<div className='maincard'> 
<Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/c9/8b/7b/c98b7b03bb582e4473914298ee017965.jpg" />
    <Card.Body>
      <Card.Title>Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/8f/25/74/8f2574f181daf1163393bf7917e36922.jpg" />
    <Card.Body>
      <Card.Title>Family dress</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/736x/04/2f/1a/042f1a36f34244a5761c78d20cf52279.jpg" />
    <Card.Body>
      <Card.Title>Tshirt & Tops</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/a1/19/40/a1194089cfde32981d2d5f623d2cb328.jpg" />
    <Card.Body>
      <Card.Title>Shirts & Shorts</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/736x/b5/3f/df/b53fdfef625638fcbff3e4ed98f4fbe0.jpg" />
    <Card.Body>
      <Card.Title>Jackets & Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/a6/b0/c1/a6b0c1122db0ec1c5bebeccde184ba6e.jpg" />
    <Card.Body>
      <Card.Title>Tops</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/b3/32/8b/b3328bde4c6a3f491d8d3cc02ec5a0a1.jpg" />
    <Card.Body>
      <Card.Title>Formals</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/f0/c7/bb/f0c7bbc03576ec75e36b2f383a488995.jpg" />
    <Card.Body>
      <Card.Title>Jackets</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/ce/21/94/ce2194f28f6e0de709469b5f686dcdcf.jpg" />
    <Card.Body>
      <Card.Title>Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/79/cf/05/79cf05d42632fc88a8dad08ed7ed8a9b.jpg" />
    <Card.Body>
      <Card.Title>Wedding </Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  </div>

    </div>
  )
}

export default About