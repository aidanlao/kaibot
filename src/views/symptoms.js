import { useState } from "react";
import OpenAI from "openai";
export default function Symptoms() {
    const key = process.env.REACT_APP_API_KEY;
    const openai = new OpenAI({
        apiKey: key,
        dangerouslyAllowBrowser: true,
    });
    console.log(process.env.REACT_APP_API_KEY);
    async function main() {
        const prompt = "Given the following symptoms, can you come up with potential diagnosis and a summary of each? \n"
        
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt + symptoms }],
            model: "gpt-3.5-turbo",
          });
        
          console.log(completion.choices[0]);
          setResult(completion.choices[0].message.content);
    }
    const [result, setResult] = useState();
    const [symptoms, setSymptoms] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        main();
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
           {result && (
            <>
                <p>{result}</p>
            </>
           )}
      </>  
    );
}