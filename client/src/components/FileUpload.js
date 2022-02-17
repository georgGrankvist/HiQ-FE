import React, { Fragment,useState } from 'react'
import axios from 'axios'

export const FileUpload = () => { 
const [file,setFile] = useState('');
const [filename,setFileName] = useState ('Choose File')

const onChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
}

const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('textFile', file);
  
    try {
        const res = await axios.post('http://localhost:8080/api/text/process', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    console.log(res.data.transformedText)

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
        </form>
    </Fragment>
  )
}
