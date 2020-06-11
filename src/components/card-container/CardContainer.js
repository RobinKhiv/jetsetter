import React from 'react';
import BlogCard from './BlogContainer';

export default class CardContainer extends React.Component {
    render () {
        const data = this.props.data;
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
}