import React from 'react';
import BlogCard from './BlogContainer';

const card_container = props => {
    const data = props.data;
    
    return (
        <section className="container">
            <div className="row">
                {data.length && 
                data.map(blog => {
                    if(blog.category_id){
                        blog  = blog.blog; 
                    }
                   return <BlogCard 
                    key={blog.id} 
                    blog_id={blog.blog_id}
                    blog_content={blog.blog_content}
                    title={blog.title}
                />})
                }
            </div>         
        </section>
    )
}

export default card_container;