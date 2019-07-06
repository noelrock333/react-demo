import React from 'react';
import axios from 'axios';

class VideoForm extends React.Component {
  state = {
    title: '',
    imageUrl: '',
    videoUrl: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _onSubmit = async (event) => {
    event.preventDefault();
    const { title, imageUrl, videoUrl } = this.state;

    try {
      let request = await axios.post('https://taller-node.herokuapp.com/videos/create', {
        title: title,
        image: imageUrl,
        url: videoUrl
      });
      const { data } = request;
      console.log(data);
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const { title, imageUrl, videoUrl } = this.state;
    return (
      <div className="container">
        <h3>Agregar video</h3>
        <form action="" onSubmit={this._onSubmit}>
          <input type="text" value={title} onChange={this.handleInputChange} name="title" placeholder="Titulo"/>
          <input type="text" value={imageUrl} onChange={this.handleInputChange} name="imageUrl" placeholder="Url de imagen" />
          <input type="text" value={videoUrl} onChange={this.handleInputChange} name="videoUrl" placeholder="Url de video" />
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    );
  }
}

export default VideoForm;