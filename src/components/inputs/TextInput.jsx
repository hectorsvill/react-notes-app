const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        name={name}
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Note Title"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
