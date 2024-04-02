export default function Welcome({ next }) {

    return (
        <div className="page">
      <div className="pageContent">
        <h1>Welcome, My name is Cai! <br></br> Who is this visit for?</h1>
        <div className="buttons">
          <div onClick={()=> {next()}}className="button">
          <i className="fa-solid fa-user fa-2xl"></i>
          <h2>Myself</h2>
          </div>
          <div className="button">
          <i className="fa-solid fa-children fa-2xl"></i>
          <h2>Dependent</h2>
          </div>
          <div className="button">
          <i className="fa-solid fa-arrow-right fa-2xl"></i>
          <h2>Other</h2>
          </div>
        </div>
      </div>
    </div>
    );
}