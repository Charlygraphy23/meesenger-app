import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext'
import { toast } from 'react-toastify';


const Navbar=() =>  {


  const context = useContext(UserContext);

  const handleClick = () => {
      context.setUser(null)
      toast('Logout Successfully' , {
        type : 'error',
        position : 'top-right'
    })
  }

  return (
         <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="navbar-brand">
                    <img width="25rem" src='data:image/png;base64,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' alt="Logo"/>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                     <span className="navbar-toggler-icon"></span>
                 </button>
           <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav collapse navbar-collapse justify-content-end" >
                        { !context.user && <li className="nav-item">
                        <Link to='/login' className="nav-link">Login</Link>
                        </li>}
                        {!context.user && <li className="nav-item">
                        <Link to='/signup' className="nav-link">SignUp</Link>
                        </li>}
                        
                        {context.user && <li className="nav-item">
                        <Link  className="nav-link" onClick={handleClick}>Logout</Link>
                        </li>}
                    </ul>
           </div>
        </nav>
  )}

export default Navbar;
