function get_w_w() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function get_w_h() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function balloon_message(msg, life) {
    life = life ? (life * 1000) : 20000;
    var html = '<span class="wave-txt">' +
        msg +
        '</span><div class="offset-col">' +
        msg +
        '</div>';
    var b = $('<p>')
        .addClass('wave-wrap')
        .html(html)
        .appendTo('body')
    var x = (get_w_w() - $('.wave-txt').width()) / 2;
    var y = 450;
    b.css({
        top: y,
        left: x
    })
    b.animate({
        opacity: 0,
        top: 60
    }, life, function () {
        $(this).remove()
    })
}