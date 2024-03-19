import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from '../Config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Link, useLocation } from 'react-router-dom';

function QuillEditor() {
  const location = useLocation()
  const item = location.state
  const [display, setDisplay] = useState(item.description)

  const editDescription = async () => {
    const document = doc(db, 'documents', item.id)
    updateDoc(document, {
      description: display
    })
  }

  const handleChange = (e) => {
    setDisplay(e)
  }

  useEffect(() => {
    editDescription()
  }, [display])

  return (
    <>
      <div  style={{ height: '100vh' }} className='container'>
        <div className='mt-3'>
            <Link to={'/'} style={{textDecoration:'none'}} className='btn btn-success'><i className='fa-solid fa-arrow-backward'></i> Go Back</Link>
        </div>
        <h2 className='mt-5 fw-bolder'>{item.title}</h2>
          <ReactQuill className='mt-2 '  placeholder='Type here....' theme="snow" value={display} onChange={(e) => handleChange(e)} />
      </div>

    </>
  )
}

export default QuillEditor