function ProcessResult(){
    const firstArgument = document.getElementById("firstArgument").value;
    const secondArgument = document.getElementById("secondArgument").value;
    const operationEl = document.getElementById("selectOperation");
    const operation = operationEl.options[operationEl.selectedIndex].text

    const result = document.getElementById("resultText");

    result.textContent = Calculate(firstArgument, secondArgument, operation);
}

function Calculate(arg1, arg2, operation){
    let result;
    switch (operation){
        case '+':
            result = arg1 + arg2;
            break;
        case '-':
            result = arg1 - arg2;
            break;
        case '*':
            result = arg1 * arg2;
            break;
        case '/':
            result = arg1/arg2;
            break;
        default:
            result = "undefined";
            break;
    }
    return result;
}