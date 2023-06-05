// enum (열거형) 타입 : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { // 숫자형 enum
  ADMIN, // 0 (자동으로 0부터 값이 저장됨)
  USER, // 1
  GUEST, // 2
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "강민선",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "정보인",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.english,
};
const user3 = {
  name: "고현서",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);

// enum은 js로 컴파일할 때 객체로 변환됨
