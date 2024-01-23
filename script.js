const container = document.querySelector("#box-grid");
const btnNewGrid = document.querySelector("#btnNewGrid");
const btnClean = document.querySelector("#btnClean");
const btnColor = document.querySelector("#btnColor");

function generatesGrid(rows, columns) {
    document.documentElement.style.setProperty("--rows", rows);
    document.documentElement.style.setProperty("--columns", columns);

    const divs = [];

    for (let i = 0; i < rows; i++) {
        divs.push(document.createElement("div"));
        divs[i].classList.add("flex-div");
        container.appendChild(divs[i]);

        for (let j = 0; j < columns; j++) {

            let innerDivs = document.createElement("div");

            innerDivs.classList.add("inner-divs");

            divs[i].appendChild(innerDivs);

            if (container.children[i].children[j].classList.contains("inner-divs-actived")) {
                innerDivs.classList.add("inner-divs-actived");
            }

            innerDivs.addEventListener('mousedown', () => {
                innerDivs.classList.add("inner-divs-actived");
                innerDivs.addEventListener('mouseover', draw);
            });

            innerDivs.addEventListener('mouseup', () => {
                innerDivs.removeEventListener('mouseover', draw);
            });
        }
    }
}

function newGrid() {
    let rows = prompt("Number of rows");
    let columns = prompt("Number of columns");

    if (rows > 100 || columns > 100) {
        alert("Any of the values can't exceed 100");

        return "";
    }

    container.innerHTML = "";

    generatesGrid(rows, columns);
}


function draw() {
    this.classList.add("inner-divs-actived");
}

function clean() {
    container.innerHTML = "";
}

function setColor(color) {
    const coloredDivs = document.querySelectorAll(".inner-divs-actived");

    coloredDivs.forEach((div) => {
        let backgroundDiv = window.getComputedStyle(div);
        let lastColor = backgroundDiv.getPropertyValue("background-color");
        div.style.backgroundColor = lastColor;
    });

    document.documentElement.style.setProperty("--color", color);
}

btnClean.addEventListener("click", () => {
    clean();
    generatesGrid(4, 4)
})
btnNewGrid.addEventListener("click", () => {
    newGrid();
});
btnColor.addEventListener("input", () => {
    setColor(btnColor.value);
});

setColor("#000000")
generatesGrid(4, 4);