// Event handlers 
function waitSometime(a) {
    var val = new Date().getTime();
    val = val + (a * 2000);
    while (val > new Date()) {}
    console.log(" Waited some time ");
    waitSomeMoretime(a);
}

function waitSomeMoretime(a) {
    var val = new Date().getTime();
    val = val + (a * 200);
    while (val > new Date()) {}
    console.log(" Waited some more time, and checked primitive values  ");
}
waitSometime(1);
var count = 1;

function handleFun() {
    console.log(" Click event captured " + count++);
}
document.addEventListener('click', handleFun);
// handleFun is pushed into event queue and executes only after execution context stack is empty, here is runs after waitSomeMoretime();