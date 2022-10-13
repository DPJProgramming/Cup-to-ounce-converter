window.onload = function():void{
    document.getElementById("convert").onclick = main;
    
}

function main():void{

    let cupsInput:HTMLInputElement = <HTMLInputElement>document.getElementById("cups");
    let cups = cupsInput.value;

    let valid:boolean = validInput(cups);

    if(valid){
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