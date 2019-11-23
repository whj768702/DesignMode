/*
适配器用来解决两个接口不兼容的情况。
*/
class Plug {
  getName() {
    return '港版插头';
  }
}

class Target {
  constructor() {
    this.plug = new Plug();
  }
  getName() {
    return this.plug.getName() + '适配器转换插头';
  }
}

let target = new Target();
console.log(target.getName());