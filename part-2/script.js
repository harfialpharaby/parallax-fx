$(window).scroll(function() {
    var top = $(this).scrollTop();
    var layers = document.getElementsByClassName("keyart");

    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
    }
});