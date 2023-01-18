home = document.getElementById('home');
let images = new Array (
    "images/asset\ 21.jpeg",
    "images/asset\ 19.jpeg",
    "images/asset\ 17.jpeg"
);

let i=0;
let length=images.length;
// home.style.backgroundImage = `url('${images[i]}')`;

function slider(){
    if(i>length-1){
        i=0;
    }
    home.style.backgroundImage = `url('${images[i]}')`;
    i++;
    setTimeout('slider()',9000)

}