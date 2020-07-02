import React from 'react';
import $ from 'jquery';
import Entry from './entry.jsx';
import axios from 'axios';

const url = '/api/dlc/';

class RelatedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 1,
      data: [{}]
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.gameId);
  }

  getData(gameId = 1) {
    axios.get(url + gameId)
      .then((data) => {
        this.setState({
          data: data.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }


  render() {
    return (
      <div>
        <h2>CONTENT FOR THIS GAME
          <span className='note'>
            <a href="https://google.com"><em>({this.state.data.length})</em></a>
          </span>
        </h2>
        {
          this.state.data.map((dlc) =>
            (<Entry data={dlc}></Entry>)
          )
        }
      </div>

    );
  }
}

export default RelatedContent;