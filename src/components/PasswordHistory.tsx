import React from 'react';
import { Table } from 'reactstrap';

interface Props {
  history: string[];
}

const PasswordHistory: React.SFC<Props> = ({ history }: Props) => (
  <Table>
    <thead>
      <tr>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      {history.map((password, index) => {
        return (
          <tr key={index}>
            <td>{password}</td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default PasswordHistory;
