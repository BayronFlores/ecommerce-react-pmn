import '../../styles/Profile.css';
import AccountNav from '../../components/AccountNav';
import { profileFormData } from '../../data/profileData';

const Profile = () => {
  return (
    <div className="container">
      <AccountNav />
      <div className="profile-container">
        <div className="profile-card">
          <h2 className="profile-title">Account Setting</h2>
          <div className="profile-content">
            {/* Imagen de perfil */}
            <div className="profile-image-wrapper">
              <img
                src={profileFormData.profileImage}
                alt="Profile"
                className="profile-image"
              />
            </div>

            {/* Formulario */}
            <form className="profile-form">
              <div>
                <label>Display name</label>
                <input
                  type="text"
                  placeholder={profileFormData.displayName}
                  className="profile-input"
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  placeholder={profileFormData.username}
                  className="profile-input"
                />
              </div>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={profileFormData.fullName}
                  className="profile-input"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder={profileFormData.email}
                  className="profile-input"
                />
              </div>
              <div>
                <label>Secondary Email</label>
                <input
                  type="text"
                  placeholder={profileFormData.secondaryEmail}
                  className="profile-input"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder={profileFormData.phoneNumber}
                  className="profile-input"
                />
              </div>
              <div>
                <label>Country/Region</label>
                <select className="profile-input">
                  {profileFormData.countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>States</label>
                <select className="profile-input">
                  {profileFormData.states.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Zip Code</label>
                <input
                  type="text"
                  placeholder={profileFormData.zipCode}
                  className="profile-input"
                />
              </div>
            </form>
          </div>

          {/* Botón guardar */}
          <div>
            <button className="profile-save-button">SAVE CHANGES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
