let num1:number = Number(prompt("ingrese el primer numero"));
let num2:number = Number(prompt("ingrese el segundo numero"));
let suma:number = 0;

if (num1>num2){
  for(let i=num2; i<=num1;i++){
    let sumaPrevio:number=suma;
    suma= suma+i;
    console.log("suma de "+i + " + "+ sumaPrevio + " = " + suma);
  }
} else if (num2>num1){
    for(let i=num1; i<=num2;i++){
      let sumaPrevio:number=suma;
      suma= suma+i;
      console.log("suma de "+i + " + "+ sumaPrevio + " = " + suma);
    }
} else if (num1==num2){
  console.log("ingrese dos numeros distintos");
};