import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const makePdf = async (state) => {
  const input = document.querySelector(".div_container > .div_paper");
  await html2canvas(input, { logging: true, scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
    const pageHeight = imgWidth * 1.4; // 출력 페이지 세로 길이 계산 A4 기준
    const imgHeight = (canvas.height * imgWidth) / canvas.width; //전체 canvas 길이
    let heightLeft = imgHeight;

    const doc = new jsPDF("p", "mm");
    let position = 0;

    // 첫 페이지 출력
    doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (heightLeft >= 10) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    if (state === "save") {
      doc.save("test.pdf");
    }

    if (state === "print") {
      doc.autoPrint();

      const hiddFrame = document.createElement("iframe");
      hiddFrame.style.width = "0.1px";
      hiddFrame.style.height = "0.1px";
      hiddFrame.style.opacity = "0.01";

      hiddFrame.src = doc.output("bloburl");
      document.body.appendChild(hiddFrame);
    }

    if (state === "view") {
      window.open(doc.output("bloburl"));
    }
  });
};

export default makePdf;
