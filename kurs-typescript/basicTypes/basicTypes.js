// class BasicTypes {
//   name: string = 'Reksio';
//   age: number = 5;
//   colors: string[] = ['czarny', 'biały'];
//   dates: Array<Date> = [new Date(), new Date()];
//   pair: [string, number] = ['poniedzialek', 1];
//   xyz: any = 222;
//
// }
//
// class ExampleFunction {
//   msg: string = 'hello world';
//   showMsg() {
//     console.log(this.msg);
//   }
//
// }
// hello4 = message => console.log('Witaj świecie, funkcja fat arrow' + message);
//
// var example = new ExampleFunction()
//     example.showMsg();
//
//
// example.hello4('wywołana');
var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.msg = 'Witaj świecie';
    }
    return ThisProblem;
}());
printFunction();
{
    return function () {
        console.log(this.msg);
    };
}
var example = new ThisProblem();
var fun = example.printFunction();
fun();
