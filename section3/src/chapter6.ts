/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // Person 타입으로 간주하라 (타입 단언)
person.name = "강민선";
person.age = 24;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "새해",
  color: "brown",
  breed: "시츄",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string; // 다중 단언 (권장 x)

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "나비",
  colot: "black",
} as const; // readonly 프로퍼티가 된다

// cat.name = ""; // 오류

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "강민선",
};

const len: number = post.author!.length;
