import React, { useState } from "react";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai"; // Import icons

const Notes = () => {
  const [notes, setNotes] = useState([]); // State for storing notes
  const [newNote, setNewNote] = useState(""); // State for new note input
  const [filterText, setFilterText] = useState(""); // State for filter input

  // Function to add a new note
  const addNotes = () => {
    if (newNote.trim() !== "") {
      // Check if newNote is not empty
      setNotes([...notes, newNote]);
      setNewNote(""); // Clear the input field after adding
    }
  };

  // Function to delete a note by index
  const deleteItem = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Filter notes based on filterText
  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 drop-shadow-md">
        My Notes App
      </h1>

      {/* Input field for filtering notes */}
      <div className="w-full max-w-xl mb-8">
        <input
          type="text"
          placeholder="Search for a note..."
          className="w-full px-4 py-3 border-2 border-blue-400 focus:outline-none rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-300"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {/* Input field for adding a new note */}
      <div className="w-full max-w-xl mb-10 flex space-x-4">
        <input
          type="text"
          placeholder="Type a new note here..."
          className="flex-grow px-4 py-3 border-2 border-green-400 focus:outline-none rounded-lg shadow-md focus:ring-2 focus:ring-green-400 transition ease-in-out duration-300"
          value={newNote} // Set value to newNote to control the input
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          className="px-4 py-3 rounded-lg bg-green-500 text-white font-semibold shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
          onClick={addNotes}
        >
          <AiOutlineSave size={24} /> {/* Save Icon */}
        </button>
      </div>

      {/* Displaying notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full p-5 rounded-lg bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex-grow">
              <p className="text-gray-800 text-lg font-medium">{note}</p>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                className="bg-red-500 p-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                onClick={() => deleteItem(index)}
              >
                <AiOutlineDelete size={20} /> {/* Delete Icon */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
