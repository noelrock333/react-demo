import React from 'react';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class Video extends React.Component {
  state = {
    id: null,
    videoUrl: '',
    imageUrl: '',
    title: '',
    error: false
  }
  async componentDidMount() {
    const { match } = this.props;
    const { params: { videoId }} = match;
    console.log(videoId)
    try {
      let request = await axios.get(`https://taller-node.herokuapp.com/videos/show/${videoId}`);
      let { data } = request;
      console.log(data)
      this.setState({
        id: data.id,
        videoUrl: data.url,
        imageUrl: data.image,
        title: data.title
      })
    } catch(error) {
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { imageUrl, id, error, title } = this.state;
    return (
      <div className="container">
        <Card>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CardBody>
            <CardTitle>{error ? 'Video no disponible' : title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Video;