/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "강민선",
  profile: {
    nickname: "sunny",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // any 타입으로 추론된다 (암묵적 any타입. 타입이 진화한다!) (권장 x)
d = 10; // number 타입으로 추론된다
d.toFixed();

d = "hello"; // string 타입으로 추론된다
d.toUpperCase();

const num = 10; // 리터럴 타입으로 추론된다 (const는 상수이기 때문!)
const str = "hello";

let arr = [1, "string"]; // union 타입으로 추론된다
