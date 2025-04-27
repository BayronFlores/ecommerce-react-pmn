import React, { useState, useEffect } from 'react';
import '../../styles/Profile.css';
import AccountNav from '../../components/Layout/AccountNav';
import useAuth from '../../hooks/useAuth';
import { UserService } from '../../services/UserService';
import { UserData } from '../../data/userData';

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
      <div className="profile-container flex-1 p-6">
        <div className="profile-card">
          <h2 className="profile-title">Account Setting</h2>
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
                <label>Display name</label>
                <input
                  type="text"
                  value={editedUser?.displayName || ''}
                  name="displayName"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  value={editedUser?.username || ''}
                  name="username"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Full Name</label>
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
                <label>Secondary Email</label>
                <input
                  type="text"
                  value={editedUser?.secondaryEmail || ''}
                  name="secondaryEmail"
                  className="profile-input"
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label>Phone Number</label>
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
                <label>Country/Region</label>
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
                <label>State</label>
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
                <label>Zip Code</label>
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
