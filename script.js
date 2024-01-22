const container = document.querySelector("#box-grid");
const btnNewGrid = document.querySelector("#btNewGrid");

document.documentElement.style.setProperty("--rows", 4);
    document.documentElement.style.setProperty("--columns", 4);

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

            innerDivs.addEventListener('mouseover', () => {

                innerDivs.classList.add("inner-divs-actived")
            })

        }
    }
}

function newGrid(){
    let rows = prompt("Number of rows");
    let columns = prompt("Number of columns");

    // Limpa o container antes de gerar um novo grid
    container.innerHTML = "";

    generatesGrid(rows, columns);
}


btnNewGrid.addEventListener("click", () => {
    newGrid()
})

generatesGrid(4, 4)