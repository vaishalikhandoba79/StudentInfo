import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

const App = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [grade, setGrade] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/students")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleAddStudent = () => {
        axios.post("http://localhost:5000/students", { name, age, grade })
            .then(res => setStudents([...students, res.data]))
            .catch(err => console.log(err));
    };

    const handleDeleteStudent = (id) => {
        axios.delete(`http://localhost:5000/students/${id}`)
            .then(() => setStudents(students.filter(student => student._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Student Management</h1>
            <div className="mb-4 flex space-x-2">
                <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <Input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <Input type="text" placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} />
                <Button onClick={handleAddStudent}>Add</Button>
            </div>
            <div className="space-y-4">
                {students.map(student => (
                    <Card key={student._id} className="p-4 flex justify-between items-center">
                        <CardContent>
                            <p className="font-semibold">{student.name}</p>
                            <p>Age: {student.age}</p>
                            <p>Grade: {student.grade}</p>
                        </CardContent>
                        <Button variant="destructive" onClick={() => handleDeleteStudent(student._id)}>Delete</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default App;
