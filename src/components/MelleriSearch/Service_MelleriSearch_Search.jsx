import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarMelleriSearchSearchExtra = () => (
  <div className="sidebar-mellerisearch-search-extra sidebar-extra-content">
    <h3>MelleriSearch 검색 가이드</h3>
    <ul>
      <li>고급 검색 문법</li>
      <li>검색 필터 활용법</li>
      <li>검색 결과 해석</li>
    </ul>
    <div className="mellerisearch-search-extra-info">
      <h4>검색 효율화 팁</h4>
      <p>정확한 키워드와 연산자를 활용하여 검색 결과의 정확도를 높이세요.</p>
      <p>검색 필터를 적절히 조합하여 원하는 결과를 빠르게 찾을 수 있습니다.</p>
    </div>
    <div className="mellerisearch-search-extra-links">
      <h4>추천 자료</h4>
      <div className="report-links">
        <a href="#" className="report-link">고급 검색 가이드</a>
        <a href="#" className="report-link">검색 문법 치트시트</a>
        <a href="#" className="report-link">검색 결과 분석 방법</a>
      </div>
    </div>
  </div>
);

const Service_MelleriSearch_Search = ({ serviceId = "melleri-search-demo", SidebarContent }) => {
  const SERVICE_NAME = "MelleriSearch 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ MelleriSearch 검색 서비스</strong><br>
MelleriSearch 검색 서비스는 기업의 다양한 데이터 소스에서 사용자가 필요로 하는 정보를 빠르고 정확하게 찾을 수 있는 지능형 검색 인터페이스를 제공합니다. 자연어 기반의 고급 검색 기능을 통해 복잡한 질의도 쉽게 처리할 수 있습니다.</p>

<ul>
  <li>자연어 검색 : 일상 언어로 복잡한 검색 수행</li>
  <li>고급 필터링 : 다양한 속성과 조건으로 결과 정제</li>
  <li>의미 기반 검색 : 키워드가 아닌 의도와 맥락 기반의 검색</li>
</ul>

<p>MelleriSearch는 단순 키워드 매칭을 넘어 사용자의 의도를 파악하고 문맥을 이해하여 가장 관련성 높은 결과를 제공합니다.</p>
 
<p><strong>▶ 인공지능 기반 검색 엔진</strong><br>
MelleriSearch는 최신 인공지능 기술을 활용하여 데이터의 의미와 관계를 이해합니다.<br>
의미론적 검색(Semantic Search)과 컨텍스트 인식을 통해 정확한 정보를 찾아내며, 사용자의 이전 검색 패턴과 선호도를 학습하여 개인화된 결과를 제공합니다.<br>
다국어 지원, 실시간 제안, 자동 완성, 오타 교정 등 검색 경험을 향상시키는 다양한 기능을 갖추고 있습니다.</p>

<h3>검색 기능 설명</h3>
<p>MelleriSearch가 제공하는 주요 검색 기능과 옵션</p>
<table>
    <colgroup>
        <col style="width: 16%">
        <col style="width: 4%">
        <col style="width: 40%">
        <col style="width: 40%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2">기능 유형</td>
            <td>검색 방식</td>
            <td>설명</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">검색 기능</td>
            <td>1</td>
            <td>자연어 검색</td>
            <td>일상적인 언어로 질문하여 검색</td>
        </tr>
        <tr>
            <td>2</td>
            <td>필터 검색</td>
            <td>다양한 속성으로 결과 필터링</td>
        </tr>
        <tr>
            <td>3</td>
            <td>의미 기반 검색</td>
            <td>유사 개념과 관련 주제까지 확장 검색</td>
        </tr>
        <tr>
            <td>4</td>
            <td>패싯 네비게이션</td>
            <td>검색 결과를 다양한 기준으로 분류</td>
        </tr>
        <tr>
            <td>5</td>
            <td>고급 연산자</td>
            <td>AND, OR, NOT 등의 논리 연산자 지원</td>
        </tr>
        <tr>
            <td>6</td>
            <td>유사도 검색</td>
            <td>비슷한 내용과 관련 문서 찾기</td>
        </tr>
        <tr>
            <td>7</td>
            <td>개인화 검색</td>
            <td>사용자 선호도와 이전 검색 기반 결과 제공</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>검색하려는 내용을 자연어로 입력하세요. 복잡한 질문이나 여러 조건을 포함한 검색도 가능합니다.</li>
  <li>검색 결과를 필터링하거나 정렬하는 방법, 고급 검색 기능 활용법 등에 대해 질문할 수 있습니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "브랜드 마케팅 전략에 관한 최신 문서를 검색해줘",
    "최근 6개월 내 작성된 재무 보고서 중 수익성 분석이 포함된 문서는?",
    "제품 개발 프로세스를 다룬 PDF 파일만 검색하려면 어떻게 해야 하나요?",
    "여러 문서에서 공통적으로 언급된 주요 이슈를 찾는 방법은?"
  ];

  const {
    messages,
    isLoading,
    chatContainerRef,
    bottomRef,
    sendMessage,
    handleSampleQuestion
  } = useChat(serviceId);

  return (
    <div className="service-container">
      {/* 상단 제목 */}
      <div className="service-header">
        <h2 className="main-title">{SERVICE_NAME}</h2>
        <div 
          className="service-description" 
          dangerouslySetInnerHTML={{ __html: SERVICE_DESCRIPTION.ko }}
        />
      </div>

      <div className="chat-main-area">
        {/* 💬 채팅 메시지 영역 */}
        <div className="chat-container" ref={chatContainerRef}>
          {(
            <SampleQuestions
              questions={SAMPLE_QUESTIONS}
              onSelectQuestion={handleSampleQuestion}
              isLoading={isLoading}
            />
          )}

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
              isError={message.isError}
            />
          ))}

          {isLoading && (
            <div className="loading-message">
              <Spinner />
            </div>
          )}

          {/* 자동 스크롤 포인트 */}
          <div ref={bottomRef} />
        </div>

        {/* 🔧 각 페이지 전용 사이드바 내용 (선택적 렌더링) */}
        {SidebarContent && (
          <div className="chat-sidebar-extra">
            {SidebarContent}
          </div>
        )}
      </div>

      {/* 🧾 입력창: 항상 하단 고정 */}
      <div className="chat-input-container">
        <ChatInput
          onSendMessage={sendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Service_MelleriSearch_Search; 