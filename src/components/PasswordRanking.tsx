import React from 'react';
import { Table } from 'reactstrap';

interface Props {
  history: string[];
}

interface Count {
  [key: string]: number;
}

const PasswordRanking: React.SFC<Props> = ({ history }: Props) => {
  let count: Count = {};
  history.forEach(password => {
    count[password] = count[password] ? count[password] + 1 : 1;
  });
  const countKeysSorted = Object.keys(count).sort(
    (a, b) => count[b] - count[a]
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>Password</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {countKeysSorted.map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{count[key]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PasswordRanking;
