/**
 * 
 * @param {HTMLtableValue} table 
 * @param {number} col 
 * @param {boolean} up 
 */
document.querySelectorAll(".table-sort th").forEach(headerValue => {
    headerValue.addEventListener("click", () => {
        var colUp = headerValue.classList.contains("sortUp");
        var tableValue = headerValue.closest('.table');
        var headerArray=Array.prototype.indexOf.call(headerValue.parentElement.children, headerValue);
		sortCol(tableValue, headerArray, !colUp);
    });
});

function sortCol(table, col, up = true) {
    var tBod = table.tBodies[0];
    var rows = Array.from(tBod.querySelectorAll("tr"));
	var direction = up ? 1 : -1;

    for(var i=0; i<tBod.length; i++){
        tBod.removeChild(tBod.firstChild);
    }

    table.querySelectorAll("th").forEach(th => th.classList.remove("sortUp", "sortDown"));
    table.querySelector(`th:nth-child(${col+1})`).classList.toggle("sortDown", !up);
    table.querySelector(`th:nth-child(${col+1})`).classList.toggle("sortUp", up);

    //This is used to detrmine if column needing sorting is the height column.
    if (col !== 4) {
        var rowSort = rows.sort((r1, r2) => {
            var r1Col = r1.querySelector(`td:nth-child(${col+1})`).textContent.trim();
            var r2Col = r2.querySelector(`td:nth-child(${col+1})`).textContent.trim();
            return r2Col < r1Col?(1*direction):(-1*direction);
    })
    }
    else {
        var rowSort = rows.sort((r1, r2) => {
            var r1Int = parseFloat(r1.querySelector(`td:nth-child(${col+1})`).textContent.trim().replace('$', ''));
            var r2Int = parseFloat(r2.querySelector(`td:nth-child(${col+1})`).textContent.trim().replace('$', ''));
            return r2Int < r1Int ? (1*direction):(-1*direction);
    })
    }

	tBod.append(...rowSort);
}