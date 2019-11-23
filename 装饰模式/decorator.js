function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Test {
  @readonly
  name = 'test';
}

let t = new Test();
t.name = 'test2';