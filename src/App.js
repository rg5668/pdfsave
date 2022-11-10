import "./App.css";
import PdfForm from "./components/PdfForm";
import makePdf from "./lib/make_pdf";

function App() {
  // const onClick = async (e) => {
  //   e.preventDefault();
  //   await makePdf.viewWithPdf();
  // };
  return (
    <div className="App">
      <PdfForm />
      {/* <div className="div_container">
        <div className="div_paper">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            officiis at iure sapiente maxime provident possimus dolorum eveniet
            illo nisi ullam, animi sunt nobis, error consequatur quos facere.
            Perspiciatis, harum.
          </div>
        </div>
        <button onClick={onClick}>pdf로 보기</button>
      </div> */}
    </div>
  );
}

export default App;
