function getRand(min, max) {
    return Math.floor( Math.random() * (max-min+1)) + min;
}

var grid; //Generated Sudoku Board
var gridPoints = [ //List of each 3x3 Grid
    [ 0,0 ],
    [ 0,3 ],
    [ 0,6 ],
    [ 3,0 ],
    [ 3,3 ],
    [ 3,6 ],
    [ 6,0 ],
    [ 6,3 ],
    [ 6,6 ]
];
var size = 9; //Number of Rows & Columns
var gridLocations = {}; //Object containing i,j coordinates => gridPoints
var hidden;
var hintUsed;

for(var i=0;i<gridPoints.length;i++) {
    var point = gridPoints[i];
    var r = point[0] , c = point[1];

    for(var j=0;j<3;j++) {
        for(var k=0;k<3;k++) {
            gridLocations[ (j+r) + "," + (k+c) ] = i;
        }
    }
}

function restart() {

    var num = document.getElementById("difficulty").value;
    num = parseInt(num);

    var div = document.getElementById("tableHolder");
    if(!num || num < 1) {
        div.innerHTML = "Please select a difficulty level";
        return;
    }

    div.innerHTML = "Generating the sudoku board";

    hintUsed = 0;
    grid = []; //Resetting the sudoku grid

    for(var i=0;i<size;i++) {
        var arr = [];
        for(var j=0;j<size;j++) {
            arr[j] = 0;
        }
        grid[i] = arr;
    }
    
    //Filling the diagonal 3x3 Grid boxes first
    fillGrid(0);
    fillGrid(4);
    fillGrid(8);

    //Filling the rest of the Cells recursively
    fillCell(0, 0);

    var html = "Hints Used : <a id='hintsUsed' >0</a><br><table align=center border=2 cellpadding=1 >";

    var copy = hideElements(num);

    for(var i=0;i<size;i++) {
        //Loop to create a Sudoku board
        html = html + "<tr>";

        for(var j=0;j<size;j++) {
            var cls;
            var loc = gridLocations[ i + "," + j ];

            if(loc%2 == 0) {
                cls = 'even';
            }
            else {
                cls = 'odd';
            }

            html += "<td class='" + cls + "'>";

            if(copy[i][j] == 0) {
                html += "<input type='text' id='grid_" + i + "_" + j + "' min=1 max=9 />";
            }
            else {
                html += copy[i][j];
            }
        }

        html += "</tr>";
    }

    div.innerHTML = html;

    hidden = copy;
    
}

//Checks if the Number can be placed in the given 3x3 Grid
function checkGrid(r,c,n) {

    for(var i=0;i<3;i++) {
        for(var j=0;j<3;j++) {
            console.log(r+i, c+j, grid[r+i]);
            if(grid[r+i][c+j] == n) {
                return false;
            }
        }
    }

    return true;
}

//Checks if Number can be placed in the given Row
function checkRow(r, n) {

    for(var i=0; i<9;i++) {
        if(grid[r][i] == n) {
            return false;
        }
    }

    return true;
}

//Checks if number can be placed in the given Column
function checkCol(c, n) {

    for(var i=0;i<9