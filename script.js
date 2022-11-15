/*
    0  => 16x16 grid
    1  => 32x32 grid

*/

const pixel = {
    width: '0px',
    height: '0px',
    padding: '0px',
    margin: '0px',
    color: 'black',
};

const height= 500;
const width = 500;

let color_scheme = 0;

updateGrid(8);


function updateGrid(grid_dimension){

    let div = document.getElementById('main');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    pixel.width = width/(1.3 * grid_dimension + 1)+'px';
    pixel.height = pixel.width;
    pixel.margin = 0.1 * width/(1.3 * grid_dimension + 1)+'px';
    
    
    for(let i = 0; i < grid_dimension; i++){
        
        let row = document.createElement("div");
        row.style.display = "flex";
       //row.style.direction = "row";
        //row.style.justifyContent = 'center';
       
        row.id = 'row' + 0+ i; 
        document.getElementById("main").appendChild(row);
       
        for(let j = 0; j < grid_dimension; j++){
    
            let cell = document.createElement("div");
            
            cell.style.margin = pixel.margin;
            cell.style.height = pixel.height;
            cell.style.width = pixel.width;
            cell.style.background = 'black';
            let ident = 'row'+0+i;
            cell.id = 'cell'+0+i+0+j;
            document.getElementById(ident).appendChild(cell);
        }
    }   
}

let slider = document.getElementById('myRange');
let out = document.getElementById('indicator');
let txt =  slider.value + "X" +  slider.value;

out.innerHTML = txt;

slider.oninput = function(){
    out.innerHTML = this.value + "X" +  this.value;
    updateGrid(this.value);
}

function clearGrid(){
    updateGrid(slider.value);
}


let grid = document.getElementById('main');

grid.onmouseover = function(e){
    
    let element = e.target.id;

    let arr = element.split("");

    if(arr[0] == 'c'){
        
        element = arr.join("");
        console.log(element);
        let cell = document.getElementById(element);

        if(color_scheme === 0){
            pixel.color = 'red';
        }

        else{
            pixel.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        }

        cell.style.background = pixel.color;
    }
    
}


let mode = document.getElementsByName('normal')

mode[0].addEventListener('click', function(e){
    color_scheme = 0;
});

mode[1].addEventListener('click', function(e){
    color_scheme = 1; 
});
