const a = function ()  {
    b();
    function b() {
    console.log(nameOfaPerson);
    }
};

const nameOfaPerson = "GunaSheelan";
a();

// lexical Env created whenever the global excecution context is created
// Lexical Environment is the local memory along with lexical Environment of it's parent 
// What is lexical 
// lexical is a term means hierarchy 

//             Global Execution Context (The Global Execution Context Pointing To The Null);
//  -------------------------------------------
//  -    --------------------------------     -
//  -    -              a()             -     -
//  -    -                              -     -
//  -    -        -------------         -     -
//  -    -        -           -         -     -
//  -    -        -  LEXCICAL -         -     -
//  -    -        -     b()   -         -     -
//  -    -        -------------         -     -
//  -    -                              -     -
//  -    --------------------------------     -
//  -------------------------------------------