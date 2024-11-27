import { useState } from "react";
import Graphics from "./components/Graphics";
import Doc from "./components/Doc";
function App() {
  const [showDoc, setShowDoc] = useState(false);

  return (
    <>
      <button onClick={() => setShowDoc(!showDoc)}>
        {showDoc ? "Gráfica" : "Documentación"}
      </button>
      {showDoc ? <Doc /> : <Graphics />}
    </>
  );
}

export default App;
