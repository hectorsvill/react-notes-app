const Note = ({ note, handleDelete }) => {
  return (
    <div
      key={note.id}
      className="p-4 bg-white rounded-lg shadow border-l-5"
      style={{
        borderColor:
          note.priority === "High"
            ? "red"
            : note.priority === "Medium"
            ? "yellow"
            : "green",
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority:</strong> {note.priority}
      </p>
      <p className="mt-2">{note.description}</p>
      <button
        onClick={() => handleDelete(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-600"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Note;
