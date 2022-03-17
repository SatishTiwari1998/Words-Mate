import React from "react";
import "./Header.css";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles";

const Header = ({ word, setword,lightmode }) => {



  const customTheme = createTheme({
    palette: {
      type: lightmode?"light":"dark",
      primary: {
        main: lightmode?"#e65100":"#11d6f0",
        light:'#4aedc4',
        dark:'#14a37f',
      },
    },
  });
  return (
    <div className="header">
      <span className="title">{word?"Word Mate":"Search"}</span>
      <div className="inputs">
        <ThemeProvider theme={customTheme}>
          <TextField
            style={{color:"white"}}
            className="search"
            label="Search your Word"
            variant="standard"
            color="primary"
            value={word}
            onChange={(e) => setword(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
export default Header;
