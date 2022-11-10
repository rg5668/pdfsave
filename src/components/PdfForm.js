import React from "react";
import makePdf from "../lib/make_pdf";

const PdfForm = () => {
  const pdfView = async (e) => {
    e.preventDefault();
    await makePdf.viewWithPdf();
  };

  return (
    <div className="div_container">
      <div className="div_paper">
        <h3>작업일보</h3>
        <table>
          <tbody>
            <tr>
              <th>작성일자</th>
              <td>2022.09.25</td>

              <th>작성자</th>
              <td>홍길동</td>
            </tr>
            <tr>
              <th>현장명</th>
              <td>롯데건설 엘쿠크 서초</td>

              <th>업체명</th>
              <td>대한 금속</td>
            </tr>
            <tr>
              <th>현장 주소</th>
              <td colSpan={3}>서울 영동포구 여의대로 24 DH빌딩 309호</td>
            </tr>
            <tr>
              <th>금일 작업내용</th>
              <td colSpan={3}>testtesttesttesttesttesttest</td>
            </tr>
            <tr>
              <th>명일 작업내용</th>
              <td colSpan={3}>testtesttesttesttesttesttest</td>
            </tr>

            <tr>
              <th rowSpan={2}>인력 현황</th>
              <th>관리자</th>
              <th colSpan={2}>사용자</th>
            </tr>

            <tr>
              <td>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </td>
              <td colSpan={2}>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </td>
            </tr>

            <tr>
              <th>특이사항</th>
              <td colSpan={3}>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={pdfView}>pdf로 보기</button>
    </div>
  );
};

export default PdfForm;
