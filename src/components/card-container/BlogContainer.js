import React from 'react';
import { Link } from 'react-router-dom';

const blog_card = props => {
    const cardImage = {src:'', alt:''};
    let text = '';

    props.blog_content.map(blog => {
        if (blog.type === 'img_main'){
            cardImage.src = blog.content;
            cardImage.alt = blog.alt;
        }
        else {
            if(blog.content.length >= 220)
                text = blog.content.substring(0, 220) + "...";
            else
                text = blog.content + '..';
        }
    })

    return (
        <div className="mt-3 col-lg-4 d-flex align-items-stretch mb-4">
            <div className="card">
                <img src={cardImage.src} className="card-img-top" alt={cardImage.alt}/>
                <div class="card-body">
                    <Link to={`/blog/${props.blog_id}`}>
                        <h3 className="card-title">{props.title}</h3>
                    </Link>
                    <p  className="card-text">{text}</p>  
                    <div className="mx-auto">
                        <Link className="btn btn-secondary" to={`/blog/${props.blog_id}`}>
                        Read More
                        </Link>
                    </div>
                </div>
            </div>         
        </div>
    )
}
export default blog_card;