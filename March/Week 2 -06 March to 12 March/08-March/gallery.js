function cross() {
    document.getElementById('zoom').classList.replace('zoom' ,'none');
}
function show(n) {
    document.getElementById('zoom').classList.replace('none' ,'zoom');
    document.getElementById('load_img').src = document.getElementById(`img${n}`).src;

}