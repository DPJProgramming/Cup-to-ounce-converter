window.onload = function():void{
    document.getElementById("convert").onclick = main;
    
}

function main():void{

    let cupsInput:HTMLInputElement = <HTMLInputElement>document.getElementById("cups");
    let cups:string = cupsInput.value;

    let valid:boolean = validInput(cups);

    if(valid){
        let cupsSpan = cupsInput.nextElementSibling;
        cupsSpan.innerHTML = "*"; 
        calculate(cups);
    }
    else{
        cupsInput.nextElementSibling.innerHTML = "Enter a number";
    }
}

function validInput(cups):boolean{
    if(cups == "" || isNaN(cups)){
        return false;
    }
    else{
        return true;
    }
}

function calculate(cups):void{
    let totalOunces:number = cups * 8;
    displayResults(totalOunces);
}

function displayResults(totalOunces):void{
    let result:HTMLInputElement = <HTMLInputElement>document.getElementById("ounces");
    result.value = totalOunces.toString(); 
}