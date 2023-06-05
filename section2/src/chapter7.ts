// void : 이무것도 없음을 의미하는 타입

function fun1(): string {
  return "hello";
}

function fun2(): void {
  // return할 것이 없을 때 사용
  console.log("hello");
}

let a: void;
// a = 1; // 불가능
// a = "hello"; // 불가능
a = undefined;

// never : 불가능한 타입
function fun3(): never {
  // return이 불가능할 때
  while (true) {}
}

function fun4(): never {
  throw new Error();
}

let anyVar: any;
let b: never;
// b = 1;
// b = null;
// b = undefined;
// b = anyVar; 그 무엇도 값을 저장할 수 없다!
