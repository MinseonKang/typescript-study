// object 구조를 기준으로 타입을 정의 : 구조적 타입 시스템
let user: {
  id?: number; // ? : 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "강민선",
};

let config: {
  readonly apiKey: string; // 절대 값이 수정되어선 안 될 때 readonly 프로퍼티를 사용
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
