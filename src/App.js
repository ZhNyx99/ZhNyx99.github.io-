import { SearchBar, Modal } from "antd-mobile";
import { useEffect, useState } from "react";

import { item } from "./util";

import "./index.css";

function App() {
  const [value, setValue] = useState("");

  const showModal = () => {
    Modal.show({
      content: "¡Ingresa MGS, hay una sorpresa!",
      showCloseButton: true,
    });
  };

  useEffect(() => {
    showModal();
    console.log("first");
  }, []);

  const clickItem = () => {
    showModal();
  };

  const search = () => {
    if (value === "MGS") {
      window.open("https://www.magistv.top/GOPY.html");
    } else {
      showModal();
    }
  };

  return (
    <div className="App">
      <SearchBar
        value={value}
        placeholder="¡Ingresa MGS, hay una sorpresa!"
        clearable
        onChange={(e) => setValue(e)}
        onSearch={search}
      />

      <div className="item">
        {item.map((item, index) => {
          return (
            <div key={index} className="item_util" onClick={clickItem}>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
