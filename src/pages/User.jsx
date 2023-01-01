import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Account } from '../components';
import EditUser from '../components/EditUser/EditUser';

const accounts = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: 2082.79,
    description: 'Available Balance'
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: 10928.42,
    description: 'Available Balance'
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: 184.3,
    description: 'Current Balance'
  }
];

const User = () => {
  const { firstName, lastName } = useSelector(state => state.user.info);
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {toggleEdit ? <EditUser setToggleEdit={setToggleEdit} /> : `${firstName} ${lastName}`}
        </h1>
        {toggleEdit ? (
          ''
        ) : (
          <button className="edit-button" onClick={() => setToggleEdit(true)}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <Account key={index} {...account} />
      ))}
    </main>
  );
};
export default User;
