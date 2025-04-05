import React from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// 샘플 페이지별 사이드바 내용
export const SidebarVOCAnalysisExtra = () => (
  <div className="sidebar-voc-analysis-extra sidebar-extra-content">
    <h3>VOC 분석 가이드</h3>
    <ul>
      <li>감성 분석 결과 해석법</li>
      <li>VOC 트렌드 분석 예시</li>
      <li>주제 모델링 결과 활용</li>
    </ul>
    <div className="voc-analysis-extra-info">
      <h4>감성 점수 이해하기</h4>
      <p>감성 점수는 -1(매우 부정적)에서 +1(매우 긍정적) 사이의 값으로 표현됩니다.</p>
      <p>중립적 의견은 0에 가까운 값을 가지며, 감성 혼합 의견은 세부 분석이 필요합니다.</p>
    </div>
    <div className="voc-analysis-extra-links">
      <h4>추천 분석 리포트</h4>
      <div className="report-links">
        <a href="#" className="report-link">월간 VOC 감성 트렌드</a>
        <a href="#" className="report-link">주요 불만 요인 분석</a>
        <a href="#" className="report-link">제품별 VOC 분포 현황</a>
      </div>
    </div>
  </div>
);

const Service_VOC_Analysis = ({ serviceId = "voc-analysis", SidebarContent }) => {
  const SERVICE_NAME = "VOC Analysis - 온라인 VOC 분석 서비스 v1.0";
  
  const SERVICE_DESCRIPTION = {
    ko: `
<h3>서비스 개요</h3>
<p><strong>▶ VOC 분석의 중요성</strong><br>
VOC(Voice of Customer)는 고객의 직접적인 의견과 피드백으로, 기업의 제품과 서비스 개선을 위한 핵심 인사이트를 제공합니다. 효과적인 VOC 분석은 고객 경험 개선, 제품 혁신, 불만 요인 해소 등을 통해 고객 충성도와 매출 향상에 기여합니다.</p>

<ul>
  <li>고객 의견 추적 : 제품/서비스에 대한 실시간 고객 반응 모니터링</li>
  <li>주요 이슈 식별 : 반복되는 불만 사항과 개선 요구 사항 분석</li>
  <li>경쟁사 비교 : 경쟁 제품 대비 인식 및 선호도 차이 파악</li>
</ul>

<p>특히 온라인 리뷰, 소셜 미디어, 고객센터 문의 등 다양한 채널에서 수집되는 VOC 데이터는 그 양과 복잡성으로 인해 일반적인 분석 방법으로는 처리하기 어려우나, 인공지능 기술을 활용하면 효과적으로 분석할 수 있습니다.</p>
 
<p><strong>▶ VOC Analysis 서비스</strong><br>
VOC Analysis는 다양한 채널에서 수집된 VOC 데이터를 자연어 처리 기술을 활용하여 분석하는 서비스입니다.<br>
텍스트 마이닝, 감성 분석, 주제 모델링 등의 기술을 적용하여 고객 의견의 주요 주제와 감성, 트렌드를 파악할 수 있습니다. 이를 통해 제품/서비스 개선 포인트를 도출하고, 고객 만족도 향상을 위한 전략적 인사이트를 제공합니다.<br>
복잡한 분석 과정 없이 자연어 질문을 통해 VOC 데이터에 대한 다각적인 분석 결과를 쉽게 확인할 수 있습니다.</p>

<h3>데이터 설명</h3>
<p>2023-01-01부터 2024-06-30까지 수집된 온라인 리뷰, 소셜 미디어 게시물, 고객센터 문의 데이터</p>
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
            <td>수집 경로</td>
            <td>특징</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="7">VOC 데이터</td>
            <td>1</td>
            <td>제품 리뷰</td>
            <td>자사몰, 오픈마켓, 리뷰 플랫폼 등</td>
        </tr>
        <tr>
            <td>2</td>
            <td>소셜미디어</td>
            <td>트위터, 인스타그램, 커뮤니티 등</td>
        </tr>
        <tr>
            <td>3</td>
            <td>고객센터 문의</td>
            <td>챗봇, 이메일, 전화 상담 등</td>
        </tr>
        <tr>
            <td>4</td>
            <td>설문조사</td>
            <td>NPS, 고객만족도 조사 등</td>
        </tr>
        <tr>
            <td>5</td>
            <td>앱 리뷰</td>
            <td>구글 플레이, 앱스토어 등</td>
        </tr>
        <tr>
            <td>6</td>
            <td>포럼/게시판</td>
            <td>사용자 커뮤니티, Q&A 사이트 등</td>
        </tr>
        <tr>
            <td>7</td>
            <td>인터뷰/FGI</td>
            <td>심층 인터뷰, 포커스 그룹 등</td>
        </tr>
    </tbody>
</table>

<h3>분석 항목</h3>
<ul>
  <li><strong>감성 분석</strong> - 긍정/부정/중립 감성 분류 및 감성 강도 측정</li>
  <li><strong>주제 모델링</strong> - 주요 토픽 자동 추출 및 분류</li>
  <li><strong>키워드 추출</strong> - 빈도 및 중요도 기반 핵심 키워드 식별</li>
  <li><strong>트렌드 분석</strong> - 시간에 따른 주제 및 감성 변화 추적</li>
  <li><strong>연관어 분석</strong> - 주요 키워드와 함께 언급되는 단어 분석</li>
  <li><strong>비교 분석</strong> - 제품/서비스/기간 간 VOC 특성 비교</li>
</ul>

<h3>사용 방법</h3>
<ul>
  <li>관심 있는 제품, 서비스, 기간 등에 대한 VOC 분석 질문을 자연어로 입력하세요.</li>
  <li>특정 주제나 키워드에 대한 세부 분석, 시계열 트렌드, 경쟁 제품 비교 등 다양한 관점의 분석이 가능합니다.</li>
  <li>분석 결과에 대한 후속 질문이나 더 깊은 인사이트 요청도 가능합니다.</li>
</ul>
`,
    en: `under construction...`
  };

  const SAMPLE_QUESTIONS = [
    "지난 3개월간 가장 많이 언급된 제품 불만 요인은 무엇인가요?",
    "A제품과 B제품의 VOC 감성 점수를 비교해주세요",
    "배송 관련 VOC의 월별 추이와 주요 키워드를 분석해주세요",
    "고객센터 문의와 온라인 리뷰에서 나타나는 주요 이슈의 차이점은?"
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

export default Service_VOC_Analysis; 