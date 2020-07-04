import React from 'react';
import ReactDOM from 'react-dom';
import DlcList from './components/dlcList.jsx';
import axios from 'axios';
import { MainContainer, Title, Browse } from './components/styles/auxstyles.js';
const url = '/api/dlc/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 100,
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
      <MainContainer>
        <Title>CONTENT FOR THIS GAME
          <Browse className='note'>
            <a href="https://google.com">
              Browse all
              <em>
                ({this.state.data.length})
              </em>
            </a>
          </Browse>
        </Title>
        <DlcList data={this.state.data} />
      </MainContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));