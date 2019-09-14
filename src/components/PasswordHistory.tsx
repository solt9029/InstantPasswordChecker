import React from 'react';
import PasswordHistoryItem from './PasswordHistoryItem';

interface Props {
  history: string[];
}

const PasswordHistory: React.SFC<Props> = ({ history }: Props) => (
  <>
    {history.map((value, index) => {
      return <PasswordHistoryItem key={index}>{value}</PasswordHistoryItem>;
    })}
  </>
);

export default PasswordHistory;
