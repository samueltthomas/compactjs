var C = function (s) {

    var c = {};
    var d = document;
    
    if(typeof(s)=='string') {
        c.e = d.querySelector(s);
    }
    else {
        c.e = s;
    }
        
    // Text
    
    c.t = (t = '') => {
        if (t != '') {
            c.e.textContent = t;
            return c;
        } else {
            return c.e.textContent;
        }
    }
    
    // HTML
    
    c.h = (h = '') => {
        if (h != '') {
            c.e.innerHTML = h;
            return c;
        } else { 
            return c.e.innerHTML;
        }
    }
    
    // Event

    c.o = (event, listener) => {
        c.e.addEventListener(event, listener);
    }

    return c;

}
