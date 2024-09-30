const Profile = (props) => {
  return (
    <div>
      <span>Su nombre es:{props.alumno.nombre}</span>
      <span>Su nota es:{props.alumno.nota}</span>
    </div>
  );
};

export default Profile;
