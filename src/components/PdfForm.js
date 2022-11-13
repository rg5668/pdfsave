import React from "react";
import makePdf from "../lib/make_pdf";

const PdfForm = () => {
  const pdfSave = async (state) => {
    await makePdf(state);
  };

  return (
    <div className="div_container">
      <div className="btn_container">
        <button onClick={() => pdfSave("save")}>pdf 저장</button>
        <button onClick={() => pdfSave("print")}>pdf 프린트</button>
        <button onClick={() => pdfSave("view")}>pdf 보기</button>
      </div>
      <div className="div_paper">
        <h1>작업일보</h1>
        <table>
          <tbody>
            <tr>
              <th>작성일자</th>
              <td colSpan={3}>2022.09.25</td>

              <th>작성자</th>
              <td colSpan={2}>홍길동</td>
            </tr>
            <tr>
              <th>현장명</th>
              <td colSpan={3}>롯데건설 엘쿠크 서초</td>

              <th>업체명</th>
              <td colSpan={2}>대한 금속</td>
            </tr>
            <tr>
              <th>현장 주소</th>
              <td colSpan={6}>서울 영동포구 여의대로 24 DH빌딩 309호</td>
            </tr>
            <tr>
              <th>금일 작업내용</th>
              <td colSpan={6}>
                금속류 구조체를 사용하여 도로, 교량, 터널 및 기타의 장소에 안전,
                경계, 방호 시설물을 설치하거나 각종 구조물 및 공작물을
                축조하거나 설치합니다. 창호공사, 벽체 및 칸막이 공사, 가드 레일,
                표지판, 방호울타리, 휀스, 방음벽, 버스승강대 및 도로교통안전
                시설물 등을 공사합니다.
              </td>
            </tr>
            <tr>
              <th>명일 작업내용</th>
              <td colSpan={6}>
                금속류 구조체를 사용하여 도로, 교량, 터널 및 기타의 장소에 안전,
                경계, 방호 시설물을 설치하거나 각종 구조물 및 공작물을
                축조하거나 설치합니다. 창호공사, 벽체 및 칸막이 공사, 가드 레일,
                표지판, 방호울타리, 휀스, 방음벽, 버스승강대 및 도로교통안전
                시설물 등을 공사합니다.
              </td>
            </tr>

            <tr>
              <th rowSpan={2}>인력 현황</th>
              <th colSpan={3}>관리자</th>
              <th colSpan={3}>사용자</th>
            </tr>

            <tr>
              <td colSpan={3}>
                홍길동 소장 남 대한금속
                <br /> 정우성 과장 남 대한금속
                <br /> 김희선 사원 여 대한금속
              </td>
              <td colSpan={3}>
                장현석 남 대한금속
                <br /> 이정재 남 대한금속
                <br /> 박재민 남 대한금속
              </td>
            </tr>

            <tr>
              <th>특이사항</th>
              <td colSpan={6}>
                금속류 구조체를 사용하여 도로, 교량, 터널 및 기타의 장소에 설치
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PdfForm;
