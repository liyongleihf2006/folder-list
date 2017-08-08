const fs = require("fs");
const globby = require("globby");
module.exports=function(pattern,options){
    return globby.sync(pattern,options)
        .filter(function(dir){
           return fs.statSync(dir).isDirectory();
        });
};
