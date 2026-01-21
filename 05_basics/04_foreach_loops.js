const { jsx } = require("react/jsx-runtime");

const language = ['java','python','js','c++']
language.forEach(item => {
    // console.log(item);
    
    
});
// language.forEach(function(val) {
    // console.log(val);
    
// });

language.forEach((item,index,array )=> {
    // console.log(item,index,array);
    
    
});

const mycode = [{
    filename : 'js',
    languagename : 'javascript'
},
{
    filename : "java",
    languagename : 'java'},
{
    filename : 'py',
    languagename : 'python'
}]

mycode.forEach((item) => {
    console.log(item.languagename);
    
    
});