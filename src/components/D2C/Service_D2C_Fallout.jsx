import React, { useState, useEffect } from 'react';
import useChat from '../../hooks/useChat';
import ChatMessage from '../Chat/ChatMessage';
import ChatInput from '../Chat/ChatInput';
import SampleQuestions from '../Chat/SampleQuestions';
import Spinner from '../UI/Spinner';
import '../ServiceCommon.css';

// D2C 사이드바 내용
export const SidebarD2CFalloutExtra = () => (
  <div className="sidebar-d2c-fallout-extra sidebar-extra-content">
    <h3>Fallout 분석 팁</h3>
    <ul>
      <li>고객 이탈 패턴 분석</li>
      <li>구매 포기 원인 분석</li>
      <li>이탈 예방 전략</li>
    </ul>
    <div className="d2c-fallout-extra-info">
      <h4>이탈 분석 방법론</h4>
      <p>고객 행동 데이터를 활용한 이탈 패턴 분석 방법을 알아보세요.</p>
      <p>구매 단계별 이탈률을 분석하여 전환율을 개선할 수 있습니다.</p>
    </div>
    <div className="d2c-fallout-extra-tools">
      <h4>추천 분석 도구</h4>
      <div className="tool-badges">
        <span className="tool-badge">Python</span>
        <span className="tool-badge">Tableau</span>
        <span className="tool-badge">Power BI</span>
      </div>
      <p>다양한 데이터 분석 도구를 활용하여 더 깊은 이탈 인사이트를 얻을 수 있습니다.</p>
    </div>
  </div>
);

const Service_D2C_Fallout = ({ serviceId, SidebarContent }) => {
  const SERVICE_NAME = {'ko': "D2C - Fallout Analysis 서비스", "en": "D2C - Fallout Analysis Service"};
  
  const SERVICE_DESCRIPTION = {
    "ko": `
<h3>서비스 개요</h3>
<p>OBS 매출현황에서 이슈(매출하락 등)에 대해서 <strong>Funnel 및 유입 채널 관점에서 원인을 분석하고 해결방안</strong>을 찾아볼 수 있는 서비스</p>
<br>

<h4>데이터 설명</h4>
<p><strong>해외영업본부</strong>에서 관리하고 <strong>EAP에 적재되어 있는 고객의 웹행동 정보를 포함한 Google Analytics 데이터</strong>를 전처리하여 활용함</p>
<table style="border-collapse:collapse;border-color:#ccc;border-spacing:0;border:none;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 7%"><col style="width: 4%"><col style="width: 21%"><col style="width: 5%"><col style="width: 19%"><col style="width: 19%"><col style="width: 25%"></colgroup>
<thead>
<tr><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">데이터<br>테이블</td><td style="background-color:#fff;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"></td><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">재료(Raw)데이터</td>
<td style="background-color:#fff;border-color:#ccc;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:22px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="8">→</td><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="3">전처리(CL2)데이터</td></tr>
<tr><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"> <span style="color:black">V_DM_BI_MAIN_GA</span>  </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">FUNNEL</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">TRAFFIC</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DOMAIN SPECIFIC AI</span>   </td></tr>
<tr><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="6">데이터<br>컬럼</td><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">1</span> </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DATE</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DATE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">DATE</td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DATE</span>  </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">2</span>  </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">WEEK_INFO</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">WEEK_INFO</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">WEEK_INFO</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">3</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">VISIT_CNT</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">4</span> </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">ATC_CNT</td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">VISIT_CNT</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">PRODUCT_LEVEL</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">IMPORTANT FEATURE1</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">5 </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">CHECKOUT_CNT</span></td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">ATC_CNT</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">TRAFFIC_TYPE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">I<span style="color:black">MPORTANT FEATURE2</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">6</span> </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"> <span style="color:black">TRAFFIC_SOURCE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">CHECKOUT_CNT</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"></td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">IMPORTANT FEATURE3</span>   </td></tr>
</thead></table>

<h3>사용 방법</h3>
<p>🔍 DX Automation for D2C 서비스 구현에 참여하고 싶으신 분들을 위해 <a href="http://mod.lge.com/hub/cx-llm/dx_d2c" target="_blank">개발 가이드</a>를 제공합니다.</p>

<p>본 서비스는 현재 <strong>2023년 6월 6일부터 2025년 2월 28일까지</strong>의 <strong>영국 OBS 사이트 고객의 웹행동 정보</strong>에 대해 질문할 수 있습니다.</p>
`,
    "en": `
<h3>Service Overview</h3>
<p>A service that <strong>analyzes the causes of issues</strong> (such as sales decline) from <strong>the perspective of the funnel and inflow channels</strong> in the OBS sales status and finds solutions.</p>
<br>

<h4>Data Description</h4>
<p>Managed by the <strong>Overseas Sales & Marketing Company</strong>, utilizing preprocessed Google Analytics data, including customer web behavior information stored in <strong>EAP</strong>.</p>

<table style="border-collapse:collapse;border-color:#ccc;border-spacing:0;border:none;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 7%"><col style="width: 4%"><col style="width: 21%"><col style="width: 5%"><col style="width: 19%"><col style="width: 19%"><col style="width: 25%"></colgroup>
<thead>
<tr><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Data<br>Table</td><td style="background-color:#fff;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2"></td><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Raw Data</td>
<td style="background-color:#fff;border-color:#ccc;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:22px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="8">→</td><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="3">Preprocessed Data</td></tr>
<tr><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"> <span style="color:black">V_DM_BI_MAIN_GA</span>  </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">FUNNEL</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">TRAFFIC</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DOMAIN SPECIFIC AI</span>   </td></tr>
<tr><td style="background-color:#fff;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal" rowspan="6">Data<br>Columns</td><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">1</span> </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DATE</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DATE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">DATE</td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">DATE</span>  </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">2</span>  </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">WEEK_INFO</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">WEEK_INFO</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">WEEK_INFO</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">3</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">VISIT_CNT</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">MODEL_CODE</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">4</span> </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">ATC_CNT</td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">VISIT_CNT</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">PRODUCT_LEVEL</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">IMPORTANT FEATURE1</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">5 </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">CHECKOUT_CNT</span></td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">ATC_CNT</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">TRAFFIC_TYPE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal">I<span style="color:black">MPORTANT FEATURE2</span>   </td></tr>
<tr><td style="background-color:#FFF;border-color:#ffffff;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">6</span> </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"> <span style="color:black">TRAFFIC_SOURCE</span>   </td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">CHECKOUT_CNT</span>   </td>
<td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"></td><td style="background-color:#FFF;border-color:inherit;border-style:solid;border-width:0px;color:#333;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal"><span style="color:black">IMPORTANT FEATURE3</span>   </td></tr>
</thead></table>

<h3>How to Use</h3>
<p>🔍 We provide a <a href="http://mod.lge.com/hub/cx-llm/dx_d2c" target="_blank">development guide</a> for those who wish to participate in the implementation of DX Automation for D2C services.</p>

<p>This service currently allows inquiries about <strong>Web Behavior information of customers on the UK OBS site from November 2024 to February 2025.</strong></p>
`
  };

  const SAMPLE_QUESTIONS = {
    "ko":[
    "2024년 11월 둘째 주 대비 2024년 11월 셋째 주 AV 제품군의 Funnel 현황을 비교해줘.",
    "2024년 11월 둘째 주 대비 2024년 11월 셋째 주 AV 제품군의 ATC가 줄어든 원인이 어떻게 되나요?",
    "2024년 11월 둘째 주 대비 2024년 11월 셋째 주 AV 제품군의 ATC 감소 원인의 해결 방안은 무엇인가요?",
    "2024년 11월 둘째 주 대비 2024년 11월 셋째 주 AV 제품군의 유입채널별 트래픽 현황은 어떻게 되나요?",
    "2024년 11월 둘째 주 대비 그 다음주의 모니터 제품군 display 트래픽이 감소한 원인은 무엇인가요?",
    "2024년 11월 둘째 주 대비 그 다음주의 모니터 제품군 display 트래픽 감소 원인의 해결 방안은 무엇인가요?",
    ], 
    "en":[
    "Please conduct a Fallout analysis for the monitor product line comparing the second week of November 2024 to the third week of November 2024.",
    "What are the reasons for the decrease in ATC for the monitor product line comparing the second week of November 2024 to the third week of November 2024?",
    "What are the solutions to address the causes of the ATC decrease for the monitor product line comparing the second week of November 2024 to the third week of November 2024?",
    "What is the traffic status by inflow channel for the monitor product line comparing the second week of November 2024 to the third week of November 2024?",
    "What are the reasons for the decrease in display traffic for the monitor product line comparing the second week of November 2024 to the third week of November 2024?",
    "What are the solutions to address the causes of the display traffic decrease for the monitor product line comparing the second week of November 2024 to the third week of November 2024?"
    ]
};

  const {
    messages,
    isLoading,
    language,
    chatContainerRef,
    bottomRef,
    sendMessage,
    handleSampleQuestion,
    clearMessages,
    setLanguage
  } = useChat(serviceId || 'page-d2c-account');
  
  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  const handleReset = () => {
    const confirmMessage = language === 'ko' ? 
      '대화 내용을 모두 초기화하시겠습니까?' : 
      'Are you sure you want to clear all conversations?';
    
    if (window.confirm(confirmMessage)) {
      clearMessages();
    }
  };

  return (
    <div className="service-container">
      {/* 상단 제목 */}
      <div className="service-header">
        <div className="title-with-lang-toggle">
          <h2 className="main-title">{SERVICE_NAME[language]}</h2>
          {/* <div className="header-controls">
            <button 
              className="lang-toggle-btn" 
              onClick={toggleLanguage}
              title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
            <button 
              className="reset-button"
              onClick={handleReset}
              title={language === 'ko' ? '대화 초기화' : 'Clear conversation'}
            >
              {language === 'ko' ? '초기화' : 'Reset'}
            </button>
          </div> */}
        </div>
        <div 
          className="service-description" 
          dangerouslySetInnerHTML={{ __html: SERVICE_DESCRIPTION[language] }}
        />
      </div>

      <div className="chat-main-area">
        {/* 💬 채팅 메시지 영역 */}
        <div className="chat-container" ref={chatContainerRef}>
          {(
            <SampleQuestions
              questions={SAMPLE_QUESTIONS[language]}
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

export default Service_D2C_Fallout; 