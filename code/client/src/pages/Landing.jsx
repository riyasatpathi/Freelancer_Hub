import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3 style={{ color: 'black' }}>Freelancer Hub</h3>
              <button onClick={()=> navigate('/authenticate')} style={{ 
                    color: 'white', 
                   
                    backgroundColor: 'black', }}>Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1 style={{ color: 'black' }}>Welcome to Freelancer Hub</h1>
                <p style={{ color: 'black' }}>Your gateway to top talent and exciting projects.</p>
                <button onClick={()=> navigate('/authenticate')}
                  style={{ 
                    color: 'white', 
                    border: '2px solid black', 
                    backgroundColor: 'black', 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer', 
                    textAlign: 'center' 
                  }}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing