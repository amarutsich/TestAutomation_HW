let Var1 = 'true'
let Var2 = false;
let Var3 = 17;
let Var4;
let Var5 = null; //bug of JS, typeof(null) - object

console.log(
    "Variable: Var1, have type: " + typeof(Var1) +
    "\nVariable: Var2, have type: " + typeof(Var2) +
    "\nVariable: Var3, have type: " + typeof(Var3) +
    "\nVariable: Var4, have type: " + typeof(Var4) +
    "\nVariable: Var5, have type: " + typeof(Var5)  
)