import React from "react";

import Rightform from "./components/Right";
import BasicExample from "./components/Footer";
import FieldTemplateSearch from "./components/Ui";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleFormData = (data) => {
    setFormData(data);
  };

  return (
    <>
      <div style={{ display: "flex", height: "490px", marginTop: "5%" }}>
        <div style={{ position: "fixed", width: "50%" }}>
          <FieldTemplateSearch />
        </div>
        <div style={{ marginLeft: "50%", width: "100%", overflow: "scroll" }}>
          <Rightform onFormDataChange={handleFormData} />
        </div>
      </div>
      <BasicExample formData={formData} />
    </>
  );
}

export default App;
