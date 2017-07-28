var C = function (s) {

    var c = {};
    var d = document;

    if (typeof (s) === 'string') {
        c.e = [].slice.call(d.querySelectorAll(s));
    } else if (typeof (s) === 'function') {
        document.addEventListener("DOMContentLoaded", (event) => {
            s();
        });
        return true;
    } else {
        // To handle C(this)
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

    // Data Attribute

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

    // Styles

    c.s = (s = '') => {
        if (s === '') {
            return window.getComputedStyle(c.e[0]);
        } 
        else if(typeof(s)=='string') {
            return c.e[0].style[s];
        }
        else if(typeof(s)=='object') {
            c.e.map((e) => {
                for (var k in s) {
                    e.style[k] = s[k];
                }
            });
        }
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
    
    
    // Has Class
    
    c.hc = (hc) => {
        if(c.e[0].classList.contains(hc)) {
            return true;
        }
        return false;
    }

    // Event Handling

    c.on = (event, listener) => {
        c.e.map((e) => {
            e.addEventListener(event, listener);
        });
    }

    return c;

}
