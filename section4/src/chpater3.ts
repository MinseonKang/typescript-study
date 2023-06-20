/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  // 선택적 프로퍼티로 설정해야 함 (12번 줄의 오버로드 시그니처 참고)

  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + b);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
