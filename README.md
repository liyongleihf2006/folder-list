**folder-list**  

user [globby](https://www.npmjs.com/package/globby)'s grammar to gets all folders for pattern matching  

**Install**  

`$ npm install --save folder-list`  

**Usage**  

├── src  

        ├── folder1  
        
               ├── folder11  
               
               ├── folder12  
               
               ├── file11.js  
               
               ├── file12.js  
               
        ├── folder2  
        
        ├── folder3  
        
        ├── file1.js  
        
        ├── file2.js  
        
        └── .idea  
        
 const fl = require('folder-list');  

 var folders=fl(['src/**', '!**/.*']);  
 
 console.log(folders);  
 
 //[ 'src', 'src/folder1','src/folder1/folder11','src/folder1/folder12', 'src/folder2','src/folder3' ]  

**API**  

**fl.sync(patterns, [options])**  
Returns an array of matching folders.  

**Globbing patterns**  

Just a quick overview.  

- * matches any number of characters, but not /
- ? matches a single character, but not /
- ** matches any number of characters, including /, as long as it's the only thing in a path part
- {} allows for a comma-separated list of "or" expressions
- ! at the beginning of a pattern will negate the match
