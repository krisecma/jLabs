const CalculationTo = ({ user }) => {
  return <h2>{user ? `Calculation for user: ${user}` : "No user selected"}</h2>;
};

export default CalculationTo;
