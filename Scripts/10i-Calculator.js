let output=""
let curr=""
let prev=""
let operator=""

function clickedNumber(num){
switch(num){
    case '+':
        case '-':
            case '*':
                case '/':
                    if(curr){
                    prev=curr
                    curr=""
                    operator=num
                    output+=operator
                    }
                    break;
                    case '=':
                        calculate(operator);
                        break;
                        default:
                            curr+=num;
                            output+=num;
                            break;
}
display();
}

function calculate(op){
    let result=0;
    let p=parseFloat(prev)
    let c=parseFloat(curr)
switch (op){
case '+':
    result=p+c;
    break;
    case '-':
        result=p-c;
        break;
        case '*':
            result=p*c;
            break;
            case '/':
                result=p/c;
                break;
                default:return;
}
output=result;
prev=output;
curr=""
operator=""
}

function display(){
    const a=document.querySelector('.show-clicked')
    a.innerText=output;
}
function clearResults(){
   output=""
    curr=""
    prev=""
    operator=""
    const b=document.querySelector('.show-clicked')
    b.innerText= ""   
}