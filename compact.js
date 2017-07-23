var C = function (s) {

    var c = {};
    var d = document;

    if (typeof (s) === 'string') {
        c.e = [].slice.call(d.querySelectorAll(s));
    } else {
        c.e = [s];
    }

    // Text

    c.t = (t = '') => {
        if (t != '') {
            c.e.map((e) => {
                e.textContent = t;
            });
            return c;
        } else {
            return c.e[0].textContent;
        }
    }

    // HTML

    c.h = (h = '') => {
        if (h != '') {
            c.e.map((e) => {
                e.innerHTML = h;
            });
            return c;
        } else {
            return c.e[0].innerHTML;
        }
    }
    
    // Value

    c.v = (v = '') => {
        if (v != '') {
            c.e.map((e) => {
                e.value = v;
            });
            return c;
        } else {
            return c.e[0].value;
        }
    }

    // Event

    c.on = (event, listener) => {
        c.e.map((e) => {
            e.addEventListener(event, listener);
        });
    }

    return c;

}
