import React, { Component } from 'react'
import axios from 'axios';
import config from '../config';
import CardContainer from '../components/card-container/CardContainer';
import loadingGif from '../asset/pizza.gif';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export class BlogCategory extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            current_category: null,
            isLoading: false
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        this.setState({isLoading: true})
        const { category_id } = this.props.match.params;
        this.fetchCategories(category_id);
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);
        const { category_id } = this.props.match.params;
        if(category_id !== this.state.current_category && this.state.current_category !== null){
            this.fetchCategories(category_id);
        }
    }
    fetchCategories(category_id){
        axios.get(`${config.API_ENDPOINT}/category/${category_id}`).then(response => {
            const blogs = response.data.data;
            this.setState({
                data: blogs,
                current_category: category_id,
                isLoading: false
            });
        })
    }
    renderLoading = () =>{
        return (
          <div className="loading">
            <div className="loading__content">
              <img src={loadingGif} alt="load" className="loading__img" />
            </div>
          </div>);
      }
    render() {
        const { data } = this.state;
        const {isLoading} = this.state;
        return (
            <React.Fragment>
                <HelmetProvider>
                    <Helmet>
                        <title>Jetset To Eat</title>         
                    </Helmet>
                </HelmetProvider>
                { isLoading ? this.renderLoading() : <CardContainer data={data} />}
            </React.Fragment>
        )
    }
}

export default BlogCategory
