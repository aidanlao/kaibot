import { useState } from "react";

export default function Symptoms() {
    const [symptoms, setSymptoms] = useState();
    function handleSubmit() {
        
    }
    return (
      <>
        <div className="symptoms">
            <h1>Describe your symptoms:</h1>
            <form onSubmit={(e)=> {handleSubmit(e)}}>
            <textarea value={symptoms} onChange={(e)=> {setSymptoms(e.target.value);}}></textarea>
            <input type="submit" className="submit" value="Submit"></input>
            </form>
           </div>  
      </>  
    );
}