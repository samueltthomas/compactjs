# Compact JS

Compact JS is a lightweight client-side JavaScript library which provides a very compact API to interact with the HTML DOM. It is compact both in terms of the file size and the API. 

My goal with this library is to keep everything short and simple instead of being semantic. Hence all of the methods are defined with very short names. Also I would like the library to be as minimalistic as possible. So currently I have implemented only some of the most commonly needed functions. 

Compact JS is not intended to be an alternative to any other feature-rich libraries out there like jQuery. It's just a project that I created to enhance my JavaScript skills and to contribute something back to the community along the way. I hope that this will be useful for you in some use cases where other libraries may be an overkill. 

### Caution

Compact JS is not suitable for large scale projects since direct manipulation of the DOM results in code that is difficult to maintain. Projects like Angular, React, VueJS etc provide better solutions for such use cases. 

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
    
    C('#id').ac('class'); // Add Class
    C('#id').rc('class'); // Remove Class
    
    // Event Handling. In the place of 'click' you can use any other valid event name
    
    C('#id').on('click',function() { console.log(C(this).t()); }); 
    
    
 ```
