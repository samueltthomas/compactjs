# Compact JS

Compact JS is a lightweight client-side JavaScript library which provides a very compact API to interact with the HTML DOM. It is compact both in terms of the library size and the API.  

The library is now just my hobby project only and its not ready for production use.

## Example 

```javascript
    
    // In the place of #id you can use any CSS selector. 
    
    C('#id').t('Compact JS'); // Set Text
    C('#id').t() // Get Text
    
    C('#id').h('<h1>Compact JS</h1>'); // Set HTML
    C('#id').h() // Get HTML
    
    C('#id').v('Compact JS'); // Set Value
    C('#id').v() // Get Value
    
    C('#id').ac('class'); // Add Class
    C('#id').rc('class'); // Remove Class
    
    C('#id').on('click',function() { console.log(C(this).t()); }); // Event Handling
    
 ```
