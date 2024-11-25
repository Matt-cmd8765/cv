import PropTypes from "prop-types";

const WorkExperience = ({ setworkdata }) => {
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setworkdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <label>Job:</label>
      <input type="text" name="job" onChange={handleTextChange} />
      <label>Role:</label>
      <input type="text" name="role" onChange={handleTextChange} />
      <label>Responsibilities:</label>
      <textarea name="responsibilities" onChange={handleTextChange}></textarea>
      <label>Start Date:</label>
      <input type="date" name="job_start_date" onChange={handleTextChange} />
      <label>End Date:</label>
      <input type="date" name="job_end_date" onChange={handleTextChange} />
    </div>
  );
};

WorkExperience.propTypes = { setworkdata: PropTypes.func.isRequired };

export default WorkExperience;
