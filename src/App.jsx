import { useState } from "react";
import Notes from "./components/Notes";
function Description() {
  return <h1>Welcome to React World!</h1>;
}
function App() {
  const [countInParent, setCountInParent] = useState(0);

  function UpdateCountInParent(count) {
    setCountInParent(count);
  }
  return (
    <>
      <Notes />
    </>
  );
}

export default App;
