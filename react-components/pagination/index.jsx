import React, { Component } from 'react';
import './styles.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.messageHandler = (evt) => {
      alert('Got a mesaage for Pagination: ' + evt.detail.message);
    }
  }

  setNextPage(pageNo) {
    document.dispatchEvent(new CustomEvent('setPage', { detail: { pageNo: pageNo } }));
  }

  sayHelloToComp2() {
    document.dispatchEvent(new CustomEvent('messageForGallery', { bubbles: true, detail: { message: 'hi' } }))
  }

  componentDidMount() {
    document.addEventListener('messageForPagination', this.messageHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('messageForPagination', this.messageHandler)
  }

  render() {
    return (
      <div className='pagination-container'>
        <div>Pagination</div>
        <button onClick={this.sayHelloToComp2}>Say Hi to Gallery</button>
        <div>
          <button disabled={this.props.pageNo === 1} onClick={this.setNextPage.bind(this, this.props.pageNo - 1)}>Previous</button>
          <button onClick={this.setNextPage.bind(this, this.props.pageNo + 1)}>Next</button>
        </div>
      </div>
    );
  }
}

export default Pagination;
