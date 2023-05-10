import {useState} from "react"
import {Note} from "./Models/note.model"
import Header from "./Components/Header";
import NotesList from "./Components/NotesList";
import CreateNotes from "./Components/CreateNotes";
import { Routes, Route } from "react-router-dom";

function App()
{
  const[notes,setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meeting",
    text: "Information is an abstract concept that refers to that which has the power to inform. At the most fundamental level, information pertains to the interpretation (perhaps formally) of that which may be sensed, or their abstractions.",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return(
    <><Header></Header>
    <Routes>
      <Route path="/" element={<NotesList notes={notes} setNotes={setNotes} />}></Route>
      <Route path="/create" element={<CreateNotes notes={notes} setNotes={setNotes} />}></Route>
    </Routes>
    </>
  );

}

export default App;
