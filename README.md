# Agent- React 버전

이 프로젝트는 Streamlit 기반의 Intellytics AI Agent를 React로 재구현한 버전입니다. 사용자가 AI와 대화형으로 소통할 수 있는 채팅 인터페이스를 제공하며, 다양한 AI 분석 서비스와 연동됩니다.

## 주요 기능

- AI 에이전트와의 대화형 채팅 인터페이스
- 대표 질문을 통한 빠른 시작
- 다국어 지원 (한국어/영어)
- 대화 내역 저장 및 초기화
- 반응형 디자인으로 다양한 화면 크기 지원

## 기술 스택

- **프론트엔드**: React, JavaScript, CSS
- **백엔드**: Flask, Python
- **상태 관리**: React Context API, localStorage
- **API 통신**: Axios

## 설치 및 실행 방법

### 프론트엔드 실행

```bash
# 프로젝트 디렉토리로 이동
cd intellytics-react-app

# 종속성 설치
npm install

# 개발 서버 실행
npm start
```

### 백엔드 실행

```bash
# 백엔드 디렉토리로 이동
cd intellytics-react-app/server

# 가상 환경 생성 (선택 사항)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 종속성 설치
pip install -r requirements.txt

# 서버 실행
python app.py
```

## 프로젝트 구조

```
intellytics-react-app/
├── public/              # 정적 파일
├── server/              # 백엔드 서버
│   ├── api/             # API 엔드포인트
│   ├── app.py           # 메인 서버 파일
│   └── requirements.txt # 서버 종속성
├── src/
│   ├── components/      # 리액트 컴포넌트
│   │   ├── Chat/        # 채팅 관련 컴포넌트
│   │   ├── Layout/      # 레이아웃 컴포넌트
│   │   └── UI/          # UI 컴포넌트
│   ├── contexts/        # Context API
│   ├── hooks/           # 커스텀 훅
│   ├── services/        # API 서비스
│   ├── styles/          # CSS 스타일
│   ├── App.js           # 메인 앱 컴포넌트
│   └── index.js         # 앱 진입점
└── package.json         # 프로젝트 설정 및 종속성
```

## API 연동

- 기본적으로 대화형 AI 에이전트는 `/api/llm` 엔드포인트를 통해 LLM API와 통신합니다.
- 환경 변수를 통해 API 엔드포인트를 구성할 수 있습니다. (`LLM_API_ENDPOINT`)

## 기여 및 개발

1. 이 저장소를 포크(Fork)합니다.
2. 기능 개발 또는 버그 수정을 위한 브랜치를 생성합니다.
3. 변경 사항을 커밋합니다.
4. 브랜치를 푸시합니다.
5. Pull Request를 생성합니다.

## 라이센스

MIT License 
