# NodeMiddleware

## 개요
**NodeMiddleware**는 Docker 환경에서 Node.js 기반의 미들웨어 게이트웨이로, Spring Boot로 구현된 `userservice`와 통합되어 동작합니다. 이 프로젝트는 RESTful API 요청을 처리하며, 클라이언트와 백엔드 간의 효율적인 데이터 전달을 지원합니다.

## 주요 기능
- Node.js를 이용한 프런트엔드와 백엔드 API의 미들웨어 역할 수행
- Spring Boot 기반 `userservice`와의 완벽한 통합
- HTML/CSS를 활용한 기본 사용자 인터페이스 제공
- Docker와 Docker Compose를 통한 컨테이너화된 환경에서 실행 가능

## 프로젝트 구조
- **public/**  
  정적 파일(HTML, CSS, JavaScript)을 포함하는 디렉토리입니다. 사용자 인터페이스를 제공하기 위한 리소스를 저장합니다.
- **Dockerfile**  
  Docker 이미지를 빌드하기 위한 설정 파일입니다.
- **index.js**  
  Node.js 애플리케이션의 진입점 파일입니다. 서버 및 API 라우팅을 처리합니다.

## 사전 요구사항
이 프로젝트를 실행하려면 다음 환경이 필요합니다:
- Node.js 18.x 이상
- Docker 및 Docker Compose
