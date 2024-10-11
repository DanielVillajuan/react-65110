export const Button = ({ label, color, onClick, placeholder }) => {
 
  return (
    <>
      <input
        type="Text"
        placeholder={placeholder}
      ></input>
      <button
        style={{ color: color }}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

