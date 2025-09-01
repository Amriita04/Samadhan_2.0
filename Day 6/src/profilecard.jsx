import './ProfileCard.css';
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  width: '250px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#fff',
};

const avatarStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '12px',
};

function ProfileCard({ name, avatar, bio }) {
  return (
    <div style={cardStyle}>
      <img src={avatar} alt={`${name}'s avatar`} style={avatarStyle} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

function ProfileCard({ name, avatar, bio }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}
export default ProfileCard;
