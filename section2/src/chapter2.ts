// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "minseon"];

let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// tup1.push(1); // 배열 메서드 쓸 때 주의!
// tup1.pop();
// tup1.pop();
// tup1.pop();

const users: [string, number][] = [
  ["강민선", 1],
  ["정보인", 2],
  ["이유진", 3],
  ["고현서", 4],
  //   [5, "강훈지"],
];
