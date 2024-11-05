export const PROJECTS = {
  luxon: {
    name: 'Luxon',
    description: 'Luxon은 데스페라도 게미어를 위한 NFT 플랫폼입니다.',
    url: 'https://luxon.games',
    skills: ['React', 'Next.js', 'Typescript', 'Tanstack Query', 'Chakra UI'],
    distribution: [
      {
        title: '지갑 솔루션 마이그레이션',
        action: 'Metamask -> Immutable Passport',
        result: '확장성 높은 지갑 관리 솔루션 제공으로 사용자 편의성 증대',
      },
      {
        title: '가스비 최적화',
        action: '컨트랙트 최적화 및 메타마스크 지갑 최적화로 가스비 감소',
        result: '기존 불필요한 컨트랙트 삭제 및 최적화로 사용자가 지불하는 가스비 감소',
      },
      {
        title: '어드민 에디터 개발',
        action: '데스페라도 게미어 관리자를 위한 에디터 개발',
        result: '게이머 공지 작성 에디터 개발을 통해 담당자 업무 편의성 증대',
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
        result: '검색엔진 최적화 및 소셜 미디어 공유 시 메타데이터 노출',
      },
    ],
  },
};
