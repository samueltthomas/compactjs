var C = function () {

    var c = {};

    c.e = document.querySelector(arguments[0]);

    c.t = function (t = '') {
        if (t != '') {
            c.e.textContent = t;
            return c;
        } else {
            return c.e.textContent;
        }
    }
    c.h = function (h = '') {
        if (h != '') {
            c.e.innerHTML = h;
            return c;
        } else { 
            return c.e.innerHTML;
        }
    }

    c.o = function (event, listener) {
        c.e.addEventListener(event, listener);
    }

    return c;

}
