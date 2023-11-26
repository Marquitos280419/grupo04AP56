export const VisibilityControl = ({
  isChecked,
  setshowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de borrar?")) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          //La propiedad es con c minuscula
          checked={isChecked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas resueltas</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Borrar resueltas
      </button>
    </div>
  );
};
