
function cor1(){
    if (document.querySelector('.box').classList.contains('box-color')){
        document.querySelector('.box').classList.add('box-color1');
        document.querySelector('.box').classList.remove('box-color');
    } else if (document.querySelector('.box').classList.contains('box-color2')){
        document.querySelector('.box').classList.remove('box-color2');
        document.querySelector('.box').classList.add('box-color1')
    } else if (document.querySelector('.box').classList.contains('box-color3')){
        document.querySelector('.box').classList.remove('box-color3');
        document.querySelector('.box').classList.add('box-color1')
    } else{
        document.querySelector('.box').classList.remove('box-color1');
        document.querySelector('.box').classList.add('box-color');
    }

}

function cor2(){
    if (document.querySelector('.box').classList.contains('box-color')){
        document.querySelector('.box').classList.add('box-color2');
        document.querySelector('.box').classList.remove('box-color');
    } else if (document.querySelector('.box').classList.contains('box-color1')){
        document.querySelector('.box').classList.remove('box-color1');
        document.querySelector('.box').classList.add('box-color2')
    } else if (document.querySelector('.box').classList.contains('box-color3')){
        document.querySelector('.box').classList.remove('box-color3');
        document.querySelector('.box').classList.add('box-color2')
    } else{
        document.querySelector('.box').classList.remove('box-color2');
        document.querySelector('.box').classList.add('box-color');
    }
}

function cor3(){
    if (document.querySelector('.box').classList.contains('box-color')){
        document.querySelector('.box').classList.add('box-color3');
        document.querySelector('.box').classList.remove('box-color');
    } else if (document.querySelector('.box').classList.contains('box-color1')){
        document.querySelector('.box').classList.remove('box-color1');
        document.querySelector('.box').classList.add('box-color3')
    } else if (document.querySelector('.box').classList.contains('box-color2')){
        document.querySelector('.box').classList.remove('box-color2');
        document.querySelector('.box').classList.add('box-color3')
    } else{
        document.querySelector('.box').classList.remove('box-color3');
        document.querySelector('.box').classList.add('box-color');
    }
}
