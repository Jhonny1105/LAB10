import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (name, course) => {
    if (name && course) {
      const newStudent = { id: students.length + 1, name, course };
      setStudents([...students, newStudent]);
    }
  };

  return (
    <div className="App">
      <img src={require("./assets/logo-ptc.png")} alt="logo-ptc" className="logo-ptc" />

      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
