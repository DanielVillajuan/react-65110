// Stateless Component. Componenete de Presentacion, es estetico y repetitivo, es un Boton.

export const Button = ({ label, color, onClick, placeholder, onChange }) => {


  return (
    <>
      <input
        type="Text"
        placeholder={placeholder}
        onChange={onChange}
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

