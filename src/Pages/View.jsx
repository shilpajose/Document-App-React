import { useEffect, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { db } from '../Config/firebase';
import { addDoc, doc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function View() {
    const [allDoc, setAllDoc] = useState([])
    const[docTitle,setDocTitle]=useState('')
    const[reload,setReload]=useState('')

    const navigate=useNavigate()

    const docCollectionRef = collection(db, 'documents')


    //get doc
    const getAllDoc = async () => {
        const docsData = await getDocs(docCollectionRef)
        const data = docsData.docs.map(doc => (
            {
                ...doc.data(),
                id: doc.id
            }
        ))
        setAllDoc(data);
    }
    //add doc
  
    const postData=async()=>{
        await addDoc(docCollectionRef,{
            title:docTitle,
            description:''
        })
        setReload(docTitle)
    }

    //delete doc

    const handleDelete=async(id)=>{
        const document=doc(db,'documents',id)
        await deleteDoc(document)
        setReload(id)
        toast.info(`${docTitle} deleted`)
        

    }

    //update
    const handleUpdate=(item)=>{
        navigate('/quilleditor',{state:item})

    }

    const handleAdd=()=>{
        postData()
       toast.success(`${docTitle} added successfully`)
        handleChange('')
        setShow(false)

    }

    useEffect(()=>{
        getAllDoc()
    },[reload])

    const handleChange=(e)=>{
        setDocTitle(e)
    }
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className='container'>
                <div className='mt-5 d-flex justify-content-center'>
                    <button onClick={handleShow} className='btn btn-success'>Add New Note</button>
                </div>

                <div className='row mt-5 '>
                    {
                        allDoc?.length > 0 ? allDoc.map((item) => (
                            <div key={item.id} className="col-lg-4 mb-3">
                                <Card style={{ width: '18rem' ,height:'200px'}}>
                                    <Card.Body>
                                        <Card.Title className='fw-bolder py-1'>{item.title}</Card.Title>
                                        <Card.Text>{item.description.replace(/<[^>]+>/g, '')}</Card.Text>
                                        <div className='d-flex justify-content-end'>
                                            <button onClick={()=>handleUpdate(item)} className='btn text-warning'><i class="fa-solid fa-pen-to-square py-1"></i></button>
                                            <button onClick={()=>handleDelete(item.id)} className='btn text-danger'><i class="fa-solid fa-trash py-1"></i></button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )) :
                            <div></div>

                    }

                </div>


                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputC"
                                type="text"
                                placeholder="Add title"
                                value={docTitle}
                                onChange={(e)=>handleChange(e.target.value)}

                            />
                            <label htmlFor="floatingInputCustom">Add title</label>
                        </Form.Floating>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleAdd} variant="primary">
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

        </>
    )
}

export default View