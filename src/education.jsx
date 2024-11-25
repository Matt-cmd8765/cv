import PropTypes from "prop-types";

const Education = ({ seteducationdata }) => {
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    seteducationdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <label>School:</label>
      <input type="text" name="school" onChange={handleTextChange} />
      <label>Major:</label>
      <input type="text" name="major" onChange={handleTextChange} />
      <label>Start Date:</label>
      <input type="date" name="start_date" onChange={handleTextChange} />
      <label>End Date:</label>
      <input type="date" name="end_date" onChange={handleTextChange} />
    </div>
  );
};

Education.propTypes = { seteducationdata: PropTypes.func.isRequired };

export default Education;
