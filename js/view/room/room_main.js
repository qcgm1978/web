jQuery(document).ready(function () {
    jQuery("#floatShow").bind("mouseenter", function () {
        jQuery("#onlineService").animate({width: "show", opacity: "show"}, "normal", function () {
            jQuery("#onlineService").show();
        });
        jQuery("#floatShow").show();
        jQuery("#floatHide").hide();
        return false;
    });
    jQuery("#online_qq_layer").bind("mouseleave", function () {
        jQuery("#onlineService").animate({width: "hide", opacity: "hide"}, "normal", function () {
            jQuery("#onlineService").hide();
        });
        jQuery("#floatShow").show();
        jQuery("#floatHide").hide();
        return false;
    });
});
var uu89pub = new chat('content_pub', 1, $('#liuyan'));
var uu89prv = new chat('content_prv', 1, $('#xitong'));
uu89prv.kw_filter = new RegExp(regFilter, 'ig')
uu89pub.kw_filter = new RegExp(regFilter, 'ig')
/**
 * todo separate the file and the model modules would include relative class
 * Room page module
 *
 * @module Service Objects
 * @method generateEmulationUserData

 */
/**
 * Description:
 *
 * @module Value Objects
 * @class generateEmulationUserData
 * @method generateEmulationUserData
 */
//todo emulating user data
var hasUserList = false
function generateEmulationUserData() {
    if (hasUserList) {
        return
    }
    $.getJSON('/js/view/room/test.json', function (arr) {
        $.each(arr, function (i, param) {
            var user = new User(param.uid, param.level, param);
            g_UserList.UserIn(user);
        })
    })
    hasUserList = true
}
/**
 * Description:
 *
 * @module Decorators
 * @class window.SiteCommon
 * @extends window.SiteCommon
 */
$.extend(window.SiteCommon, {
        maxBroadLen: 45,
        EMOTION_GIF_PATH: "/images/room/emotion/",
        SWF_DIR: '/swf/',
        marqueeGift: null,
        marqueeBroad: null,
        generateBroadItem: function (obj) {
            var content = "<strong class='fl'>" +
                obj.name +
                ":</strong>" +
                SiteCommon.decodeSign(obj)
            var strVar = "";
            strVar += "<p>" +
            "<span>" +
            "<a href=\"" +
            "/" +
            obj.uid +
            "\" target=\"_blank\" class=\"spmsg_a\">" +
            content +
            "</a></span>" +
            "</p>";
            return strVar;
        },
        fillAnchorArea: function (result, receiverUid) {
            if (gift_to_uid == roompara.uid || gift_to_uid == 0 || receiverUid == roompara.uid) {
                var s = '';
                if (result.glamour > 0) {
                    s = '<span class="lpLevelStart"><i class="zhuboIco zb' + result.glamour + '"></i></span><div class="lpLevelPro"><p class="lpLevleData" >还差<b>' + result.glamour_need + '</b>U豆到</p><span><i style="width:' + result.glamour_need_percent + '%;"></i></span></div><span class="lpLevelEnd"><i class="zhuboIco zb' + result.glamour_next + '"></i></span>';
                    $('#star_levl_next').html(s);
                }
            }
        },
        decodeSign: function (data) {
            var emotionGif = this.EMOTION_GIF_PATH + "$1.gif";
            var message = data.message ? data.message : data;
            return message
                .replace(/&#47;b(\d{1,2})/g, "<img src='" + ImageBase + emotionGif + "'>")
        },
        encodeSpecialSign: function (msg) {
            return msg.replace(/\/(?=\w\d{1,2})/g, '&#47;')
        },
        recursiveUnbind: function ($jElement, otherAttr) {
            // remove this element's and all of its children's click events
            $jElement.unbind();
            $jElement.removeAttr('onclick');
            if (typeof otherAttr !== 'undefined') {
                $jElement.removeAttr(otherAttr);
            }
            $jElement.children().each(function () {
                if ($(this).not(':contains("充值")')) {
                    SiteCommon.recursiveUnbind($(this),otherAttr);
                }
            });
        },
        radioFn: function () {
            $(".radioWord").toggle();
            $('#sperkercont').val('')
            $('#J_broad_txt_num').text(SiteCommon.maxBroadLen)
        }
    }
);
/**
 * Description: query: 自己    管理员    外团巡管（目前没有）    官方巡管    普通用户    游客
 *
 * @module Policy Objects
 * @class UserIdentity
 * @static
 */
var UserIdentity = {
    isMe: function (data) {
        return userpara.uid == data.uid
    },
    isAnchor: function (data) {
        return data.level == 4
    },
    isManager: function (data) {
        return data.level == 3;
    },
    isFolkWatchman: function (data) {
        return false;
    },
    isWatchman: function (data) {
        return data.level == 5;
    },
    isSmallConsumer: function (data) {
        return data.level == 2;
    },
    isTourist: function (data) {
        return data.level == 1;
    }
}
/**
 * Description: program entry
 * @module View Objects
 * @method jquery.ready
 */
$(function () {
    load_emotion();
    load_gift_list();
    SiteCommon.marqueeGift = new MarqueeScroll({
        iniData: gift_message,
        $ele: $('#gift_message'),
        callback: function () {
            SiteCommon.recursiveUnbind($('#gift_message').children(), 'href');
        }
    })
    SiteCommon.marqueeGift.iniMarquee();
    load_room_data();
    xchat_start();
    var splash_base = '/room/images/';
    var video_swf_param = {
        server: roompara.mserverip + ":" + roompara.mserverport,
        room_id: room_id,
        uid: userpara.gid
    };
    video_start(video_swf_param, UserIdentity.isAnchor(userpara));
    load_speak_data();
    load_room_bullet();
    setTimeout(function () {
        document.getElementById('p1').scrollIntoView();
    }, 1000);
    var oldTitle = document.title;
    try {
        document.attachEvent('onpropertychange', function () {
            if (document.title != oldTitle) {
                document.title = oldTitle;
            }
        });
    } catch (e) {
        //debugger;
    }
});
/**
 * Ini video, Requiring attributes from server
 *
 * @method video_start
 * @return {Undefined}
 *
 * @param userpara.roomer {Number}
 * @example
 *     0
 * @param roompara
 * @type {Object}
 * @example
 *     {"server":"182.18.61.9:19350","room_id":201937,"uid":150858271,"level":1,"token":"video_token","nickname":"游客8271","splash":["/room/images/splash.png","/room/images/mic_free.png","/room/images/mic_chairman.png"],"bps":150000,"vq":90}
 * @param room_id
 * @type {Number}
 * @example
 *     201855
 * @param roompara.m_bitrate
 * @type {Number}
 * @example
 *     150000
 * @param userpara.gid
 * @type {Number}
 * @example
 *     150830239
 * @param userpara.levelinroom
 * @type {Number}
 * @example
 *     1
 * @param userpara.nickname_b64
 * @type {String}
 * @example
 *     "5ri45a6iMDIzOQ=="
 */
function video_start(swfParam, isAnchor) {
    if (roompara.kickout != 0) {
        return
    }
    if (isAnchor) {
        video_swf.Init(swfParam, "video_zone", 1, null);
    }
    else {
        video_swf.Init(swfParam, "video_zone", 0, null);
    }
}
/**
 * Description: insert flash for server side communication
 *
 * @xchat_start
 */
function xchat_start() {
    var xconf_swf_param = {
        ip: roompara.serverip,
        port: roompara.serverport,
        room_id: room_id,
        uid: userpara.gid,
        level: userpara.level
    };
    chat_panel.init();
    if (/^游客/.test(xconf_swf_param.nickname)) {
        xconf_swf_param.uid = 0
    }
    xMessager.init(xconf_swf_param);
    xchat_swf.Init(xconf_swf_param, 'xchat', null);
}
function SendGiftCB(result) {
    if (!SiteCommon.isAjaxFailed(result)) {
        $('#mycoin').html(jQuery.parseJSON(result.PARAM1).coin_after);
        SiteCommon.fillAnchorArea(result.glamour);
        xMessager.giftmessage(result.PARAM0, $.parseJSON(result.PARAM1), result.PARAM2);
    }
}
function load_gift_list() {
    var url = '/room/giftListNew';//todo '/room/giftListNew'
    $.get(url, function (result) {
            result = $.parseJSON(result)
            function setFirstEle(i, classVal) {
                return i == 0 ? classVal : '';
            }

            if (!SiteCommon.isAjaxFailed(result)) {
                var str = ''
                $.each(result.content, function (i, n) {
                    var className = setFirstEle(i, 'current');
                    str += '<li class="' +
                    className +
                    '"><a href="#" title="">' +
                    n.name +
                    '</a></li>'
                    var classVal = 'liveGiftsBox ' + setFirstEle(i, 'block');
                    var $ul = $('<div>', {
                        "class": classVal
                    }).append('<ul>').find('ul')
                    $.each(n.list, function (index, val) {
                        var obj = {
                            GIFTID: val.gift_id,
                            NAME: val.gift_name,
                            PRICE: val.gift_price,
                            LEVEL: 0
                        }
                        var $li = $('<li>').click(function () {
                            SelectGift(obj, this)
                        }).html('<i></i><img src="' +
                        val.gift_img +
                        '" alt="' +
                        val.gift_name +
                        '：' +
                        val.gift_price +
                        'U币" width="46px" height="46px" data-bd-imgshare-binded="1">')
                        $ul.append($li)
                    })
                    $('#liwu').append($ul.parent())
                })
                $('.J_gifts_tabs').html(str)
                makeGitfTip();
            }
        }
    );
}
/**
 * Description:  to scroll the text like the old traditional marquee by jQuery plugin jQuery.Marquee
 *
 * @class MarqueeScroll
 * @constructor
 */
function MarqueeScroll(config) {
    var ini = {
        maxFeed: 1,
        callback: $.noop,
        html: $(),
        arr: [],
        fullArr: [],
        start: 0
    };
    $.extend(ini, config)
    this.iniLen = 0
    this.maxFeed = ini.maxFeed
    this.iniData = ini.iniData
    this.callback = ini.callback
    this.$ele = ini.$ele
    this.html = ini.html
    this.arr = ini.arr
    this.fullArr = ini.fullArr
    this.start = ini.start
}
MarqueeScroll.prototype = {
    generateMarqueHtml: function (data) {
        var str
        if (typeof data == 'string') {
            str = data
        } else {
            var sendTime = uu89pub.getTimeSpan(uu89pub.time(data.time * 1000));
            var anchorId = data.room_info.gid;
            var href = roompara.uid == anchorId ? 'javascript:;' : '/' + anchorId;
            var prop = {
                href: href,
                target: '_blank'
            };
            var $giftMessage = $('#gift_message');
            var $parent = $giftMessage.parent();
            if (!$parent.is('a')) {
                var $a = $('<a>', prop);
                $giftMessage.wrap($a)
            } else {
                $parent.attr('href', href)
            }
            str = $('<li>')
                .width(1200)
                .css('cursor', 'pointer')
                .append(sendTime + '<span>[' + data.room_info.room_name + ']</span>' + uu89pub.getGiftEle(data))
                .get(0).outerHTML;
        }
        if (this.iniLen == 0) {
            this.iniLen = $(str).length
        }
        return str;
    },
    getLatestContents: function () {
        var len = this.fullArr.length
        this.end = this.start + this.maxFeed;
        var newLen = len - (this.start + this.maxFeed)
        if (this.maxFeed > newLen) {
            this.start = this.end - (this.maxFeed - newLen)
        } else {
            this.start = this.end
        }
        this.end = this.start + this.maxFeed;
        var str = this.fullArr.slice(this.start, this.end).join('');
        return str;
    },
    feedMessage: function (data) {
        var str = this.generateMarqueHtml(data)
        this.fullArr.push(str)
        if (this.notHasMarqueeData()) {
            this.$ele
                .html(this.getLatestContents())
            this.generateMarquee()
        }
    },
    notHasMarqueeData: function () {
        return this.iniData == '' || (this.iniData instanceof Object && $.isEmptyObject(this.iniData));
    },
    generateMarquee: function () {
        var that = this
        var options = {
            //allowCss3Support: false,
            duration: 10000,
            delayBeforeStart: 0,
            pauseOnHover: true
        };
        return that.$mqMarque = this.$ele
            .bind('finished', function () {
                if (that.fullArr[that.end]) {
                    $(this).html(that.getLatestContents())
                    that.$mqMarque = that.$mqMarque.marquee(options)
                    that.$ele.off('hover').hover(
                        function () {
                            $(this).marquee('pause')
                        },
                        function () {
                            $(this).marquee('resume')
                        })
                    that.callback();
                }
            })
            .marquee(options);
    },
    iniMarquee: function () {
        if (this.notHasMarqueeData()) {
            return
        }
        var iniData = this.generateMarqueHtml(this.iniData);
        var arr = $.makeArray($(iniData));
        arr = $.map(arr, function (n, i) {
            return $(n).get(0).outerHTML
        })
        this.fullArr = this.fullArr.concat(arr)
        this.$ele.append(this.getLatestContents())
        this.generateMarquee();
        this.callback();
    }
}
/**
 * Description: load speak data for scroll in the bottom
 *
 * @method load_speak_data
 */
function load_speak_data() {
    var url = '/room/broadcast';
    $.post(url, function (result) {
            result = $.parseJSON(result)
            if (!SiteCommon.isAjaxFailed(result)) {
                var iniData = ''
                $.each($.parseJSON(result.content).reverse(), function (i, n) {
                    var strVar = SiteCommon.generateBroadItem({
                        name: n[0],
                        uid: n[2],
                        message: SiteCommon.decodeSign(n[1])
                    });
                    iniData += strVar
                })
                SiteCommon.marqueeBroad = new MarqueeScroll({
                    maxFeed: 3,
                    $ele: $('#spmsg'),
                    iniData: iniData
                })
                SiteCommon.marqueeBroad.iniMarquee()
            }
        }
    );
}
function fill_gift_list(gift_list) {
    s = '';
    for (var i = 0; i < gift_list.length; i++) {
        s += '<li><span><img src="' + gift_list[i].gift_img + '"></span>';
        s += '<span class="clGiftList01">' + gift_list[i].gift_sum + '个</span>';
        s += '<span class="clGiftList02">' + gift_list[i].from_nickname + '</span>';
        s += '<span class="clCoin"><i class="ubIco"></i>U' + gift_list[i].total_price + '</span></li>';
    }
    if (s == '') {
        s = '<li><span>还没有收到礼物！</span></li>';
    }
    $('#clGiftList').html(s);
}
/**
 * Description: common method to construct list of today and total
 *
 * @method fill_fan
 */
function fill_fan(fans, d_id) {
    s = '';
    s1 = '';
    for (var i = 0; i < fans.length; i++) {
        var isThree = false;
        if (i == 0) {
            s = '<span class="lrtPic"><img src="' + fans[i].avatar + '" alt=""/><i class="zzMaster"></i><em class="lrtTu"><i class="rankIco rankFirst"></i></em></span><strong>' + fans[i].from_nickname + '</strong><p><b>' + fans[i].total_coin + '</b><i class="ubIco"></i></p>';
            jQuery(d_id + ' .lrtSecond').html(s);
            if (d_id == '#con_fan_1') {
                jQuery('#todayfirst').html('<strong class="ellipsis">' + fans[i].from_nickname + '</strong><p><i class="ubIco"></i><span>' + fans[i].total_coin + '</span></p>');
            } else if (d_id == '#con_fan_3') {
                jQuery('#allfirst').html('<strong class="ellipsis">' + fans[i].from_nickname + '</strong><p><i class="ubIco"></i><span>' + fans[i].total_coin + '</span></p>');
            }
        } else if (i == 1) {
            s = '<span class="lrtPic"><img src="' + fans[i].avatar + '" alt=""/><i class="zzMaster"></i><em class="lrtTu"><i class="rankIco rankSecond"></i></em></span><strong>' + fans[i].from_nickname + '</strong><p><b>' + fans[i].total_coin + '</b><i class="ubIco"></i></p>';
            jQuery(d_id + ' .lrtFirst').html(s);
        } else if (i == 2) {
            s = '<span class="lrtPic"><img src="' + fans[i].avatar + '" alt=""/><i class="zzMaster"></i><em class="lrtTu"><i class="rankIco rankThird"></i></em></span><strong>' + fans[i].from_nickname + '</strong><p><b>' + fans[i].total_coin + '</b><i class="ubIco"></i></p>';
            jQuery(d_id + ' .lrtThird').html(s);
        } else {
            s1 += '<li><span class="lrbNum">' + (i + 1) + '.</span><span class="lrbName">' + fans[i].from_nickname + '</span><span class="lrbUIco">' + fans[i].total_coin + '<i class="ubIco"></i></span></li>';
        }
        //s += '<li class="f-cb"><span class="fl"><img src="/room/images/'+(i+1)+'.png" alt="one" /></span><span class="l-pic"></span><span class="l-name">';
        //if (fans[i].vip){
        //	s += '<img src="/room/images/vip/v' + fans[i].vip + '.gif">';
        //}
    }
    jQuery(d_id + ' .other').html(s1);
}
/**
 * Description: load data for left and right columns
 *
 * @method load_room_data
 */
function load_room_data(receiverUid) {
    var url = '/room/data/' + room_id;
    $.post(url, function (result) {
        if (result.res == 0) {
            return;
        }
        var result = jQuery.parseJSON(result);
        SiteCommon.fillAnchorArea(result, receiverUid);
        fill_fan(result.fans[0], '#con_fan_1');
        fill_fan(result.fans[1], '#con_fan_3');
        fill_gift_list(result.gift_list);
    });
}
function emotion_it(i) {
    var s = $("#message_input").val() + "/b" + i;
    jQuery("#message_input").val(s);
    jQuery(".lwfFaceList").addClass('none');
}
function emotion_it_o(i) {
    //console.log('emotion_it:'+i);
    var s = $("#sperkercont").val() + "/b" + i;
    jQuery("#sperkercont").val(s);
    jQuery(".gbFaceList").hide();
    setBroadTextarea.call($('#sperkercont'));
}
function load_emotion() {
    var s = '';
    var count = 60;
    for (var i = 0; i < count; i++) {
        s += '<a href="javascript:emotion_it(' + i + ')"><img src="/images/room/emotion/' + i + '.gif" ></a>';
    }
    jQuery(".lwfFaceList").html(s);
    s = s.replace(/emotion_it/g, "emotion_it_o")
    jQuery(".gbFaceList").html(s);
}
/**
 * Description: show cars when page loaded
 *
 * @owshowcar
 * @deprecated Use chat.showCar
 * instead
 */
function owshowcar() {
    if (userpara.car_id > 0) {
        var nickname = nicknameIniVal;
        userpara.nickname = nickname;
        showcar(userpara);
    }
    /*else {
     userpara.nickname = Base64.decode(userpara.nickname_b64);
     member_in_out_hint(userpara, 1);
     }*/
}
function showcar(appdata) {
    var url = '/room/car/id/' + appdata.car_id;
    $.get(url, function (result) {
            var ms = JSON.parse(result);
            if (ms.error == 0) {
                appdata.carmsg = ms.content.msg;
                member_in_out_hint(appdata, 1);
                //message_display.pub(ms.content.msg);
                car_center.show_car(ms.content.swf, 1, ms.content.swf_life);
            }
        }
    );
}
function setFansVal(data) {
    if (data.type == 1) {
        $('#anchor_fans').text(data.data);
    }
}
function followAnchor(state) {
    if (!checklogin()) {
        return false;
    }
    xchat_swf.setRoomInfo(1, state)
}
function delfav(roomid) {
    jQuery.ajax({
        type: "post",
        data: {"room_id": roomid},
        url: "/room/delFav",
        success: function (data, status) {
            var ms = JSON.parse(data);
            if (ms.error == 0) {
                var str = '<a href="javascript:;" onclick="addfav(' + roomid + ');" class="orangeBtn"><i>添加关注</i></a>';
                jQuery("#userfav").html(str);
                xMessager.anchorfans();
                setFansVal(-1);
            }
        }
    });
}
function setFollowBtn(data) {
    if (data.result) {
        return
    }
    var $fansEle = jQuery("#userfav");
    if (data.data == 1) {
        var str = '<a href="javascript:;" onclick="followAnchor(0);" class="orangeBtn"><i>取消关注</i></a>';
    } else {
        var str = '<a href="javascript:;" onclick="followAnchor(1);" class="orangeBtn"><i>添加关注</i></a>';
    }
    $fansEle.html(str);
}
/**
 * Loading recommended rooms if broadcast not starts, to refactor
 * @method load_room_recommended
 * @deprecated Use message_display.load_room_recommended
 *
 * */
function load_room_recommended() {
    var url = "/room/recommend";
    jQuery.post(url, function (result) {
            jQuery("#room_recommended").html(result);
        }
    );
}
/**
 * Description:
 *
 * @class todoCode
 */
/**
 * Description: speaking event bind hidden element, not triggered now(.radioWord not displayed)
 *
 * @event sendspeaker
 * @deprecated
 *
 */
function sendspeaker() {
    var msgVal = jQuery("#sperkercont").val();
    if (msgVal.length < 1) {
        alert("喇叭必须填写内容");
        return false;
    }
    //if (msgVal.length > 100) {
    //    alert("字数不能大于100");
    //    return false;
    //}
    xMessager.speakermessage({
        type: 1,
        message: SiteCommon.encodeSpecialSign(msgVal)
    });
}