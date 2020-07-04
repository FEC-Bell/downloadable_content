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
  }


  render() {
    return (
      <div>
        {
          this.props.data.map((dlc) =>
            (<Entry data={dlc}></Entry>)
          )
        }
      </div>

    );
  }
}

export default RelatedContent;