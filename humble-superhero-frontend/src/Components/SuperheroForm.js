import React, { useState } from "react";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function SuperheroForm({ fetchSuperheroes }) {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humility, setHumility] = useState(1);

  const addSuperhero = async () => {
    if (humility < 1 || humility > 10) {
      alert("Humility score must be between 1 and 10");
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}/superheroes`, {
        name,
        superpower,
        humility,
      });
    } catch (err) {
      console.log("error::", err);
    }
    fetchSuperheroes();
    setName("");
    setSuperpower("");
    setHumility(1);
  };

  return (
    <div>
      <form onSubmit={addSuperhero}>
        <input
          required
          className="border p-2 w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          className="border p-2 w-full"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
        <input
          required
          className="border p-2 w-full"
          type="number"
          placeholder="Humility (1-10)"
          value={humility}
          onChange={(e) => setHumility(Number(e.target.value))}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Add Superhero
        </button>
      </form>
    </div>
  );
}
