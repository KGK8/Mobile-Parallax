window.addEventListener('deviceorientation',function(e){
    const x = e.beta;
    const y = e.gamma;
    const z = e.alpha;

    document.getElementsByClassName('xtxt').innerText = "X-Axis = " + x;
    document.getElementsByClassName('ytxt').innerText = "Y-Axis = " + y;
    document.getElementsByClassName('ztxt').innerText = "Z-Axis = " + z;



});