import { useState } from "react";
import Graficas from "./components/Graficas";
import Doc from "./components/Doc";
function App() {
  const [showDoc, setShowDoc] = useState(false);

  return (
    <>
      <button onClick={() => setShowDoc(!showDoc)}>
        {showDoc ? "Gráfica" : "Documentación"}
      </button>
      {showDoc ? <Doc /> : <Graficas />}
    </>
  );
}

export default App;
