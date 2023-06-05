import { type } from "os";

// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "강민선",
  nickname: "ms",
  birth: "2000.09.17",
  bio: "파이팅!",
  location: "남양주시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "gd",
  birth: "1999.9.9",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니처
type coutryCodes = {
  [key: string]: string;
};

let coutryCode: coutryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
