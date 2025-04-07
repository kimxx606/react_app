import React from 'react';
import useB2BQuery from '../../hooks/useB2BQuery';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarB2BQueryExtra = () => (
  <div className="sidebar-b2b-query-extra sidebar-extra-content">
    <h3>Intellytics 분석 가이드</h3>
    <ul>
      <li>NPS 점수 해석법</li>
      <li>VOC 클러스터링 예시</li>
      <li>분석 리포트 다운로드</li>
    </ul>
    <div className="b2b-query-extra-info">
      <h4>NPS 점수 분석</h4>
      <p>Net Promoter Score는 고객 충성도를 측정하는 지표입니다.</p>
      <p>Promoters(9-10), Passives(7-8), Detractors(0-6)로 분류합니다.</p>
    </div>
    <div className="b2b-query-extra-links">
      <h4>추천 분석 리포트</h4>
      <div className="report-links">
        <a href="#" className="report-link">월간 NPS 트렌드</a>
        <a href="#" className="report-link">고객 피드백 요약</a>
        <a href="#" className="report-link">VOC 분석 대시보드</a>
      </div>
    </div>
  </div>
);

const Service_B2B_Query = ({ serviceId, SidebarContent }) => {
  const SERVICE_NAME = "B2B Query - SQL Database 질의 응답 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ B2B 3대 전환 지수</strong><br>
3대 전환 지수란 고객 상태에 따라 Contact(초기 접점 고객), Lead(잠재 고객), Opportunity(기회 고객)로 분류하고, Domain-Specific Model을 활용하여 고객이 다음 단계로 전환될 가능성을 측정하는 지표를 의미합니다.</p>

<ul>
  <li>리드 전환 지수 : Contact가 Lead로 전환될 가능성</li>
  <li>기회 전환 지수 : Lead가 Opportunity로 전환될 가능성</li>
  <li>수주 전환 지수 : Opportunity가 수주를 성공할 가능성</li>
</ul>

<p>특히 기회 전환 지수(잠재 고객)는 매출 성장의 핵심 요소로 평가되며, NewBRM 수주 관리 시스템을 통해 자사 마케팅 팀과 영업 사원에게 XAI 데이터를 함께 텍스트 형태로 제공하고 있습니다.</p>
 
<p><strong>▶ B2B Query 서비스</strong><br>
B2B Query는 B2B 기회 전환 지수 DB에 대한 질문에 응답하는 NL2SQL 기반의 서비스입니다.<br>
기회 전환 지수는 단순한 텍스트 형식의 결과값만 제공되기 때문에, 다른 데이터와 비교하거나 다양한 관점에서 분석하려는 수요가 증가하고 있습니다. 따라서 사용자는 DB에 대한 지식이 없더라도 자연어 질문을 통해 단순한 정보 탐색뿐만 아니라, 기회 전환 지수의 통계 데이터를 함께 확인할 수 있습니다.<br>
B2B Query는 DB 탐색 특화 모델로써, 3대 전환 지수뿐 아니라 정제 된 형식의 어떠한 DB를 삽입하더라도 질문에 대한 응답이 가능합니다.</p>

<h3>데이터 설명</h3>
<p>New BRM에 2021-03-11 부터 2024-05-26 까지 등록된 리드 정보(개인 정보 제외, 익명화)</p>
<table>
    <colgroup>
        <col style="width: 16%">
        <col style="width: 4%">
        <col style="width: 40%">
        <col style="width: 40%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2">데이터 테이블</td>
            <td>데이터 Column</td>
            <td>설명</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">데이터 컬럼</td>
            <td>1</td>
            <td>Created Date</td>
            <td>리드 생성일</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Lead Channel Type</td>
            <td>리드 수집 경로</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Vertical</td>
            <td>수직 시장</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Account</td>
            <td>고객사 이름</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Lead Stage</td>
            <td>리드 상태</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Opportunity Score</td>
            <td>기회전환지수</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Reason 1~5</td>
            <td>기회전환지수 XAI</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>리드 DB로 부터 탐색하고 싶은 리드의 특징을 명시하고, 원하는 정보를 질문해주세요. 이전의 질의 결과에 대한 후속 질문도 가능합니다.</li>
  <li>리드의 생성 날짜, 수집 경로, Vertical, 대상 기업명, Stage, 기회전환지수 및 지수 원인에 대해 응답 할 수 있습니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "기회전환지수가 가장 높은 리드 3개 알려줘",
    "2024년 3월에 생성된 리드 중 가장 기회전환지수가 가장 높은 리드의 상세 정보 알려줘",
    "리드가 수집된 경로에 따른 기회전환지수 평균을 알려줘"
  ];

  const {
    messages,
    isLoading,
    chatContainerRef,
    bottomRef,
    sendMessage,
    handleSampleQuestion
  } = useB2BQuery(serviceId);

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
              metadata={message.metadata}
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

export default Service_B2B_Query; 