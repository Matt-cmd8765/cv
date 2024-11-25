import PropTypes from "prop-types";

const PersonalInfo = ({ setpersonalinfodata }) => {
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setpersonalinfodata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" name="nombre" onChange={handleTextChange} />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleTextChange} />
      <label>Phone number:</label>
      <input type="phone" name="phone" onChange={handleTextChange} />
    </div>
  );
};

PersonalInfo.propTypes = { setpersonalinfodata: PropTypes.func.isRequired };

export default PersonalInfo;
