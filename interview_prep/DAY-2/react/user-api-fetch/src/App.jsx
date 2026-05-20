import React, { useState, useEffect } from 'react';

function App() {
  // Step 2: Store users, loading, error in state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Step 1: Fetch users using useEffect (correct way)
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // Step 3: Show loading UI
  if (loading) {
    return <div>Loading users...</div>;
  }

  // Step 3: Show error UI
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Step 4: Render user list using .map()
  return (
    <div>
      <h1>User Directory</h1>
      
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <div>Email: {user.email}</div>
          <div>City: {user.address.city}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;