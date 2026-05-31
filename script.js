
 function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}

function changeColor(color){
    if(typeof color ==='string' && color.trim() !==''){
        document.body.style.backgroundColor=color;
    }
    else{
        console.log("invalid color");
    }
}

