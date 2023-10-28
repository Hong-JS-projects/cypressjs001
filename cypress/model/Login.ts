interface Info {
  name: string;
  age?: number;
  email?: string;
  password?: string;
}

export class Login implements Info {
  name: string;
  age: number;
  email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

export const Format = (info: Info): string => {
  return `${info.age + ":" + info.email + ":" + info.password}`;
};
