import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      if (res.ok && res.status === 200) {
        return res.json();
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, []);

  return <h1>Fetch-asenkron programlama</h1>;
}

export default App;
