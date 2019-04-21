function creatnail() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.backgroundColor = '#006bff';
    div.style.position = 'absolute';
    div.style.left = initLeft + 'px';
    div.style.top = initTop +'px';
    div.style.display = 'block';
    return div;
}
function randomApple() {
    var random1 = parseInt(Math.random()*50) * 10;
    var random2 = parseInt(Math.random()*50) * 10;
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.backgroundColor = randomColor();
    div.style.position = 'absolute';
    div.style.left = initLeft + random1 +'px';
    div.style.top = initTop +  random2 +'px';
    div.style.display = 'block';
    return div;
}
function eatfood(){
    body[count] = creatnail();
    count ++ ;
}
function ahead(direct) {
    if (direct === 0){
        body[0].style.left = parseInt(body[0].style.left) - 10 + 'px';
    } else if(direct === 1){
        body[0].style.top = parseInt(body[0].style.top) - 10 +'px';
    }else if (direct === 2){
        body[0].style.left = parseInt(body[0].style.left) + 10 +'px';
    } else if (direct === 3){
        body[0].style.top = parseInt(body[0].style.top) + 10  +'px';
    }
}
function overBord(div,width,height) {
    if(parseInt(div.style.top) > initTop + height){
        div.style.top = initTop + 'px';
    }else if(parseInt(div.style.left) > initLeft + width){
        div.style.left = initLeft +  'px';
    }else if(parseInt(div.style.top) < initTop ){
        div.style.top = initTop + height + 'px';
    }else if (parseInt(div.style.left) <  initLeft ){
        div.style.left = initLeft + width + 'px';
    }
    return div;
}
function randomColor() {
    var r=Math.floor(Math.random()*156) + 50;
    var g=Math.floor(Math.random()*156) + 50;
    var b=Math.floor(Math.random()*156) + 50;
    return "rgb("+r+','+g+','+b+")"
}
function die() {
    for(var i = 1; i < count ; i++ ) {
        if (parseInt(body[0].style.left) === parseInt(body[i].style.left)
            && parseInt(body[0].style.top) === parseInt(body[i].style.top)) {
            dieKey = true;
            break;
        }
    }
}
function reborn() {
    for(var i = 0; i < count; i++) {
        body[i].style.left = initLeft + 'px';
        body[i].style.top = initTop + 'px';
        beleft[i - 1] = initLeft + 'px';
        betop [i - 1] = initTop + 'px';
    }
    direct = 2;
    dieKey = false;
}