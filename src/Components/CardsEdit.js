import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ReactStars from "react-rating-stars-component";


function CardsEdit({Tab,setTab, el}) {

  const Edit=(id,NewMovie)=>{
    setTab(Tab.map(el=>el.id==id ? {...el,...NewMovie}:el))
  }

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [title, setTitle] = useState(el.title)
  const [description, setDescription] = useState(el.description)
  const [url, setUrl] = useState(el.posterUrl)
  const [Rating, setRating] = useState(el.rate)


  return (
    <div>
      <Button variant="primary" onClick={handleShow}>Edit movie</Button>
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

<Form.Group className="mb-3" controlId="formBasicTitle">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} value={title} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicDesc">
  <Form.Label>Description</Form.Label>
  <Form.Control type="text" placeholder="Description"  onChange={e=>setDescription(e.target.value) } value={description}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPost">
  <Form.Label>Poster</Form.Label>
  <Form.Control type="text" placeholder="URL poster" onChange={e=>setUrl(e.target.value)} value={url}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicRat">
  <Form.Label>Rating</Form.Label>
  <ReactStars isHalf={true} size={35} onChange={(newRating)=>setRating(newRating)} value={Rating}/>
</Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ Edit(el.id,{title:title, description:description,posterUrl:url,rate:Rating}); handleClose() }}>Edit</Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CardsEdit
