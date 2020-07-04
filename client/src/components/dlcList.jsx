import React from 'react';
import Entry from './entry.jsx';
import { DlcTable } from './styles/auxstyles.js';

const DlcList = (props) => {
  return (
    <DlcTable>
      {
        props.data.map((dlc) => {
          return (
            <Entry data={dlc} />
          );
        })
      }
    </DlcTable>
  );
};

export default DlcList;