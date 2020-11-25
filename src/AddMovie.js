import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

const AddMovie = ({addMovie}) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [inputs,setInputs]=useState(
        {
            name:"",
            image:"",
            rating:1 ,
            year:""
        });
const handleChange=(e)=>{
setInputs({...inputs,[e.target.name]:e.target.value});}
    return (
<>
    <Button variant="primary" onClick={handleShow}>
    Add your favorite Movie</Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header>
        <Modal.Title>Add your favorite Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <label  style={{width:"250px"}}>title:</label>
        <input type='text' name="name" onChange={handleChange} value={inputs.name} /><br />
        <label  style={{width:"250px"}}>image:</label>
        <input type='text' name="image" onChange={handleChange} value={inputs.image} /><br />
        <label  style={{width:"250px"}}>rating:</label>
        <input type='text' name="rating" onChange={handleChange} value={inputs.rating} />
        <label  style={{width:"250px"}}>year:</label>
        <input type='text' name="year" onChange={handleChange} value={inputs.year} /><br />
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> Close
        </Button>
        <Button variant="primary" onClick={()=>{addMovie(inputs);
            handleClose();
            setInputs({
                name:"",
                image:"",
                rating:1,
                year:"" , })
            }
            }> 
            Add </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default AddMovie