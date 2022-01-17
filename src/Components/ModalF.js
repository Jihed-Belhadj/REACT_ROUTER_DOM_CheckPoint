import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ReactStars from "react-rating-stars-component";


function ModalF({Tab,setTab}) {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [Rating, setRating] = useState(0)

  const addMovie = ()=>{ 
    const updateMovies=[...Tab,{id:Tab.length,title:title,posterUrl:url,description:description,rate:Rating}]
    setTab(updateMovies)
  }

 

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>Add movie</Button>
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

<Form.Group className="mb-3" controlId="formBasicTitle">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicDesc">
  <Form.Label>Description</Form.Label>
  <Form.Control type="text" placeholder="Description"  onChange={e=>setDescription(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPost">
  <Form.Label>Poster</Form.Label>
  <Form.Control type="text" placeholder="URL poster" onChange={e=>setUrl(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicRat">
  <Form.Label>Rating</Form.Label>
  <ReactStars isHalf={true} size={35} onChange={(newRating)=>setRating(newRating)}/>
</Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie();  handleClose() }}>Add</Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalF
