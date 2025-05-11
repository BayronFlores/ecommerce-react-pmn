import React, { useState, useEffect } from 'react';
import '@/styles/profile.css';
import AccountNav from '@/components/Layout/AccountNav';
import useAuth from '@/hooks/useAuth';
import { UserService } from '@/services/UserService';
import { UserData } from '@/data/userData';

const Profile = () => {
  const { user, setUser } = useAuth(); // Ahora puedes acceder a setUser
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<UserData | null>(user);

  useEffect(() => {
    // Cuando el usuario cambia, actualizamos el estado de editedUser
    setEditedUser(user);
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

const handleSaveClick = () => {
  if (editedUser && editedUser.id) {
    UserService.update(editedUser); // Actualizar en el UserService

    // Guardar los datos actualizados en localStorage
    localStorage.setItem('user', JSON.stringify(editedUser));

    // Actualizar el estado global
    setUser(editedUser);

    setIsEditing(false); // Salir del modo de edición
  } else {
    console.error('Usuario no definido o incompleto');
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editedUser) {
      setEditedUser({ ...editedUser, [name]: value });
    }
  };

  if (!user) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="container flex">
      <AccountNav />
      <div className="profile-container ">
        <div className="profile-card">
          <h2 className="profile-title">Ajustes de Cuenta</h2>
          <div className="profile-content">
            <div className="profile-image-wrapper">
              <img
                src={user.profileImage || '/img/default-profile.png'}
                alt="Profile"
                className="profile-image"
              />
            </div>

            <form className="profile-form">
              <div>
                <label>ciudad</label>
                <input
                  type="text"
                  value={editedUser?.city || ''}
                  name="city"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Nombre Completo</label>
                <input
                  type="text"
                  value={editedUser?.name || ''}
                  name="name"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={editedUser?.email || ''}
                  name="email"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Direccion</label>
                <input
                  type="text"
                  value={editedUser?.address || ''}
                  name="address"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Numero Telefonico</label>
                <input
                  type="text"
                  value={editedUser?.phoneNumber || ''}
                  name="phoneNumber"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Pais/Region</label>
                <input
                  type="text"
                  value={editedUser?.country || ''}
                  name="country"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>estado</label>
                <input
                  type="text"
                  value={editedUser?.state || ''}
                  name="state"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Código postal</label>
                <input
                  type="text"
                  value={editedUser?.zipCode || ''}
                  name="zipCode"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
            </form>
          </div>

          {isEditing ? (
            <div>
              <button className="profile-save-button" onClick={handleSaveClick}>
                Guardar Cambios
              </button>
            </div>
          ) : (
            <button className="profile-save-button" onClick={handleEditClick}>
              Editar Perfil
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
