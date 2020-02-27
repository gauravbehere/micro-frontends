import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1
    }
    this.setPage = (evt) => {
      this.setState({...this.state, pageNo: evt.detail.pageNo});
    }
  }

  componentDidMount() {
    document.addEventListener('setPage', this.setPage);
  }

  componentWillUnmount() {
    document.removeEventListener('setPage', this.setPage);
  }

  render() {
    return (
      <div className='pageContainer'>
        <div className='header'> Micro Front Ends</div>
        <Pagination pageNo={this.state.pageNo} />
        <Gallery pageNo={this.state.pageNo} />
        <page-number pageNo={this.state.pageNo} />
      </div>
    )
  }
}

export default App;
