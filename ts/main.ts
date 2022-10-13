window.onload = function onClick(){
    document.getElementById("convert").onclick = main;
}

function main():void{

    let cups:HTMLInputElement = <HTMLInputElement>document.getElementById("cups");

    let validInput:boolean = valid();

    if(validInput){
        calculate(cups.value);
    }

}