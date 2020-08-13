import React from 'react';
import { Link } from 'react-router-dom';
import './BlogContainer.css';
import ReactHtmlParser from 'react-html-parser';

export default class BlogContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            img: {
                src: '',
                alt: ''
            },
            text: ''
        }
    }

    componentDidMount(){
        this.props.blog_content.forEach(blog => {
            if (blog.type === 'img_main'){
                this.setState({
                    img: {
                        src: blog.content,
                        alt: blog.alt
                    }
                })
            }
            else {
                let cardText;
                if(blog.content.length >= 220)
                    cardText = blog.content.substring(0, 220) + "...";
                else
                    cardText = blog.content + '..';
                this.setState({
                    text: cardText
                })
            }
        })
    }
    render (){
        const { src, alt } = this.state.img;
        const { title, blog_id } = this.props;
        const text = this.state.text;
        return (
            <div className="mt-3 col-lg-4 d-flex align-items-stretch mb-4">
                <div className="card">
                    <Link to={`/blog/${blog_id}`}>
                        <img src={src} className="card-img-top" alt={alt}/>
                    </Link>
                    <div className="card-body">
                        <Link to={`/blog/${blog_id}`}>
                            <h3 className="card-title card__color">{title}</h3>
                        </Link>
                        <p  className="card-text">{ReactHtmlParser(text)}</p>  
                        <div className="mx-auto">
                            <Link className="btn btn-secondary btn--lightgreen" to={`/blog/${blog_id}`}>
                            Read More
                            </Link>
                        </div>
                    </div>
                </div>         
            </div>
        )
    }
}