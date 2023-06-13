import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchGPT } from "./uploadSlice";

import React, { useState } from 'react';

const Uploadfile = () => {
const [selectedFile, setSelectedFile] = useState(null);

const dispatch = useDispatch();

const onFileChange = (event) => {
event.preventDefault();
setSelectedFile(event.target.files[0]);
};

const onFileUpload = (event) => {
event.preventDefault();
const formData = new FormData();
formData.append(
"file",
selectedFile,
selectedFile.name
);
console.log(selectedFile);
dispatch(fetchGPT(formData));
};

const fileData = () => {
if (selectedFile) {
return (
<div>
<h2>File Details:</h2>
<p>File Name: {selectedFile.name}</p>
<p>File Type: {selectedFile.type}</p>
<p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
</div>
);
} else {
return (
<div>
<br />
<h4>Choose before Pressing the Upload button (if a print box opens, please close - its a known bug)</h4>
</div>
);
}
};

return (
<div>
<div>
<input type="file" onChange={onFileChange} />
<button className="btn" onClick={onFileUpload}>
Upload!
</button>
</div>
{fileData()}
</div>
);
};

export default Uploadfile;