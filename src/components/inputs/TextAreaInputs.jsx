const TextAreaInput = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        placeholder="Note Description"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaInput;
