import React from 'react';
import Entry from './entry.jsx';
import { DlcTable } from './styles/auxstyles.js';

const DlcList = (props) => {
  return (
    <DlcTable>
      {
        props.data.map((dlc, idx) => {
          return (
            <Entry data={dlc} key={idx}/>
          );
        })
      }
    </DlcTable>
  );
};

export default DlcList;