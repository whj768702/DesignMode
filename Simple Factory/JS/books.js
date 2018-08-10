function createBook(name, time, type) {
    const obj = new Object();
    obj.name = name;
    obj.time = time;
    obj.type = type;
    obj.getName = function() {
        console.log(this.name);
    }
    return obj;
}

const book1 = createBook('js book', 2018, 'js');
const book2 = createBook('html book', 2017, 'html');
book1.getName();
book2.getName();