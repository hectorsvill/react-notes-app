import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInputs";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    const newNote = { id: Date.now(), ...formData };
    setNotes([...notes, newNote]);
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
    console.log("Form Data:", formData);
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full  bg-gray-100 border border-gray-300 text-blue-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ⓧ" : "Add New Note ➕"}
      </button>
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required={true}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴High" },
              { value: "Medium", label: "🟡Medium" },
              { value: "Low", label: "🟢Low" },
            ]}
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "🏢Work" },
              { value: "Personal", label: "🏠Personal" },
              { value: "Shopping", label: "🛒Shopping" },
            ]}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <button
            onClick={() => console.log(formData)}
            className="w-full bg-blue-500 text-white p-2 rounded-lg cursor-pointer hover:bg-green-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
