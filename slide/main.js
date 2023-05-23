let arrImg = ['anh1.webp','anh2.webp','anh3.webp','anh4.webp','anh5.webp'];
let imgIndex = 0;
let inter;
let img = document.getElementById('anh');
let startBtn = document.getElementById('play');
let stopBtn = document.getElementById('stop')
let count = document.getElementById('count');
function playAuto() {
    imgIndex++;
    img.src = arrImg[imgIndex];
    console.log(img);
    if (imgIndex>arrImg.length-1) {
        imgIndex = 0;
        img.src = arrImg[imgIndex];
        
    }
    count.innerText = imgIndex+1;
}
startBtn.addEventListener('click',function() {
    inter = setInterval(playAuto,1000);
});
stopBtn.addEventListener('click',function () {
    clearInterval(inter);
});

