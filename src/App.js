import Row from "./Row.js";
import "./App.css";
import Banner from "./Banner";
import requests from "./request";
import Nav from "./Nav";

function App() {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("but");
      button.onclick = function () {
        document.getElementById("filas").scrollLeft += 500;
      };
    },
    false
  );
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button2 = document.getElementById("but2");
      button2.onclick = function () {
        document.getElementById("filas").scrollLeft -= 500;
      };
    },
    false
  );
  return (
    <div className="app">
      <Nav />
      <Banner />
      <div className="rows">
        <div className="row__button-left" id="but2"></div>
        <div className="row__button-right" id="but"></div>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fecthNetflixOriginals}
          isLargeRow
        />
        <Row title="Tending" fetchUrl={requests.fecthTrending} />
        <Row title="TopRated" fetchUrl={requests.fecthTopRated} />
        <Row title="Accion Movies" fetchUrl={requests.fecthActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fecthComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fecthHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fecthRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fecthDocumentaries} />
      </div>
    </div>
  );
}

export default App;
