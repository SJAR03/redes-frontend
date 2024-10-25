import React, { useState } from 'react';
import { createUser } from '../services/api';

const AddUserForm: React.FC<{ onUserAdded: () => void }> = ({ onUserAdded }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUser({ nombre, email });
        setNombre('');
        setEmail('');
        onUserAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Usuario</h2>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddUserForm;
