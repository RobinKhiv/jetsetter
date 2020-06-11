import React, { Component } from 'react'
import axios from 'axios';
import config from '../config';
import CardContainer from '../components/card-container/CardContainer';

export class BlogCategory extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            current_category: null
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        const { category_id } = this.props.match.params;
        this.fetchCategories(category_id);
    }
    fetchCategories(category_id){
        axios.get(`${config.API_ENDPOINT}/category/${category_id}`).then(response => {
            const blogs = response.data.data;
            this.setState({
                data: blogs,
                current_category: category_id
            });
        })
    }
    render() {
        const { data } = this.state;
        return (
            <CardContainer data={data}/>
        )
    }
}

export default BlogCategory
