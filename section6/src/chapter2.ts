/**
 * 접근 제어자 (access modifier) => public, private, proteced
 */

class Employee {
  // 필드
  private name: string; // 모든 범위에서 접근 가능
  protected age: number; // 클래스 내부에서만 접근 가능
  public position: string; // 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일하는 중`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("강민선", 24, "developer");
// employee.name = "강민선2";

console.log(employee);
