import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import config from '../config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Blog.css';


export class Blog extends React.Component {
    constructor(){
        super();
        this.state = {
            blog: [],
            current_blog_id: null,
            title: "",
            description: ""
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        const { blog_id } = this.props.match.params;
        this.fetchBlogs(blog_id);
    }
    componentDidUpdate() {
        // window.scrollTo(0, 0)
        // const { blog_id } = this.props.match.params;
        // if(blog_id !== this.state.current_blog_id && this.state.current_blog_id !== null){
        //     this.fetchBlogs(blog_id);
        // }
    }

    fetchBlogs(blog_id){
        return fetch(`${config.API_ENDPOINT}/blog/${blog_id}`)
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json())
            .then(data => {
                const blogContent = data.data;
                this.setState({
                    blog: blogContent,
                    current_blog_id: blog_id,
                    title: blogContent[1].content,
                    description: blogContent[2].content
                });
            })
    }
    renderContent (content)  {
      const blogContent = [];
      const popups = [];

      for(let i = 0; i < content.length; i++){
        if(content[i].type === 'paragraph' || content[i].type === 'intro') {
            if(content[i].content.substring(1,3)  === "ul")
                blogContent.push(ReactHtmlParser(content[i].content));
            else
                blogContent.push(<p className="text-body " key={content[i].id}>{ReactHtmlParser(content[i].content)}</p>);
        }
        else if(content[i].type === 'main_title')
            blogContent.push(<h1 className={"h1 mt-5 mb-3 font-weight-bold color--primary1 " + content[i].class } key={content[i].id}>{content[i].content}</h1>)
        else if(content[i].type === 'title' || content[i].type === 'big_title') 
            blogContent.push(<h3 className={"mt-5 mb-3 color--primary1" + content[i].class} key={content[i].id}>{ReactHtmlParser(content[i].content)}</h3>);
        else if (content[i].type === `img` || content[i].type === 'img_main') {
            if(Number(content[i].size) === 3.00 && Number(content[i+1].size) === 3.00 && Number(content[i+2].size) === 3.00 && Number(content[i+3].size) === 3.00 ){   
                blogContent.push(
                <div key={content[i].id} className="gallery">
                    <div  className="gallery__item--30">
                        <a href={"#"+content[i].id+ "_popup"} >
                            <img id={content[i].id} src={content[i].content} className="gallery__img" title={content[i].alt} alt={content[i].alt} />
                        </a> 
                    </div>
                    <div className="gallery__item--30"  >
                        <a href={"#"+content[i + 1].id+ "_popup"} >
                            <img id={content[i +1].id} src={content[i + 1].content} className="gallery__img" title={content[i +1].alt} alt={content[i +1].alt} />
                        </a> 
                    </div>
                    <div  className="gallery__item--30"  >
                        <a href={"#"+content[i+2].id+ "_popup"} >
                            <img id={content[i+2].id} src={content[i+2].content} className="gallery__img" title={content[i+2].alt} alt={content[i+2].alt} />
                        </a> 
                    </div>
                    <div  className="gallery__item--30"  >
                        <a href={"#"+content[i+3].id+ "_popup"} >
                            <img id={content[i+3].id} src={content[i+3].content} className="gallery__img" title={content[i+3].alt} alt={content[i+3].alt} />
                        </a> 
                    </div>
                </div>);
                popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));
                popups.push(this.renderImg(content[i + 2].id, content[i+2].content, content[i+2].alt));
                popups.push(this.renderImg(content[i + 3].id, content[i+3].content, content[i+3].alt));
                i= i+3;
            }
            else if((Number(content[i].size) === 5.00 && Number(content[i+1].size) === 2.00 && Number(content[i+2].size) === 5.00))
            {
                blogContent.push(
                    <div key={content[i].id} class="gallery522">
                        <div class="gallery522__item--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} class="gallery__img" title={content[i].alt} alt={content[i].alt} />
                            </a> 
                        </div>
                        <div class="gallery522__item--2" >
                            <a href={"#"+content[i + 1].id+ "_popup"} >
                                <img id={content[i +1].id} src={content[i + 1].content} class="gallery__img" title={content[i +1].alt} alt={content[i +1].alt} />
                            </a> 
                        </div>
                        <div class="gallery522__item--3" >
                            <a href={"#"+content[i+2].id+ "_popup"} >
                                <img id={content[i+2].id} src={content[i+2].content} class="gallery__img" title={content[i+2].alt} alt={content[i+2].alt} />
                            </a> 
                        </div>
                    </div>);
                    popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                    popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));
                    popups.push(this.renderImg(content[i + 2].id, content[i+2].content, content[i+2].alt));
                    i= i+2;
            }
            else if((Number(content[i].size) === 4.00 && Number(content[i+1].size) === 4.00) ){
                blogContent.push(
                    <div key={content[i].id} className="gallery444">
                        <div className="gallery444__item--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} className="gallery__img" title={content[i].alt} alt={content[i].alt} />
                            </a>
                        </div>
                        <div className="gallery444__item--2"  >
                            <a href={"#"+content[i + 1].id+ "_popup"} >
                                <img id={content[i +1].id} src={content[i + 1].content} className="gallery__img" title={content[i +1].alt} alt={content[i +1].alt} />
                            </a> 
                        </div>
                        <div className="gallery444__item--3"  >
                            <a href={"#"+content[i+2].id+ "_popup"} >
                                <img id={content[i+2].id} src={content[i+2].content} className="gallery__img" title={content[i+2].alt} alt={content[i+2].alt} />
                            </a> 
                        </div>
                    </div>);
                    popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                    popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));
                    popups.push(this.renderImg(content[i + 2].id, content[i+2].content, content[i+2].alt));
                    i= i+2;
            }
            else if((Number(content[i].size) === 4.00 && Number(content[i+1].size) === 4.50) || (Number(content[i].size) === 6.00 && Number(content[i+1].size) === 2.00) || (Number(content[i].size) === 2.00 && Number(content[i+1].size) === 6.00) || (Number(content[i].size) === 4.00 && Number(content[i+1].size) === 2.00)){
                blogContent.push(
                    <div key={content[i].id} className="gallery2622">
                        <div  className="gallery2622__item--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} className="gallery__img" title={content[i].alt} alt={content[i].alt} />
                            </a> 
                        </div>
                        <div className="gallery2622__item--2">
                            <a href={"#"+content[i + 1].id+ "_popup"} >
                                <img id={content[i +1].id} src={content[i + 1].content} className="gallery__img" title={content[i +1].alt} alt={content[i +1].alt} />
                            </a> 
                        </div>
                        <div  className="gallery2622__item--3">
                            <a href={"#"+content[i+2].id+ "_popup"} >
                                <img id={content[i+2].id} src={content[i+2].content} className="gallery__img" title={content[i+2].alt} alt={content[i+2].alt} />
                            </a> 
                        </div>
                        <div  className="gallery2622__item--4">
                            <a href={"#"+content[i+3].id+ "_popup"}>
                                <img id={content[i+3].id} src={content[i+3].content} className="gallery__img" title={content[i+3].alt} alt={content[i+3].alt} />
                            </a> 
                        </div>
                    </div>);
                    popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                    popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));
                    popups.push(this.renderImg(content[i + 2].id, content[i+2].content, content[i+2].alt));
                    popups.push(this.renderImg(content[i + 3].id, content[i+3].content, content[i+3].alt));
                    i= i+3;
               
            }
            else if((Number(content[i].size) === 6.00 && Number(content[i+1].size) === 6.50 && Number(content[i+2].size) === 6.50) || (Number(content[i].size) === 8.00 && Number(content[i+1].size) === 4.50) || (Number(content[i].size) === 6.00 && Number(content[i+1].size) === 4.50)){
                blogContent.push(
                    <div key={content[i].id} className="gallery662">
                        <div className="gallery662__item--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} className="gallery662__img" title={content[i].alt} alt={content[i].alt} />
                            </a>
                        </div>
                        <div className="gallery662__item--2"  >
                            <a href={"#"+content[i + 1].id+ "_popup"} >
                                <img id={content[i +1].id} src={content[i + 1].content} className="gallery662__img" title={content[i +1].alt} alt={content[i +1].alt} />
                            </a> 
                        </div>
                        <div className="gallery662__item--3"  >
                            <a href={"#"+content[i+2].id+ "_popup"} >
                                <img id={content[i+2].id} src={content[i+2].content} className="gallery662__img" title={content[i+2].alt} alt={content[i+2].alt} />
                            </a> 
                        </div>
                    </div>);
                    popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                    popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));
                    popups.push(this.renderImg(content[i + 2].id, content[i+2].content, content[i+2].alt));
                    i= i+2;
            }
            else if((Number(content[i].size) === 6.00 && Number(content[i+1].size) === 3.00)||(Number(content[i].size) === 6.00 && Number(content[i+1].size) === 6.00) || (Number(content[i].size) === 8.00 && Number(content[i+1].size) === 4.00) ){
                blogContent.push(
                    <div key={content[i].id} className="gallery66">
                        <div  className="gallery66__item--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} className="gallery__img" title={content[i].alt} alt={content[i].alt} />
                            </a> 
                        </div>
                        <div className="gallery66__item--2"  >
                            <a href={"#"+content[i + 1].id+ "_popup"} >
                                <img id={content[i +1].id} src={content[i + 1].content} className="gallery__img" title={content[i +1].alt} alt={content[i +1].alt} />
                            </a> 
                        </div>
                    </div>);
                    popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                    popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));

                    i= i+1;
            }
            else if(Number(content[i].size) === 6.00 && Number(content[i+1].size) === 4.30){
                blogContent.push(
                    <div key={content[i].id} className="gallery643">
                        <div className="gallery643__item--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} className="gallery__img" title={content[i].alt} alt={content[i].alt} />
                            </a> 
                        </div>
                        <div className="gallery643__item--2">
                            <a href={"#"+content[i + 1].id+ "_popup"} >
                                <img id={content[i +1].id} src={content[i + 1].content} className="gallery__img" title={content[i +1].alt} alt={content[i +1].alt} />
                            </a> 
                        </div>
                        <div  className="gallery643__item--3">
                            <a href={"#"+content[i+2].id+ "_popup"} >
                                <img id={content[i+2].id} src={content[i+2].content} className="gallery__img" title={content[i+2].alt} alt={content[i+2].alt} />
                            </a> 
                        </div>
                        <div  className="gallery643__item--4">
                            <a href={"#"+content[i+3].id+ "_popup"}>
                                <img id={content[i+3].id} src={content[i+3].content} className="gallery__img" title={content[i+3].alt} alt={content[i+3].alt} />
                            </a> 
                        </div>
                    </div>);
                    popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
                    popups.push(this.renderImg(content[i + 1].id, content[i+ 1].content, content[i+1].alt));
                    popups.push(this.renderImg(content[i + 2].id, content[i+2].content, content[i+2].alt));
                    popups.push(this.renderImg(content[i + 3].id, content[i+3].content, content[i+3].alt));
                    i= i+3;
               
            }
            else {
                blogContent.push( 
                    <div key={content[i].id} className="galleryFlex">
                        <div  className="galleryFlex__content--1">
                            <a href={"#"+content[i].id+ "_popup"} >
                                <img id={content[i].id} src={content[i].content} className="galleryFlex__item" title={content[i].alt} alt={content[i].alt} />
                            </a> 
                        </div>
                    </div>
                );
                popups.push(this.renderImg(content[i].id, content[i].content, content[i].alt));
            }
        } 
      }
      return blogContent.concat(popups);
    }

    renderImg = (id, src, alt) =>{
        return(
            <div key={id+ "popup"} className="popup" id={id +"_popup"}>
                    <a href={"#"+ id} className="popup__close">&times;</a>      
                <div className="popup__content">
                    <img src={src} alt={alt} className="popup__img"/>
                </div>
            </div>
        )
    }

    render() {
        const blog_content = this.state.blog;
        const {title, description} = this.state;
        return (
            <React.Fragment>
                <HelmetProvider>
                    <Helmet>
                        <title>Jetset: {title}</title>
                        <meta name="description" content={description} />
                    </Helmet>
                </HelmetProvider>
                <section className="container mt-4">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-9">
                            {this.renderContent(blog_content)}
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <p>Tags</p>
                            <p>Leave a comment</p> */}
                        </div>
                    </div>  
                </section>
            </React.Fragment>
        )
    }
}

export default Blog
