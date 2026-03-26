// config.js

const lat_lon_group = {
  삼성본관: { lat: 37.562315, lon: 126.975602 },
  예인교회: { lat: 37.568208, lon: 127.036794 },
  우리집: { lat: 37.563481, lon: 127.055696 },
  // 다른 장소들도 추가 가능
};

// 💡 여기서 모임 장소 이름만 바꿔주면 됩니다!
const TARGET_PLACE = "우리집";

const CONFIG = {
  // 1. 앱스 스크립트 웹 앱 URL
  SCRIPT_URL:
    "https://script.google.com/macros/s/AKfycbzhlCgFnb7xljoxfRRl1M_EfOg3wuI_-E81NWUXiGqNjKhHzQWRmQoLnbE54RKzeK11QA/exec",

  // 2. 모임 장소 설정 (위도, 경도, 허용 반경)
  TARGET_LAT: lat_lon_group[TARGET_PLACE].lat, // 위도
  TARGET_LON: lat_lon_group[TARGET_PLACE].lon, // 경도
  MAX_DISTANCE: 50, // 허용 거리 (미터)
};

// config.js 하단에 추가
const PATCH_NOTES = [
  {
    version: "v1.4",
    date: "2026-03-26",
    changes: [
      "9시 이후 출석 시 서버에서 구분되도록 변경",
      "IP정보 같이 인계되도록 수정",
      "일요일에만 출석 가능하도록 수정",
      "동명이인 구분 개선(휴대폰 뒷4자리로 구분)",
    ],
  },
  {
    version: "v1.3",
    date: "2026-03-22",
    changes: [
      "출석 가능 시간 제한 추가 (9:00까지)",
      "GPS 실패 시 재시도 버튼 추가",
      "오류 메시지 상세화",
      "패치노트 기능 추가",
    ],
  },
  {
    version: "v1.2",
    date: "2026-03-16",
    changes: [
      "기기 식별 방식 변경 (fingerprint → localStorage UUID)",
      "대리출석 방지 로직 개선",
    ],
  },
  {
    version: "v1.1",
    date: "2026-03-08",
    changes: ["이름 확인 모달 추가", "출석 위치 화면 표시"],
  },
];
