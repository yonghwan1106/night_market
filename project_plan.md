# 노량진 청춘 야시장 웹사이트 프로젝트 계획

## 프로젝트 개요
동작구 정책 아이디어 공모전을 위한 '노량진 청춘 야시장' 제안을 소개하는 웹사이트 개발 프로젝트입니다.
이 웹사이트는 수험생과 청년들을 위한 야간 문화 축제 제안을 시각적으로 표현합니다.

## 디자인 방향
- 젊음을 상징하는 세련된 디자인
- 파워풀한 그래픽과 대담한 색상 사용
- 네온 테마와 도시적인 느낌의 UI
- 인터랙티브 요소를 활용한 참여적 경험

## 기술 스택
- HTML5
- CSS3 (애니메이션, Flexbox, Grid)
- JavaScript (인터랙티브 요소, 시각화)
- SVG (로고, 아이콘, 인포그래픽)
- Chart.js (데이터 시각화)

## 파일 구조
```
/dongjak/night_market/
├── index.html (메인 페이지)
├── css/
│   ├── style.css (기본 스타일)
│   ├── animations.css (애니메이션)
│   └── responsive.css (반응형 스타일)
├── js/
│   ├── main.js (기본 기능)
│   ├── charts.js (차트 구현)
│   └── menu.js (네비게이션 메뉴)
├── svg/
│   ├── logo.svg (야시장 로고)
│   ├── stress-icon.svg (스트레스 아이콘)
│   ├── mental-icon.svg (정신건강 아이콘)
│   ├── social-icon.svg (사회적 고립 아이콘)
│   ├── support-icon.svg (지원 서비스 아이콘)
│   ├── instagram.svg (인스타그램 아이콘)
│   ├── facebook.svg (페이스북 아이콘)
│   └── twitter.svg (트위터 아이콘)
├── pages/
│   ├── current-issues.html (현황 분석 페이지)
│   ├── issues-data.html (지역 현황 데이터 페이지)
│   ├── improvements.html (개선 방안 페이지)
│   ├── benefits.html (기대 효과 페이지)
│   └── gallery.html (인포그래픽 페이지)
└── images/ (이미지 폴더)
```

## 주요 페이지 구성
1. 랜딩 섹션: 강렬한 배경과 메인 CTA
2. 현황 및 문제점: 노량진 지역 현황과 문제를 시각적으로 표현
3. 개선방안: 야시장 공간 구성과 프로그램 시각화
4. 기대효과: 다양한 차트와 그래픽으로 기대효과 표현
5. 타임라인: 야시장 운영 계획과 발전 단계

## 컬러 팔레트
- 주요 컬러: #FF6B6B (적색 계열), #7C4DFF (보라 계열)
- 보조 컬러: #00BFA5 (민트 계열), #FF1F71 (핑크 계열)
- 배경 컬러: #131419 (다크 배경), #202026 (어두운 그레이)
- 네온 효과: #FF1F71 (네온 핑크), #4A00E0 (네온 블루), #00FFF0 (네온 민트)
- 차트 컬러: #FF6384 (빨강), #36A2EB (파랑), #FFCE56 (노랑), #4BC0C0 (청록), #9966FF (보라)

## 주요 기능
- 글리치 텍스트 효과: 제목에 미래지향적 느낌을 더함
- 스크롤 애니메이션: 콘텐츠가 스크롤에 따라 자연스럽게 나타남
- 인터랙티브 지도: 야시장 공간 구성을 직관적으로 보여주는 지도
- 데이터 시각화: 기대효과를 차트로 시각화
- 3D 호버 효과: 카드 요소에 입체감을 더하는 마우스 호버 효과
- 반응형 디자인: 모든 디바이스에서 최적화된 경험 제공

## 완료된 작업
- 프로젝트 초기 구조 설정 완료
- HTML 메인 파일 개발 완료
- CSS 스타일 파일 개발 완료
  - style.css 완료 (issues-data-section, data-card, need-bars 등 클래스 스타일 추가)
  - animations.css 완료 (animate-fade-up 등 스크롤 애니메이션 클래스 추가)
  - responsive.css 완료
- 자바스크립트 파일 개발 중
  - menu.js (네비게이션 메뉴) 완료
  - charts.js (차트 구현) 완료
  - animations.js (애니메이션 구현) 완료
- 페이지 개발
  - current-issues.html (현황 분석 페이지) 완료
  - issues-data.html (지역 현황 데이터 페이지) 완료 - 애니메이션 활성화 스크립트 추가
  - improvements.html (개선 방안 페이지) 완료
- SVG 아이콘 파일 생성
  - stress-icon.svg (스트레스 아이콘) 완료
  - mental-icon.svg (정신건강 아이콘) 완료
  - social-icon.svg (사회적 고립 아이콘) 완료
  - support-icon.svg (지원 서비스 아이콘) 완료
  - instagram.svg (인스타그램 아이콘) 완료
  - facebook.svg (페이스북 아이콘) 완료
  - twitter.svg (트위터 아이콘) 완료
- 이미지 파일 생성
  - data-header-bg.jpg (데이터 페이지 헤더 배경) 완료

## 다음 작업 예정
- benefits.html (기대 효과 페이지) 개발
- gallery.html (인포그래픽 페이지) 개발
- 히어로 섹션 배경 이미지 준비
- 나머지 필요한 SVG 아이콘 제작
- 브라우저 호환성 테스트
- 성능 최적화

## 특이사항
- 추후 시각적 콘텐츠가 더해질 경우 로딩 최적화 필요
- 다양한 애니메이션이 성능에 영향을 줄 수 있으므로 부하 테스트 필요
- 시각적 요소와 애니메이션으로 프로젝트 차별화
- issues-data.html 페이지 수정 완료: 애니메이션 활성화 스크립트 추가 및 animate-fade-up 클래스 스타일 적용