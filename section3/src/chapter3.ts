/**
 * 기본 타입간의 호환성
 */

let num1: number = 10; // number: 슈퍼 타입
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮을까?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "새해",
  color: "brown",
  breed: "시츄",
};

animal = dog; // 업 캐스팅
// dog = animal; // 다운 캐스팅

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactJS",
};

book = programmingBook; // 업 캐스팅
// programmingBook = book; // 다운 캐스팅
console.log(book); // { name: '한 입 크기로 잘라먹는 리액트', price: 33000, skill: 'reactJS' }

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactJS",
};

let book3: Book = programmingBook; // 초과 프로퍼티 검사에 걸리지 않는다

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactJS",
});
func(programmingBook);
