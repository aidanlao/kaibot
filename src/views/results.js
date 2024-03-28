export default function Result({ diag, next}) {
    const addLineBreak = (str) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });
    return (
        <>
        <div className="resultsWrapper">
        <div className="results">
                <h1>Here is the potential diagnosis:</h1>
                <p>{addLineBreak(diag)}</p>
                <h2>Please note that this is not an official diagnosis and can be wrong. Consult your doctor.</h2>
                <button className="next" onClick={()=> {next()}}>Next</button>
            </div>
        </div>
            
        </>
    )
}