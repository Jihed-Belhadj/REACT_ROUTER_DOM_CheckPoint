import React from 'react'
import {InputGroup,FormControl, Navbar, Container, Nav,NavDropdown,Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import StarRating from './StarRating';



function NavB({MovieSch,setMovieSch,Rating,setRating,Hide,setHide}) {

  const toggleM=()=>setHide(Hide=true)
  const toggleH=()=>setHide(Hide=false)
  console.log(Hide)

    return (
        <div>
            {/* <InputGroup style={{width:'200%'}} >
                <FormControl placeholder="Enter the title" aria-label="Task" aria-describedby="basic-addon2" onChange={e=>setMovieSch(e.target.value)} value={MovieSch}  />
            </InputGroup>   */}

            {Hide ? <>
              <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Movies App</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to='/home' onClick={toggleH} >Home</Nav.Link>
                  <Nav.Link as={Link} to='/movies' onClick={toggleM}>Movies</Nav.Link>
                </Nav>
                <Form className="d-flex" style={{display:'flex'}}>
                <FormControl placeholder="Enter the title" aria-label="Task" aria-describedby="basic-addon2" onChange={e=>setMovieSch(e.target.value)} value={MovieSch}  />
                <StarRating Rating={Rating} setRating={setRating}></StarRating> 
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            </>
             :
<>
<Navbar bg="light" expand="lg">
<Container fluid>
  <Navbar.Brand href="#">Movies App</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link as={Link} to='/home' onClick={toggleH}>Home</Nav.Link>
      <Nav.Link as={Link} to='/movies' onClick={toggleM}>Movies</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</>



          
          }

        </div>
    )
}

export default NavB
