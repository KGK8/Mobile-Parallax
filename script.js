window.addEventListener('deviceorientation',function(e){
    const x = e.beta;
    const y = e.gamma;
    const z = e.alpha;

    document.getElementsByClassName('xtxt')[0].innerText = "X-Axis = " + x;
    document.getElementsByClassName('ytxt')[0].innerText = "Y-Axis = " + y;
    document.getElementsByClassName('ztxt')[0].innerText = "Z-Axis = " + z;



});