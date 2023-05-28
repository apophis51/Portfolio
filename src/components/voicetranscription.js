import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGPT } from "./uploadSlice";


import  UploadFile  from "../components/uploadfile"


// the route is localhost:3000/voicetransctipiton

const VoiceTranscription = () => {
  const dispatch = useDispatch();

  const gptText = useSelector((state) => state.uploadSlice.gptText.data);
  const [transcription, setTranscription] = useState("Your file will appear here a few seconds after you upload it.");


  useEffect(() => {
    setTranscription(gptText);
   }, [gptText]);


  return (
    
    <div className='campus-container flex bg-green-950'>
      <div>
      <h1 className=""> AI VoiceTranscription - by MalcMind</h1>
      <div className="imagebox">
      <img className = "image"src={"https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-2-e1615383933700.png"} />
      </div>
      <br></br>
      <br></br>
      <p>VoiceTransctription by MalcMind: allows you to extract text from audio formats mp3 , mp4 , mpeg , mpga , m4a , wav , and webm
audio formats. Upload your audio file and click convert to recieve text output. </p>
<br></br>
<br></br>
      {/* <SearchBar /> */}
      <UploadFile />
      <br></br>
      <br></br>
              {/* delete */}
              <p className='flex gap-10 justify-between btn'>Download Output File</p>
              

<div className={"textarea-box text-black"}>
      <textarea
      className={"textarea-input"}
      placeholder={"Enter your note here..."}
      value= {transcription}
    //   onChange={(e) => setText(e.target.value)}
      
      />
 
    </div>
              
              

      
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>




    </div>

  );
};

export default VoiceTranscription;
