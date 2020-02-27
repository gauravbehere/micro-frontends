import React, { Component } from 'react';
import './styles.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    }
    this.messageHandler = (evt) => {
      alert('Got a mesaage for Gallery: ' + evt.detail.message);
    }
  }

  sayHelloToComp1() {
    document.dispatchEvent(new CustomEvent('messageForPagination', { bubbles: true, detail: { message: 'hello' } }))
  }

  componentDidMount() {
    document.addEventListener('messageForGallery', this.messageHandler);
    fetch(`https://picsum.photos/v2/list?limit=5&page=${this.props.pageNo}`)
      .then(res => res.json())
      .then(list => {
        this.setState({ ...this.state, pics: list });
      })
  }

  componentWillUpdate() {
    fetch(`https://picsum.photos/v2/list?limit=5&page=${this.props.pageNo}`)
      .then(res => res.json())
      .then(list => {
        this.setState({ ...this.state, pics: list });
      })
  }

  componentWillUnmount() {
    document.removeEventListener('messageForGallery', this.messageHandler)
  }

  render() {
    return (
      <div className='gallery-container'>
        <div>Gallery</div>
        <button onClick={this.sayHelloToComp1}>Say Hello to Pagination</button>
        <div>
          {
            this.state.pics.map((pic, i) => {
              return <div key={i} className='image' style={{ backgroundImage: `url(${pic.download_url})` }} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Gallery;
