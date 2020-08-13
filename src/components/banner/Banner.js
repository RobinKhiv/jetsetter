import React from 'react';
import jetSetBanner from '../../asset/jetsettoeat_yellow.jpg';

const banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <img className="img-fluid" src={jetSetBanner} alt="banner"/>
                </div>
            </div>
        </div>  
    );
}

export default banner;