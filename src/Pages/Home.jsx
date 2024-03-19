import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/view')
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center bg ' style={{ minHeight: '86vh' }}>
                <div style={{ height: '350px', width: '850px' }} className=' card  shadow d-flex justify-content-center align-items-center'>
                    <div className=''>
                        <h1 className=' fw-bolder py-1'><img style={{height:'100px'}} className='' src="http://clipart-library.com/img1/699915.png" alt="" /> &nbsp; Keep My Note's</h1>
                    </div>
                    <h4 className='sub py-1'>Take note's anywhere you go...</h4>
                    <button onClick={handleNavigate} className='btn btn-info '>Get's Started</button>

                </div>

            </div>


        </>
    )
}

export default Home