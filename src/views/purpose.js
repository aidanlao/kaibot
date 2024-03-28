export default function Purpose({next}) {
    return (
        <>
         <div className="page">
      <div className="pageContent">
        <h1>What is the purpose of this visit?</h1>
        <div className="buttons">
          <div onClick={()=> {next()}}className="button">
          <i className="fa-solid fa-microscope fa-2xl"></i>
          <h2>Diagnosis / Procedure</h2>
          </div>
          <div className="button">
          <i className="fa-solid fa-notes-medical fa-2xl"></i>
          <h2>Basic Medical Check-up</h2>
          </div>
          <div className="button">
          <i className="fa-solid fa-pills fa-2xl"></i>
          <h2>Prescription</h2>
          </div>
          <div className="button">
          <i className="fa-solid fa-question fa-2xl"></i>
          <h2>Have questions?</h2>
          </div>
        </div>
      </div>
    </div>
        </>

    );
}