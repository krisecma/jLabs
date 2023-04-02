const Select = ({ label, options, onChange }) => {
  return (
    <div>
      <label htmlFor="select">{label} </label>
      <select name="select" id="select" onChange={onChange}>
        <option value="">--</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
