let Auto = document.getElementById('play');
let stopAuto = document.getElementById('stop');
let imgIndex = 0;
let arrImg = ['url(imgs/1-10.jpg)','url(imgs/96903035.jpg)','url(imgs/genshin-impact-keqing-2.jpg)','url(imgs/wallpaperflare.com_wallpaper.jpg)','url(imgs/wallpaperflare.com_wallpaper45454.jpg)'];
let inter =setInterval(autoPlay,1000)
let banner = document.getElementById('banner')
function autoPlay(){
    imgIndex ++;
    banner.style.backgroundImage = arrImg[imgIndex];
    if (imgIndex>arrImg.length-1) {
        imgIndex =0;
    banner.style.backgroundImage = arrImg[imgIndex];
    }
}
Auto.addEventListener('click',function() {
    inter =setInterval(autoPlay,1000);
})
stopAuto.addEventListener('click',function() {
    clearInterval(inter);
})
