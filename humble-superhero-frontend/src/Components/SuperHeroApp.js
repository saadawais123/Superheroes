import React, { useState, useEffect } from "react";
import axios from "axios";
import SuperheroForm from "./SuperheroForm";
import SuperheroList from "./SuperheroList";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function SuperheroApp() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/superheroes`);
      setSuperheroes(response.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Humble Superheroes</h1>
      <SuperheroForm fetchSuperheroes={fetchSuperheroes} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}
