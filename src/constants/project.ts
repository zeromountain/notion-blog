type Project = {
  name: string;
  description: string;
  url?: string;
  skills: string[];
  distribution: {
    title: string;
    action: string;
    result: string;
  }[];
};

export const PROJECTS: Record<string, Project> = {
  'pickX.AI': {
    name: 'pickX.AI',
    description: 'pickX.AI는 이미지 생성 AI 모델을 활용한 사내 이미지 생성 서비스입니다.',
    skills: ['React', 'Next.js', 'Typescript', 'Tanstack Query', 'Chakra UI', 'zustand'],
    distribution: [
      {
        title: 'Tanstack Query 적용',
        action: '기존 axios를 사용한 API 호출 방식에서 Tanstack Query로 변경',
        result:
          '재사용성이 떨어지는 axios 템플릿 코드 개선\n서버 상태 사용으로 클라이언트 상태 관리 최소화\nAPI 호출 개선',
      },
      {
        title: 'zustand 적용',
        action: '기존 useState를 사용한 상태 관리 방식에서 zustand로 변경',
        result: '지역 상태 관리 코드를 전역 상태 관리로 클라이언트 상태 관리 통합 개선',
      },
      {
        title: '프로젝트 폴더 구조 개선',
        action: '기존 프로젝트 폴더 구조에서 모듈화된 폴더 구조로 변경',
        result: '프로젝트 관리 및 유지보수 용이성 개선',
      },
      {
        title: '이미지 리스트 페이지 개선',
        action: '이미지 레이아웃 시프트, LCP, FCP 개선',
        result:
          '이미지 메타데이터에서 추출한 width,height 정보를 통해 이미지 레이아웃 시프트 개선\nlazy 속성을 사용해 효율적인 이미지 자원의 로드 관리로 이미지 로드 속도 개선(평균 100ms -> 평균 200ms)\n최신 이미지 포맷 적용(png -> webp/avif)',
      },
      {
        title: 'CDN 도입',
        action: '기존 S3 버킷에 CloudFront 도입 및 이미지 리사이징 최적화 건의',
        result: '이미지 리사이징 최적화로 이미지 로드 속도 개선(평균 200ms -> 평균 50ms)',
      },
    ],
  },
  'operation-tool': {
    name: 'Operation Tool',
    description: 'Four Ground Nine 게임 운영 툴입니다.',
    skills: [
      'React',
      'Next.js',
      'Refine',
      'Typescript',
      'Tanstack Query',
      'Tanstack Table',
      'MUI',
      'Tailwind CSS',
      'zustand',
      'react-hook-form',
    ],
    distribution: [
      {
        title: 'Refine 적용',
        action: '기존 프로젝트 폴더 구조에서 Refine 프레임워크 적용',
        result: '프로젝트 관리 및 유지보수 용이성 개선',
      },
      {
        title: '도커 컨테이너 적용',
        action: '도커 컨테이너 이미지 사이즈 최적화',
        result: '이미지 사이즈 최적화로 빌드 속도 개선',
      },
      {
        title: '멀티 도메인 적용',
        action: 'provider 추가로 멀티 도메인 적용',
        result: '다수의 API 도메인 관리 용이성 개선',
      },
      {
        title: '테이블 컴포넌트 개선',
        action: 'Tanstack Table 적용으로 테이블 컴포넌트 개선',
        result: '서버 상태와 동일한 테이블 컴포넌트 구현으로 비동기 데이터 처리 용이성 개선',
      },
      {
        title: '다국어 지원',
        action: 'i18next 적용으로 다국어 지원',
        result: '영/중/일 언어 지원으로 어드민 사용자 편의성 개선',
      },
    ],
  },
  luxon: {
    name: 'Luxon',
    description: 'Luxon은 데스페라도 게미어를 위한 NFT 플랫폼입니다.',
    url: 'https://luxon.games',
    skills: ['React', 'Next.js', 'Typescript', 'Tanstack Query', 'Chakra UI'],
    distribution: [
      {
        title: '지갑 솔루션 마이그레이션',
        action: 'Metamask -> Immutable Passport',
        result: '확장성 높은 지갑 관리 솔루션 제공으로 사용자 편의성 개선',
      },
      {
        title: '가스비 최적화',
        action: '컨트랙트 최적화 및 메타마스크 지갑 최적화',
        result: '유저 지불하는 가스비 감소로 사용자 경험 개선',
      },
      {
        title: '어드민 에디터 개발',
        action: '데스페라도 게미어 관리자를 위한 에디터 개발',
        result: '게이머 공지 작성 에디터 개발을 통해 담당자 업무 편의성 개선',
      },
    ],
  },
  blog: {
    name: 'Nextjs Blog',
    description: 'nextjs app router를 사용한 블로그 서비스입니다.',
    url: 'https://zeromountain.pro',
    skills: ['Next.js', 'Typescript', 'Tailwind CSS', 'NextUI', 'notion API'],
    distribution: [
      {
        title: '블로그 포스트 메타데이터 추가',
        action: 'generateMetadata 함수와 generateStaticParams 함수를 추가하여 블로그 포스트 메타데이터 추가',
        result: '검색엔진 최적화 및 소셜 미디어 공유 시 메타데이터 제공',
      },
      {
        title: 'ISR 적용',
        action: 'Incremental Static Regeneration을 적용하여 블로그 포스트 캐싱 최적화',
        result: '블로그 포스트를 SSR 대신 ISR로 캐싱하여 블로그 포스트 로드 속도 개선',
      },
    ],
  },
};
