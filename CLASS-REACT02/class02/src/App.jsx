const student = [
  { id: 1, name: "vaibhaw singh", age: 22 },
  { id: 2, name: "vinit shaini", age: 22 }
];

function App() {
  return (
    <div>
      <h2>Student List</h2>
      {
        student.map(s => (
          <p key={s.id}>
            {s.age} — {s.name}
          </p>
        ))
      }
    </div>
  );
}

export default App;
