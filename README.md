# Compact JS

Compact JS is a lightweight client-side JavaScript library which provides a very compact API to interact with the HTML DOM. It is compact both in terms of the file size and the API. 

Compact JS is not intended to be an alternative to any other feature-rich libraries out there like jQuery. It's just a project that I created to enhance my JavaScript skills and to contribute something back to the community along the way. I hope that it will be beneficial for you in some scenarios where using other libraries may be an overkill. Also, the project's source code is very easy to understand. If you take a look at it, you will get a clear picture of how the various methods are implemented. If you just need only a subset of the features, feel free to grab only the necessary code.

My goal with this library is to keep everything short and simple instead of being semantic. Hence all of the methods are defined with very short yet easy to remember names. Also, I would like the library to be as compact as possible. So currently I have implemented only some of the most commonly needed functions. If you would like any other features to be included please let me know.

### Caution

Compact JS is not suitable for large scale projects since direct manipulation of the DOM results in code that is difficult to maintain. Projects like Angular, React, VueJS etc provide better solutions for such use cases. 

Also, Compact JS uses many of the latest DOM APIs. So please do not use it in projects where you need compatibility with old browsers.

## Examples 

```javascript

    C(() => {
        console.log('DOM loaded');
    });
    
    // In the place of #id you can use any CSS selector. 
    
    C('#id').t('Compact JS'); // Set Text
    C('#id').t() // Get Text
    
    C('#id').h('<h1>Compact JS</h1>'); // Set HTML
    C('#id').h() // Get HTML
    
    C('#id').v('Compact JS'); // Set Value
    C('#id').v() // Get Value
    
    C('#id').x(); // To remove element from the DOM
    
    C('#id').d('cost',100); // Set data-cost attribute
    C('#id').d('cost'); // Get data-cost attribute
    
    C('#id').s({
        "background-color": "#eee",  // Add Styles
        "font-size": "20px",
    });
    
    C('#id').s(); // Get All Styles
    C('#id').s('font-size') // Get the value of the specified style
    
    C('#id').ac('class'); // Add Class
    C('#id').rc('class'); // Remove Class
    C('#id').hc('class'); // Has Class ? Returns true or false
    
    // Event Handling. In the place of 'click' you can use any other valid event name
    
    C('#id').on('click',function() { 
        console.log(C(this).t()); 
    }); 
    
    
 ```
