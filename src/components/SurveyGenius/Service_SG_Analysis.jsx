import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarSGAnalysisExtra = () => (
  <div className="sidebar-sg-analysis-extra sidebar-extra-content">
    <h3>설문 분석 가이드</h3>
    <ul>
      <li>설문 데이터 해석법</li>
      <li>응답 패턴 분석 예시</li>
      <li>분석 리포트 다운로드</li>
    </ul>
    <div className="sg-analysis-extra-info">
      <h4>데이터 시각화 활용법</h4>
      <p>설문 응답 데이터를 다양한 차트와 그래프로 시각화할 수 있습니다.</p>
      <p>응답자 세그먼트별 결과 비교 및 추세 분석이 가능합니다.</p>
    </div>
    <div className="sg-analysis-extra-links">
      <h4>추천 분석 리포트</h4>
      <div className="report-links">
        <a href="#" className="report-link">응답자 인구통계 분석</a>
        <a href="#" className="report-link">설문 응답 요약 보고서</a>
        <a href="#" className="report-link">텍스트 응답 감성 분석</a>
      </div>
    </div>
  </div>
);

const Service_SG_Analysis = ({ serviceId = "sg-analysis", SidebarContent }) => {
  const SERVICE_NAME = "Survey Genius - 설문 결과 분석 서비스";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ 설문 결과 분석 서비스</strong><br>
Survey Genius 분석 서비스는 수집된 설문 데이터를 심층적으로 분석하여 의미 있는 인사이트를 도출하는 AI 기반 서비스입니다. 정량적 데이터와 정성적 데이터를 모두 처리하여 다각적인 분석 결과를 제공합니다.</p>

<ul>
  <li>응답 패턴 분석 : 설문 응답의 패턴과 상관관계 분석</li>
  <li>세그먼트 분석 : 응답자 특성별 결과 비교 및 차이점 도출</li>
  <li>텍스트 마이닝 : 주관식 응답에 대한 자연어 처리 및 감성 분석</li>
</ul>

<p>다양한 시각화 도구와 통계 기법을 활용하여 복잡한 데이터 속에서 핵심 인사이트를 발견하고, 이를 바탕으로 실행 가능한 제안을 제시합니다.</p>
 
<p><strong>▶ 고급 분석 기능</strong><br>
단순한 빈도 분석을 넘어 머신러닝 알고리즘을 활용한 고급 분석 기능을 제공합니다.<br>
응답자의 만족도나 충성도에 영향을 미치는 핵심 요인을 식별하고, 응답 데이터를 기반으로 한 미래 행동 예측 모델을 구축할 수 있습니다.<br>
또한 시계열 분석을 통해 시간에 따른 응답 변화를 추적하고, 유사 설문과의 벤치마킹을 통해 상대적인 성과를 측정할 수 있습니다.</p>

<h3>분석 가능 데이터</h3>
<p>Survey Genius 플랫폼에서 수집된 다양한 유형의 설문조사 데이터</p>
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
            <td>분석 방법</td>
            <td>제공 인사이트</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">응답 데이터</td>
            <td>1</td>
            <td>객관식 문항</td>
            <td>빈도 분석 및 교차 분석</td>
        </tr>
        <tr>
            <td>2</td>
            <td>리커트 척도</td>
            <td>평균, 중앙값, 분포 분석</td>
        </tr>
        <tr>
            <td>3</td>
            <td>주관식 응답</td>
            <td>텍스트 마이닝, 키워드 추출</td>
        </tr>
        <tr>
            <td>4</td>
            <td>인구통계 정보</td>
            <td>세그먼트별 비교 분석</td>
        </tr>
        <tr>
            <td>5</td>
            <td>만족도 점수</td>
            <td>드라이버 분석, 요인 분석</td>
        </tr>
        <tr>
            <td>6</td>
            <td>NPS 점수</td>
            <td>그룹별 비교, 추천 요인 분석</td>
        </tr>
        <tr>
            <td>7</td>
            <td>행동 데이터</td>
            <td>응답 시간, 중도 이탈률 분석</td>
        </tr>
    </tbody>
</table>

<h3>사용 방법</h3>
<ul>
  <li>분석하고자 하는 설문 데이터의 특성과 원하는 분석 유형을 명시하여 질문해주세요.</li>
  <li>특정 질문이나 응답자 그룹에 대한 세부 분석을 요청할 수 있으며, 시각화 방식에 대한 선호도도 함께 알려주시면 더 정확한 결과를 제공해 드립니다.</li>
  <li>분석 결과에 대한 추가 질문이나 다른 관점에서의 분석 요청도 가능합니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "고객 만족도 설문에서 가장 낮은 점수를 받은 항목은 무엇인가요?",
    "20대와 40대 응답자 간의 제품 선호도 차이를 분석해주세요",
    "자유 의견란에서 가장 많이 언급된 키워드와 그 감성을 분석해주세요",
    "NPS 점수에 가장 큰 영향을 미치는 요인은 무엇인가요?"
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

export default Service_SG_Analysis; 