let clientsCount = document.getElementById("clientNumber");
let employeeCount = document.getElementById("employeesNumber");
let dauCount = document.getElementById("dauNumber");

function startCounter(element, max, speedy) {

    const counter = setInterval(count);

    const speed = max / speedy;
    let current = 0;

    function count() {
        current += speed;

        element.innerText = parseInt(current);

        if(parseInt(current) === parseInt(max)) {
            clearInterval(counter)
        }
    }

}

startCounter(clientsCount, 3000, 400);
startCounter(employeeCount, 180, 600);
startCounter(dauCount, 10000, 700);
