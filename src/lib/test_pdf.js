import { _fonts } from "./font";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const testPdf = (state, target, isPrintState, printTarget) => {
  const doc = new jsPDF("p", "mm", "a4");
  const font = _fonts;
  const hideFrame = document.createElement("iframe");

  doc.addFileToVFS("malgun.ttf", font);
  doc.addFont("malgun.ttf", "malgun", "normal");
  doc.setFont("malgun");
  doc.text("작업 일지", 93, 8);

  doc.autoTable({
    html: target,
    styles: {
      font: "malgun",
      halign: "center",
      fontSize: 11,
      cellWidth: "auto",
      valign: "middle",
      lineWidth: 0.25,
      lineColor: 5,
      minCellWidth: 30,
      minCellHeight: 15,
    },
    theme: "plain",
  });

  if (state === "print" && isPrintState) {
    doc.autoPrint();
    console.log(isPrintState);
    hideFrame.src = doc.output("bloburl");
    printTarget.appendChild(hideFrame);
  }

  if (state === "save") {
    doc.save("test.pdf");
  }

  if (state === "view") {
    window.open(doc.output("bloburl"));
  }

  if ((state === "save" || state === "view") && !isPrintState) {
    printTarget.removeChild(hideFrame);
  }
};

export default testPdf;
