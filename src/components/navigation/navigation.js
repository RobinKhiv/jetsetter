import React from 'react';
import { Link } from 'react-router-dom';

const navigation = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark" >
            <Link to="/" className="navbar-brand">
               Jetset To Eat
            </Link>   
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to='' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/fddd647d-7dd3-4faa-87f6-eaa38ede0f88"className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Travel
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/d4b75935-e0ea-4181-afce-915d6d7cda30" className="dropdown-item">North America</Link>
                            <Link to="/25d439b0-3769-42dd-86d8-7eccd5e43ee3" className="dropdown-item">Europe</Link>
                            <Link to="/691031b9-de1c-4178-ba64-d8797eeca9eb" className="dropdown-item">Asia</Link>
                        </div>  
                    </li>
                    <li className="nav-item">
                        <Link to='/blog/a41f5295-8535-4eaa-97a3-ddcdf4a86a47' className="nav-link">About Me</Link>  
                    </li>
                    <li className="nav-item">
                        <Link to='/168126ef-a983-469b-b0d0-6ec65ced1c36' className="nav-link">Restaurants</Link>  
                    </li>
                    <li className="nav-item">
                        <Link to='/9e6591ba-a363-4614-9231-9d9fd1109bce' className="nav-link">Guides</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/3104126d-045c-4637-8374-2ee34e563f84' className="nav-link">Events</Link>  
                    </li>
                    <li>
                        <Link to='/d5ce744c-9c83-436c-8fe9-718bd82662ac' className="nav-link">Festivals</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    )
}

export default navigation;
