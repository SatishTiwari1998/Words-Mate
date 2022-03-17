import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/header/Header";
import Definitions from "./components/Definitions/Definitions";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const [meanings, setmeanings] = useState([]);
  const [word, setword] = useState("");
  const [lightmode, setmode] = useState(true);

  const dictionaryAPI = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setmeanings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryAPI();
  }, [word]);

  return (
    <div
      className = "App"
      style={{
        height: "100vh",
        backgroundColor: lightmode ? "#fff" : "#282c34",
        color: lightmode ? "black" : "#fff",
        transition:"all 0.5s ease-in"
      }}
    >
      <Container
        maxWidth="md"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightmode ? "Dark Mode" : "Light Mode"}</span>
          <Switch
            {...label}
            checked={lightmode}
            onChange={() => setmode(!lightmode)}
          />
        </div>
        <Header word={word} setword={setword} lightmode={lightmode} />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            setmeanings={setmeanings}
            lightmode={lightmode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
