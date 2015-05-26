window.$ele = null, curSrc = ''
function showYesIcon(label) {
    label
        .html("&nbsp;")
        .html('<img src="../../../images/special/youth/y.png" width="21" height="20"/>');
}
setBigImg = function (src) {
    var $JBigImg = $('.J_big_img');
    curSrc = src;
    $JBigImg.cropper('replace', src)
}
var validatorImg = null
function loadPopCrop() {
    $ele = $(this).next('.none')
    $('<div>')
        .addClass('load-wrap-div J-wrap-div')
        .insertAfter('.J_form')
        .load('/ajax/crop.html', function () {
            validatorImg = $('.J_img_form').validate()
            setCrop()
            bindChange($('[name="img"]'), readImage);
        })
}
function setCropImg(file) {
    $('.J_img_form').submit()
}
$(function () {
    if (islogined == '0') {
        $('.J_form input').click(function () {
            $("#loginBox").click();
            return false;
        })
        return;
    }
    var imgMsg = '请上传照片',
        videoMsg = '请上传视频'
    var options = {
        debug: true,
        ignore: '',
        rules: {
            name: {
                required: true,
                maxlength: 15
            },
            gender: "required",
            qq: {
                required: true,
                maxlength: 12,
                number: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 11,
                isPhoneNum: true
            },
            job: {
                required: true
            },
            favorite: {
                required: true
            },
            'J_song-video': {required: true},
            'J_resolve-video': 'required',
            'J_img': 'required',
            'J_img2': 'required'
        },
        messages: {
            name: {
                required: '请填写您的真实姓名'
            },
            gender: '请选择性别',
            qq: {
                required: '请填写您的QQ号码'
            },
            phone: {
                required: '请填写您的手机号码'
            },
            job: '请填写您的职业',
            favorite: '请填写您的兴趣爱好',
            'J_song-video': {
                required: videoMsg
            },
            'J_resolve-video': videoMsg,
            J_img: imgMsg,
            J_img2: imgMsg
        },
        // specifying a submitHandler prevents the default submit, good for the demo
        submitHandler: function (form, eve) {
            var $form = $(form);
            // arr is an array containing two object like {"x":156.042857142857,"y":208.42380952380944,"width":1986.4000000000003,"height":1489.8,"rotate":0}
            var arr = $('[name^="J_img"].none').map(function () {
                return $(this).data('clip');
            })
            $('[name="size1"]').val(JSON.stringify(arr[0]))
            $('[name="size2"]').val(JSON.stringify(arr[1]))
            $form.attr({'disabled': 'disabled'})
            form.submit();
        },
        // set this class to error-labels to indicate valid fields
        success: function (label) {
            // set &nbsp; as text for IE
            showYesIcon(label);
        },
        invalidHandler: function (event, validator) {
        }
    };

    var validator = $(".J_form").validate(options);
    jQuery.validator.addMethod("isPhoneNum", function (value, element) {
        return /(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/.test(value)
    }, "请填写有效的11位手机号码！");
    var $songVideo = $('[name="J_song-video"],[name="J_resolve-video"]');
    $('[name="J_song-video-mask"]').click(function (e) {
        e.preventDefault();
        $(this).nextAll('.none:first').click();
    });
    $('[name^="J_img_mask"]').click(function () {
        if (islogined == '0') {
            $("#loginBox").click();
        } else {
            loadPopCrop.call(this)
        }
    })
    function readVideo(file, that) {
        var obj = {}, val = '';
        if (!/^.+\.(swf|avi|flv|mpg|rm|mov|wav|mp4|asf|3gp|mkv|wmv|rmvb)$/i.test(file.name)) {
            val = "请上传视频类格式的文件";
        } else if (getKb(file) / 1024 > 100) {
            val = "不能超过100MB"
        }
        if (val == '') {
            $(that).prevAll('[name="J_song_name"]').val(file.name)
            showYesIcon($(that).next('label'))
        } else {
            obj[$(that).attr('name')] = val
            validator.showErrors(obj);
        }
    }

    bindChange($songVideo, readVideo);
});
function bindChange($ele, callback) {
    $ele.change(function (e) {
        if (this.disabled) return alert('File upload not supported!');
        if (this.value != '') {
            callback({
                name: this.value,
                size: this.size
            }, this);
        }
    });
}
function readImage(file) {
    var obj = {};
    if (!/.+(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$/.test(file.name)) {
        var obj = {}
        obj.img = "请上传图片"
        validatorImg.showErrors(obj);
        return;
    }
    var maxMega = 5;
    if (getKb(file) / 1024 > maxMega) {
        obj.img = "不能超过" + maxMega + "MB"
        validatorImg.showErrors(obj);
        return;
    }
    setCropImg(file);
}
function getKb(file) {
    return file.size / 1024;
}