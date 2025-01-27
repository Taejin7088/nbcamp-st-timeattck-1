import { useState } from "react";

import "./App.css";
import Table from "./components/Table.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        <Table />
      </div>
    </>
  );
}

export default App;
