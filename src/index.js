import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Uploadfile } from "./components/uploadfile";


/* Import and destructure main from src/component/index.js 
and anything else you may need here */


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
        
          <Uploadfile />
     
)
