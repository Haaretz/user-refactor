declare module '*';
declare function require(module: string): any
interface window {
  expect: Chai.ExpectStatic;
}
