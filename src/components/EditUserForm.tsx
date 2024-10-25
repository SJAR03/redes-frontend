import React, { useState, useEffect } from 'react';
import { updateUser, User } from '../services/api';

const EditUserForm: React.FC<{ user: User | null; onUserUpdated: () => void }> = ({ user, onUserUpdated }) => {
    const [nombre, setNombre] = useState(user?.nombre || '');
    const [email, setEmail] = useState(user?.email || '');

    useEffect(() => {
        if (user) {
            setNombre(user.nombre);
            setEmail(user.email);
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            await updateUser(user.id, { nombre, email });
            onUserUpdated();
        }
    };

    if (!user) return null;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Usuario</h2>
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
            <button type="submit">Actualizar</button>
        </form>
    );
};

export default EditUserForm;
