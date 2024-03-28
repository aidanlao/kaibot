import { useState } from "react";

export default function Symptoms() {
    const [symptoms, setSymptoms] = useState();
    return (
      <>
        <div className="symptoms">
            <h1>Describe your symptoms:</h1>
            <textarea value={symptoms} onChange={(e)=> {setSymptoms(e.target.value);}}></textarea>
        </div>  
      </>  
    );
}