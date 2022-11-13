import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const makePdf = async (state) => {
  const input = document.querySelector(".div_container > .div_paper");
  await html2canvas(input, { logging: true, scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
    const pageHeight = imgWidth * 1.424; // 출력할 한 페이지 세로 길이 계산 A4 기준
    const imgHeight = (canvas.height * imgWidth) / canvas.width; //전체 canvas 길이
    let heightAll = imgHeight;

    const pdf = new jsPDF("p", "mm", "a4");
    let position = 0;

    // 첫 페이지 출력
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightAll -= pageHeight;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (heightAll >= 10) {
      position = heightAll - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      heightAll -= pageHeight;
    }

    if (state === "save") {
      pdf.save("test.pdf");
    }

    if (state === "print") {
      pdf.autoPrint();
      const hideFrame = document.createElement("iframe");
      hideFrame.style.width = "0.1px";
      hideFrame.style.height = "0.1px";
      hideFrame.style.opacity = "0.01";

      hideFrame.src = pdf.output("bloburl");
      document.body.appendChild(hideFrame);
    }

    if (state === "view") {
      window.open(pdf.output("bloburl"));
    }
  });
};

export default makePdf;
