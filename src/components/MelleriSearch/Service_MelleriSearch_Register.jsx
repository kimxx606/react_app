import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarMelleriSearchRegisterExtra = () => (
  <div className="sidebar-mellerisearch-register-extra sidebar-extra-content">
    <h3>MelleriSearch 가이드</h3>
    <ul>
      <li>데이터 등록 방법</li>
      <li>색인 생성 프로세스</li>
      <li>검색 최적화 가이드</li>
    </ul>
    <div className="mellerisearch-register-extra-info">
      <h4>데이터 등록 팁</h4>
      <p>양질의 메타데이터를 포함하여 검색 정확도를 높이세요.</p>
      <p>주기적인 데이터 업데이트를 통해 최신 정보를 유지하세요.</p>
    </div>
    <div className="mellerisearch-register-extra-links">
      <h4>추천 문서</h4>
      <div className="report-links">
        <a href="#" className="report-link">데이터 모델링 가이드</a>
        <a href="#" className="report-link">색인 최적화 방법</a>
        <a href="#" className="report-link">검색 API 활용 예제</a>
      </div>
    </div>
  </div>
);

const Service_MelleriSearch_Register = ({ serviceId = "melleri-search-register-demo", SidebarContent }) => {
  const SERVICE_NAME = "MelleriSearch 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ MelleriSearch 데이터 등록 서비스</strong><br>
MelleriSearch 데이터 등록 서비스는 기업의 다양한 데이터 소스를 쉽고 빠르게 검색 시스템에 등록하고 관리할 수 있는 인터페이스를 제공합니다. 자동화된 데이터 처리 및 색인 생성 기능을 통해 효율적인 데이터 관리가 가능합니다.</p>

<ul>
  <li>데이터 소스 연결 : 다양한 형식의 데이터 소스를 간편하게 연결</li>
  <li>자동 색인 생성 : 데이터 특성에 맞는 최적화된 색인 구조 자동 생성</li>
  <li>메타데이터 관리 : 검색 정확도 향상을 위한 메타데이터 관리</li>
</ul>

<p>정확하고 효율적인 데이터 등록은 검색 품질의 기반이 되며, MelleriSearch의 고급 알고리즘을 통해 등록된 데이터는 자동으로 최적화된 형태로 처리됩니다.</p>
 
<p><strong>▶ MelleriSearch 검색 엔진</strong><br>
MelleriSearch는 등록된 데이터를 바탕으로 자연어 기반의 강력한 검색 기능을 제공합니다.<br>
단순 키워드 매칭을 넘어 의미론적 검색(Semantic Search)과 컨텍스트 인식 검색을 지원하여 사용자의 의도를 정확히 파악하고 관련성 높은 결과를 제공합니다.<br>
다국어 지원, 실시간 색인 업데이트, 검색 결과 개인화 등 기업 환경에 최적화된 다양한 기능을 갖추고 있습니다.</p>

<h3>데이터 설명</h3>
<p>MelleriSearch에 등록 가능한 데이터 형식과 관리 옵션</p>
<table>
    <colgroup>
        <col style="width: 16%">
        <col style="width: 4%">
        <col style="width: 40%">
        <col style="width: 40%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2">데이터 유형</td>
            <td>등록 방식</td>
            <td>설명</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">지원 형식</td>
            <td>1</td>
            <td>구조화 데이터</td>
            <td>SQL, CSV, JSON 등의 구조화된 데이터</td>
        </tr>
        <tr>
            <td>2</td>
            <td>문서 데이터</td>
            <td>PDF, Word, Excel, 텍스트 문서 등</td>
        </tr>
        <tr>
            <td>3</td>
            <td>웹 콘텐츠</td>
            <td>웹사이트, 인트라넷 페이지 등</td>
        </tr>
        <tr>
            <td>4</td>
            <td>멀티미디어</td>
            <td>이미지, 오디오, 비디오 파일 및 메타데이터</td>
        </tr>
        <tr>
            <td>5</td>
            <td>API 연동</td>
            <td>외부 시스템 API를 통한 실시간 데이터 수집</td>
        </tr>
        <tr>
            <td>6</td>
            <td>메타데이터</td>
            <td>데이터 설명 및 분류 정보</td>
        </tr>
        <tr>
            <td>7</td>
            <td>스키마 설정</td>
            <td>데이터 구조 및 필드 매핑 정보</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>등록하려는 데이터 소스의 유형과 접속 정보를 입력해주세요. 연결 방법, 스키마 정보, 색인 옵션 등에 대해 질문할 수 있습니다.</li>
  <li>데이터 관리, 색인 최적화, 검색 기능 설정 등에 관한 질문을 자연어로 입력하세요. 상세한 단계별 안내를 받을 수 있습니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "데이터베이스를 MelleriSearch에 연결하는 방법을 알려줘",
    "문서 파일을 대량으로 등록하는 가장 효율적인 방법은?",
    "검색 색인 생성 시 최적화 옵션에 대해 알려줘",
    "메타데이터 스키마를 설계하는 모범 사례는?"
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

export default Service_MelleriSearch_Register; 