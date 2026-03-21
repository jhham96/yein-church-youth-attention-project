// config.js

const lat_lon_group = {
  삼성본관: { lat: 37.562315, lon: 126.975602 },
  예인교회: { lat: 37.568208, lon: 127.036794 },
  // 다른 장소들도 추가 가능
};

const CONFIG = {
  // 1. 앱스 스크립트 웹 앱 URL
  SCRIPT_URL:
    "https://script.google.com/macros/s/AKfycbwtT5z_4MHA6KMXhAPPmddUw-OAsOsd9rriMZ-iOW8_MUY0O5dR4baUZoq6d0823Gu6Sw/exec",

  // 2. 모임 장소 설정 (위도, 경도, 허용 반경)
  TARGET_LAT: lat_lon_group["예인교회"].lat, // 위도
  TARGET_LON: lat_lon_group["예인교회"].lon, // 경도
  MAX_DISTANCE: 50, // 허용 거리 (미터)
};
