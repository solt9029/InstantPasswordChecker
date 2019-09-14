import React from 'react';

interface Props {
  history: string[];
}

const DataList: React.SFC<Props> = ({ history }: Props) => (
  <>
    {history.map((value, index) => {
      return <div key={index}>{value}</div>;
    })}
  </>
);

export default DataList;
