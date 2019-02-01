 // greeter
(function (gb, $) {
    var greet = function (name, langu) {
        return new greet.init(name, langu);
    }
    var langArr = ["en", "kn"];
    var greetString = {
        en: " Hello "
        , kn: " Namaskara "
    }
    greet.init = function (name, langu) {
        this.name = name;
        this.langu = langu;
    }
    greet.prototype = {
        getName: function () {
            console.log(this.name);
            return this;
        }
        , validate: function (langu) {
            if (langArr.indexOf(langu) === -1) {
                throw "LANG NOT FOUND";
            }
            else console.log(" Langu found");
            return this;
        }
        , sayHello: function (selector) {
            if (!$) console.log(" Jqeury Not found ");
            else $(selector).html(greetString[this.langu] + "  " + this.name);
            return this;
        }
        , changeLangu: function (langu) {
            this.validate(langu);
            this.langu = langu;
            return this;
        }
    }
    greet.init.prototype = greet.prototype;
    gb.greet = gb._R = greet;
}(window, jQuery));
// greeter with pure object prototyping 
(function (gb, $) {
    var langArr = ["en", "kn"];
    var greetString = {
        en: " Hello "
        , kn: " Namaskara "
    }
    var greetProto = {
        name: "Unown"
        , langu: "Unown"
        , getName: function () {
            console.log(this.name);
            return this;
        }
        , validate: function (langu) {
            if (langArr.indexOf(langu) === -1) {
                throw "LANG NOT FOUND";
            }
            else console.log(" Langu found");
            return this;
        }
        , sayHello: function (selector) {
            if (!$) console.log(" Jqeury Not found ");
            else $(selector).html(greetString[this.langu] + "  " + this.name);
            return this;
        }
        , changeLangu: function (langu) {
            this.validate(langu);
            this.langu = langu;
            return this;
        }
    }
    var greet2 = Object.create(greetProto);
    greet2.init = function (name, langu) {
        this.name = name;
        this.langu = langu;
        return this;
    };
    gb.greet2 = gb.$R = greet2;
}(window, jQuery));