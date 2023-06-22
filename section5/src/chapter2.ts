/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "강민선",
  age: 24,
};

interface Developer extends Person {
  name: "hello";
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string; // 모듈의 타입을 보강
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
