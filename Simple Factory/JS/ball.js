// 篮球基类
const Basketball = function () {
    this.ball = '篮球';
}
Basketball.prototype = {
    getMember: function () {
        console.log('每队最少5人');
    },
    getBallSize: function () {
        console.log('篮球不小');
    }
}
// 足球基类
const Football = function () {
    this.name = '足球';
}
Football.prototype = {
    getMember: function () {
        console.log('每队要11人');
    },
    getBallSize: function () {
        console.log('足球不小');
    }
}
// 网球基类
const Tennis = function () {
    this.name = '网球';
}
Tennis.prototype = {
    getMember: function () {
        console.log('每队最少1人');
    },
    getBallSize: function () {
        console.log('网球比较小');
    }
}

// 球类工厂
const BallFactory = function (name) {
    switch (name) {
        case 'NBA':
            return new Basketball();
        case 'wordCup':
            return new Football();
        case 'FrenchOpen':
            return new Tennis();
    }
}

// 使用
// 创建各种球
const football = BallFactory('wordCup');
console.log(football.name);
