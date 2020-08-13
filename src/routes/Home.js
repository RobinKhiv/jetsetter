import React from 'react';
import axios from 'axios';
import config from '../config';
import CardContainer from '../components/card-container/CardContainer';
import loadingGif from '../asset/pizza.gif';

export class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      isLoading: false
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    this.setState({isLoading: true})
    axios.get(`${config.API_ENDPOINT}/blog`)
      .then(response => {
        const data = response.data.data;
        this.setState({
          data, isLoading: false
        });
      });
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
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
            { isLoading ? this.renderLoading() : <CardContainer data={data} />}
          </React.Fragment>
        )
    }
};

export default Home;