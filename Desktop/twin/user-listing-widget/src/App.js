import React, { useState } from 'react';
import './App.css';
import users from './users';
import UserCard from './components/UserCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const location = `${user.location.city} ${user.location.country}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      location.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1>User Listing Widget</h1>
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
