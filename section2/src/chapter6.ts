// any : 특정 변수의 타입을 우리가 확실히 모를 때 사용 (최대한 사용하지 않는 걸 권장)

let anyVar: any = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown : any와 비슷하지만 보다 안전한 타입 (오직 값을 저장하는 행위만 가능)
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//num = unknownVar; // any 타입과 다르게 unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없다!
if (typeof unknownVar === "number") {
  num = unknownVar;
} // 타입 정제

// any 타입보다 unknown을 활용하는 게 더 좋을 것 같다!
