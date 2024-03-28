
import './App.css';

function App() {
  return (
    <div className="homepage">
      <div className="homepageContent">
        <h1>Welcome, My name is Kai! <br></br> Who is this visit for?</h1>
        <div className="buttons">
          <div className="button">
          <i class="fa-solid fa-user fa-2xl"></i>
          <h2>Myself</h2>
          </div>
          <div className="button">
          <i class="fa-solid fa-children fa-2xl"></i>
          <h2>Dependent</h2>
          </div>
          <div className="button">
          <i class="fa-solid fa-arrow-right fa-2xl"></i>
          <h2>Other</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
