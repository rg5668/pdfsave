import { _fonts } from "../lib/font";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const testPdf = (state) => {
  const doc = new jsPDF("p", "mm", "a4");
  const font = _fonts;

  doc.addFileToVFS("malgun.ttf", font);
  doc.addFont("malgun.ttf", "malgun", "normal");
  doc.setFont("malgun");

  const id = document.getElementById("sampleTable");
  doc.text("작업 일지", 93, 8);

  doc.autoTable({
    html: id,
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
  });
  if (state === "save") {
    doc.save("test.pdf");
  }

  if (state === "print") {
    doc.autoPrint();
    const hideFrame = document.createElement("iframe");
    hideFrame.style.width = "0.1px";
    hideFrame.style.height = "0.1px";
    hideFrame.style.opacity = "0.01";

    hideFrame.src = doc.output("bloburl");
    document.body.appendChild(hideFrame);
  }

  if (state === "view") {
    window.open(doc.output("bloburl"));
  }
};

export default testPdf;
