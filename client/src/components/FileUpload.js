import React, { Fragment,useState } from 'react'
import axios from 'axios'

export const FileUpload = () => { 
const [file,setFile] = useState('');
const [filename,setFileName] = useState ('Choose File');
const [transformedText, setTransformedText] = useState ("");


const onChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
}

const styles = {
    paddingTop: '30px'
}

const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('textFile', file);
  
    if (file != null) 
    try {
        const res = await axios.post('http://localhost:8080/api/text/process', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

  
    console.log(res.data.transformedText)

    setTransformedText(res.data.transformedText)

    } catch (err) {
        console.log(err);
    }
}

  return (
    <Fragment>
        <form onSubmit = {onSubmit}>
          <div className="custom-file mb-4">
           <input type="file" className="custom-file-input" id="customFile" onChange = {onChange}/>
            <label className="custom-file-label" htmlFor="customFile">
            {filename}
            </label>
         </div>
            
          <input 
          type ="submit" 
          value="Upload" 
          className='"btn btn-primary btn-block mt4' />

    <div className="form-group" style={styles}>
    <label htmlFor="exampleFormControlTextarea1">{"Transformed text"}</label>
    <textarea className="form-control" id="exampleFormControlTextarea" rows="10" defaultValue = {transformedText}></textarea>
    </div>
    </form>
    
    </Fragment>
  )
}
