import { useState } from "react";
import data from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import "./index.css";
import "./shows/shows.css";

export default function App() {
  const [shows] = useState(data);
  const [selectedShow, setSelectedShow] = useState(shows[2]);

  return (
    <>
      <header>
        <h1>React TV</h1>
      </header>

      <main>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}