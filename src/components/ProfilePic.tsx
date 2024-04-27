import profilePic from "./images/guts.jpeg";

const ProfilePic = () => {
  return (
    <div className="card text-bg-dark">
      <img src={profilePic} alt="Roger Marvin" />
      <div className="card-body">
        <h5 className="card-title">Roger Marvin</h5>
        <p className="card-text">
          I'm an apsiring Indonesian🇮🇩 programmer based in Japan.
          <br />
          ↓↓↓ Check out my works ↓↓↓
        </p>
        <div className="d-grid">
          <a href="https://github.com/RomaruDaze" className="btn btn-warning">
            Github <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
