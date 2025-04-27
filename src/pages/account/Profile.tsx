import '../../styles/Profile.css';
import AccountNav from '../../components/Layout/AccountNav';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="container flex">
      {/* Sidebar */}
      <AccountNav />

      {/* Content Area */}
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
                  value={user.displayName || ''}
                  placeholder="Display Name"
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  value={user.username || ''}
                  placeholder="Username"
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  value={user.name}
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={user.email}
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Secondary Email</label>
                <input
                  type="text"
                  value={user.secondaryEmail || ''}
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  value={user.phoneNumber || ''}
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Country/Region</label>
                <input
                  type="text"
                  value={user.country || ''}
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  value={user.state || ''}
                  className="profile-input"
                  readOnly
                />
              </div>
              <div>
                <label>Zip Code</label>
                <input
                  type="text"
                  value={user.zipCode || ''}
                  className="profile-input"
                  readOnly
                />
              </div>
            </form>
          </div>

          <div>
            <button className="profile-save-button" disabled>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
