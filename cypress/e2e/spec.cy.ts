import { function3, User } from "../model/User";
import { Format } from "../model/Login";

describe("New version", () => {
  it("test", () => {
    cy.log("Hello Senghong");
    cy.readFile("../downloads/image.png");
  });
});
// Call from other classes
const users = new User();
users.function1();
users.function2("Hang Senghongd", 43);

// users.newAddress()
type persion = {
  name: string;
  age: number;
  descript: any;
};

const function1 = (persion?: persion) => {
  return `My name is: ${persion?.name} and ${persion?.age} years old and ${persion?.descript}`;
};

// ? More description

const testing = [12, 23, 234, 23, 4, 23, 42, 3, 32342, 32, 423, 345];

describe("New Version With Typescript", () => {
  it("should", () => {
    cy.visit(
      "https://www.google.com/search?q=how+to+read+image+in+cypress&rlz=1C1GCEA_enKH1075KH1075&oq=how+to+read+image+in+cypress&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIKCAIQABixAxiKBTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDk2ODJqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"
    );
    cy.log(
      `I will check it ${function1({
        name: "Hang Senghong",
        age: 32,
        descript: "Hasha",
      })}`
    );

    expect(1).to.equal(1);
  });
});
