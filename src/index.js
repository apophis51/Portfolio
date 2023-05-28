import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Uploadfile } from "./components/uploadfile";
import{ VoiceTranscription } from "./components/";

import store from "./store";
import { Provider } from "react-redux"



/* Import and destructure main from src/component/index.js 
and anything else you may need here */


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <div id="main " className="bg-green-950 text-white px-30 text-xl px-80">

    <div className=" ">
      <div id="">
        <h1 className="text-4xl">MalcMind</h1>
         </div>
         </div>
         <Provider store={store}>
          <VoiceTranscription />
          </Provider>
     </div>
)
