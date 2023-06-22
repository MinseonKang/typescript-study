/**
 * 클래스 class
 */

let StudentA = {
  name: "강민선",
  grade: "A+",
  age: 24,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("강민선2", "A+", 24); // 스튜던트 인스턴스
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new studentDeveloper("강민선", "B+", 24, "Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
