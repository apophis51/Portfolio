
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';


import React,{Component} from 'react';
import { fetchGPT } from "./uploadSlice"
  
export class Uploadfile extends Component {
   
    state = {
  
      // Initially, no file is selected
      selectedFile: null
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
      event.preventDefault();
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
     
    };
     
    // On file upload (click the upload button)
    // onFileUpload = () => {
      onFileUpload = (event) => {
      event.preventDefault();
     
      // Create an object of formData
      const formData = new FormData();
     
      // Update the formData object
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
     
      // Details of the uploaded file
      console.log(this.state.selectedFile);
     
      // Request made to the backend api
      // Send formData object
      //  axios.post("/upload", formData);
      this.props.fetchGPT(formData);
    };
     
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile) {
          
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
  
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
     
    render() {
     
      return (
        <div>
           
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button className="btn" onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
  
//  export default Uploadfile;
  const mapDispatchToProps = {
    fetchGPT
  };

  export default connect(null, mapDispatchToProps)(Uploadfile);