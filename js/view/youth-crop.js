var dataToSend = null
function removePopup() {
    $('.J_cache_img').html('').append($('.J_preview_view img'));
    $('.J-wrap-div').remove()
    $('.J_crop_imgs,.J_crop_imgs div').removeClass('none')
    $('.J_example').remove()
}
$('body').on('click', '.J_close,.J_cancel', function () {
    removePopup();
    return false
})
function getIndex() {
    var index = 0
    if ($ele.nextAll('.none').length == 0) {
        index = 1
    }
    return index;
}
$('body').on('click', '.J_save', function () {
    if (dataToSend == null) {
        return
    }
    var index = getIndex();
    $('.J_crop_imgs div').eq(index).html('').append($('.J_preview_view img'))
    $ele
        .data('clip', dataToSend)
        .val(curSrc)
    removePopup();
    showYesIcon($ele.next('label'))
    return false
})
function setCrop() {
    var $JCacheImg = $('.J_cache_img img');
    if ($JCacheImg.length) {
        $('.J_big_img').attr('src', $JCacheImg.attr('src'))
    }
    var options = {
        aspectRatio: 4 / 3,
        preview: '.J_preview_view',
        crop: function (data) {
            dataToSend = data
        }
    };
    $('.J_big_img').cropper(options);
}