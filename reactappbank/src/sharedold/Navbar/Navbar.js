import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Monocept Bank</div>
            
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>About-Us</li>
                    <li>Contact-Us</li>

                    
                </ul>
            </div>
            <button className="button n-button">Logout</button >
        </div>
    </div>
    
  )
}

export default Navbar
