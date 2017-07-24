var C = function (s) {

    var c = {};
    var d = document;
    
    if (typeof (s) === 'string') {
        c.e = [].slice.call(d.querySelectorAll(s));
    } 
    else if (typeof (s) === 'function') {
        document.addEventListener("DOMContentLoaded", (event) => {
            s();
        });
    }
    else {
        // To handle C(this)
        c.e = [s];
    }


    // Ready Event


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

    // Data

    c.d = (d = '', v = '') => {
        if (d != '' && v != '') {
            c.e.map((e) => {
                e.dataset[d] = v;
            });
            return c;
        } else if (d != '') {
            return c.e[0].dataset[d];
        }
    }

    // Remove Element From DOM

    c.x = () => {
        c.e.map((e) => {
            try {
                e.parentNode.removeChild(e);
            } catch (e) {

            }
        });
    }

    // Add Class

    c.ac = (ac) => {
        c.e.map((e) => {
            e.classList.add(ac);
        });
        return c;
    }

    // Remove Class

    c.rc = (rc) => {
        c.e.map((e) => {
            e.classList.remove(rc);
        });
        return c;
    }

    // Event

    c.on = (event, listener) => {
        c.e.map((e) => {
            e.addEventListener(event, listener);
        });
    }




    return c;

}
