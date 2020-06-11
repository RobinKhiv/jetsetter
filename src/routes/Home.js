import React from 'react';
import axios from 'axios';
import config from '../config';
import CardContainer from '../components/card-container/CardContainer';

export class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    axios.get(`${config.API_ENDPOINT}/blog`)
      .then(response => {
        const data = response.data.data;
        this.setState({
          data
        });
      });
  }
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
    render() {
      const { data } = this.state;
        return (
          <CardContainer data={data} />
        )
    }
};

export default Home;