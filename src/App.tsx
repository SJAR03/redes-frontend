import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserList from './components/UserList';
import { User } from './services/api';

const App: React.FC = () => {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleUserUpdated = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1>CRUD de Usuarios</h1>
      <AddUserForm onUserAdded={handleUserUpdated} />
      {editingUser && (
        <EditUserForm user={editingUser} onUserUpdated={handleUserUpdated} />
      )}
      <UserList onEdit={handleEditUser} />
    </div>
  );
};

export default App;
