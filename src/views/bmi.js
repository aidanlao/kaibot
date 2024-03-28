import { useState } from "react";
import useSound from "use-sound";
import successmp3 from "../success.mp3";
export default function BMI({ next }) {
    const [success] = useSound(successmp3);
    const [data, setData] = useState({});
    const [bmi, setBmi] = useState();
    function calculate(lbs, inches) {
        const BMI = Math.round(((703*(lbs))/(Math.pow(inches,2)))*10) / 10;
        return BMI;
    }
    function handleChange(e) {
        setData(values => ({ ...values, [e.target.name]: e.target.value}));
    }
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        let formObject = Object.fromEntries(data.entries());

        const weight = formObject.weight;
        const height = formObject.height;
        const BMI = calculate(weight, height);

        success();
        setBmi(BMI);
    }
    return (
        <>
            <div className="bmi">
                
                <h1>Let's calculate your BMI!</h1>
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <p>Weight (in lbs)</p>
                    <input type="text" name="weight" value={data.weight} onChange={(e) => {handleChange(e)}}/>
                    <p>Height (in inches)</p>
                    <input type="text" name="height" value={data.height} onChange={(e) => {handleChange(e)}}/>
                    <input className="submit" type="submit" value="Submit" />
                </form>
                { bmi && (
                <div className="results">
                    <h1>Your BMI is: {bmi}!</h1>
                    <button className="next" onClick={() => {next()}}>Next</button>
                </div>

            )}
            </div>

          
        </>
    )
}