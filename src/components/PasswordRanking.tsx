import React from 'react';

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
    <>
      {countKeysSorted.map(key => {
        return (
          <div key={key}>
            {key}: {count[key]}
          </div>
        );
      })}
    </>
  );
};

export default PasswordRanking;
