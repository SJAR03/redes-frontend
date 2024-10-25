import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, User } from '../services/api';

const UserList: React.FC<{ onEdit: (user: User) => void }> = ({ onEdit }) => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const data = await getUsers();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div>
            <h2>Usuarios</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.nombre} ({user.email})
                        <button onClick={() => onEdit(user)}>Editar</button>
                        <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
