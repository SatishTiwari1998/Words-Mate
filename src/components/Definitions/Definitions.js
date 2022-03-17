import React from "react";
import "./Definitions.css"

const Definitions = ({word,meanings,lightmode})=>{
return(
    <div className="meanings">
 
      {word === "" ? (
        <span className="subTitle">Search to get results...</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b style={{color: lightmode?'green':'#11d6f0'}}>Example :</b> {def.example}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>

);
}

export default Definitions;