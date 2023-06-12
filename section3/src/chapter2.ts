/**
 * unknown 타입 -> 모든 타입의 슈퍼 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined; // 업캐스팅

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar; //다운캐스팅
}

/**
 * never 타입 -> 모든 타입의 서브 타입 (공집합 : 아무것도 없는 집합)
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc(); //업캐스팅

  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true; // 다운캐스팅
}

/**
 * void 타입 -> 중간에 있는 타입. undefined의 슈퍼 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined; //업캐스팅
}

/**
 * any 타입 -> never 타입 제외하고 모든 캐스팅이 가능
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar; // never타입으로 다운캐스팅할 순 없다 (never는 진짜 공집합이기 때문에!)
}
