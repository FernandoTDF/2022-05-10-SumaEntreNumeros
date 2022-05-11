let num1:number = Number(prompt("ingrese el primer numero"));
let num2:number = Number(prompt("ingrese el segundo numero"));
let suma:number = 0;

if (num1>num2){
  for(let i=num2; i<=num1;i++){
    suma= suma+i;
    console.log("suma de "+i + "es " + suma);
  }
} else if (num2>num1){
    for(let i=num1; i<=num2;i++){
      suma= suma+i;
      console.log("suma de "+i + "es " + suma);
    }
} else if (num1==num2){
  console.log("ingrese dos numeros distintos");
};