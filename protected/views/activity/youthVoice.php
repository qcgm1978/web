<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>青春的声音</title>
    <link rel="stylesheet" href="/css/common.css"/>
    <link rel="stylesheet" href="../../../css/youth.css"/>
    <style type="text/css">
        .of-h {
            overflow: hidden;
        }
        .windowOpen{
            font-size: 12px;
        }
        [name="CheckboxGroup1"]{
            width: initial;
            height: initial;;
        }
        #J_img-error{
            position: relative;
            left: -60px;
        }
    </style>
</head>
<body>
<a href="javascript:" id="loginBox" title="" class="none"></a>
<a href="javascript:;" id="registerBox" title="" class="none">注册</a>
<form class="J_form" action="/activity/youthvoice" enctype="multipart/form-data" method="post">
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
        <a href="/" class="logoa"></a>
        <tr>
            <td class="mainHd"></td>
        </tr>
        <tr>
            <td bgcolor="#F7F7F7" class="mainMd">
                <table width="900" border="0" align="center">
                    <tr>
                        <td height="40">【报名时间】</td>
                        <td height="40">2015年5月15日 --- 2015年6月7日</td>
                    </tr>
                    <tr>
                        <td height="40">【活动时间】</td>
                        <td height="40">2015年5月15日 --- 2015年6月7日</td>
                    </tr>
                    <tr>
                        <td height="40">【报名条件】</td>
                        <td height="40">年龄不限、曲风不限</td>
                    </tr>
                    <tr>
                        <td height="40">【上网环境】</td>
                        <td height="40">禁止在公共场所上网（比如：公司单位、网吧、工厂、KTV、酒吧等）</td>
                    </tr>
                    <tr>
                        <td height="40">【硬件设备】</td>
                        <td height="40">电脑、专业麦克风、立体声声卡、高清摄像头</td>
                    </tr>
                    <tr>
                        <td height="40">【比赛形式】</td>
                        <td height="40">独唱、对唱、乐队组合、乐器弹唱</td>
                    </tr>
                    <tr>
                        <td height="40">【面向人群】</td>
                        <td height="40">音乐爱好者、网络及原创歌手、在校学生、商演歌手等</td>
                    </tr>
                    <tr>
                        <td height="40">【参赛地点】</td>
                        <td height="40"> U美网直播社区(www.uumie.com)</td>
                    </tr>
                    <tr>
                        <td height="40">【主 办 方】</td>
                        <td height="40">U美网</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding-top:10px;">
                <table width="1002" border="0" align="center" cellpadding="0" cellspacing="0" class="mainBd">
                    <tr>
                        <td width="280">&nbsp;</td>
                        <td align="left"><h1><strong>　　　报名表</strong></h1></td>
                    </tr>
                    <tr>
                        <td height="44" align="right">姓　　名：
                        </td>
                        <td align="left"><input name="name" placeholder="请填写真实姓名" type="text" maxlength="15"/></td>
                    </tr>
                    <tr>
                        <td height="40" align="right">性　　别：
                        </td>
                        <td align="left">
                            <input name="gender" type="radio" class="sex" value="1"/>女
                            <input name="gender" type="radio" class="sex" value="2"/>男
                            <label class="error none" for="gender"></label>
                        </td>
                    </tr>
                    <tr>
                        <td height="40" align="right"> Q Q：
                        </td>
                        <td align="left"><input name="qq" type="text" maxlength="12"/></td>
                    </tr>
                    <tr>
                        <td height="60" align="right">手　　机：
                        </td>
                        <td align="left" valign="middle"><input name="phone" type="text" maxlength="11"/>
                        </td>
                    </tr>
                    <tr>
                        <td height="40" align="right">职　　业：
                        </td>
                        <td align="left"><input name="job" type="text" maxlength="20"/></td>
                    </tr>
                    <tr class="like">
                        <td height="140" align="right">兴趣爱好：
                        </td>
                        <td align="left"><input name="favorite" type="text" maxlength="30"/></td>
                    </tr>
                    <tr>
                        <td height="40" align="right">个人作品：
                        </td>
                        <td align="left" valign="middle">
                            <input name="J_song_name" type="text" disabled="disabled"/>&nbsp;
                            <input name="J_song-video-mask" type="button" class="button" value="点击上传"/>
                            <input name="J_song-video" type="file" class="button none" value="点击上传" accept='video/mp4,video/x-m4v,application/x-shockwave-flash,video/*'/>
                        </td>
                    </tr>
                    <tr>
                        <td height="20"></td>
                        <td align="left" valign="top" class="sf">请唱一首自己所选定曲目的歌曲，录成视频，传给我们(视频时长限3~5分钟内)
                        </td>
                    </tr>
                    <tr>
                        <td height="60" align="right">个人作品：
                        </td>
                        <td align="left" valign="middle">
                            <input name="J_song_name" type="text" disabled="disabled"/>&nbsp;
                            <input name="J_song-video-mask" type="button" class="button" value="点击上传"/>
                            <input name="J_resolve-video" type="file" class="button none" value="点击上传" accept='video/mp4,application/x-shockwave-flash,video/x-m4v,video/*'/>
                        </td>
                    </tr>
                    <tr>
                        <td height="50" align="right">&nbsp;</td>
                        <td align="left" valign="top" class="sf">请将对"青春的声音"的解读录制成VCR，赛前露一小脸，有助于人气的提升喔~<br/>
                                                                 (视频时长限3~5分钟内）
                        </td>
                    </tr>
                    <tr>
                        <td height="40" align="right">生活照1：
                        </td>
                        <td align="left">
                            <iframe id="upload_target" name="upload_target" src="/activity/uploadImg" style="width:0;heigth:0;overflow:hidden;border:0;position: absolute; left:-500px;"></iframe>

                            <input name="J_img_mask" type="button" class="button" value="点击上传"/>　　　　　
                            <input name="J_img" type="hidden" class="button none" accept='image/x-png, image/gif, image/jpeg'/>
                                                                                                　　生活照2：
                            <input name="J_img_mask2" type="button" class="button" value="点击上传"/>　
                            <input name="J_img2" type="hidden" class="button none" data-name="J_img_mask2" accept='image/x-png, image/gif, image/jpeg'/>


                    </tr>
                    <tr>
                        <td height="40">&nbsp;</td>
                        <td align="left" class="sf">请上传两张近期本人正面生活照
                        </td>

                    </tr>
                    <tr>
                        <td height="199" align="right">&nbsp;</td>
                        <!--上传照片前-->
                        <td align="left" valign="top" class="sf J_example">
                            生活照示例：<img src="../../../images/special/youth/photo.gif" width="240" height="180"/></td>
                        <!--上传照片后-->
                        <td align="left" valign="top" class="sf none J_crop_imgs">
                            <div class="floatxdcss_photo_small of-h"></div>
                            <div class="floatxdcss_photo_small of-h"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td style="padding-bottom:10px;">
                            <input type="hidden" name="size1"/>
                            <input type="hidden" name="size2"/>
                            <input type="submit" class="button" value="提　交"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center"><img src="../../../images/special/youth/mes-bj1.png" width="1002" height="19"/></td>
        </tr>
        <tr>
            <td align="center">&nbsp;</td>
        </tr>
    </table>
</form>
<div class="J_cache_img none"></div>
<script src="/js/libraries/jquery-1.11.1.min.js"></script>
<script>

    <?php if ($status == 1): ?>
    var strPompt = '报名成功！客服人员随后会与您联系，请确保手机或QQ可正常联络！';
    <?php elseif ($status == 2): ?>
    var strPompt = '参数错误，请重试';
    <?php else: ?>
    var strPompt = '';
    <?php endif ?>
    if (strPompt != '') {
        $('<div>')
            .appendTo('body')
            .load('/ajax/prompt/index.html', function () {
                $('.J_content').text(strPompt)
            })
    }

</script>
<script src="/js/common/general.js"></script>
<script src="/js/libraries/validate/jquery.validate.min.js"></script>
<script src="/js/libraries/validate/messages_zh.js"></script>
<script src="/js/libraries/cropper/cropper.min.js"></script>
<script src="/js/view/youth.js"></script>
<script src="/js/view/youth-crop.js"></script>
<?php $this->renderPartial('/layouts/all_div'); ?>

</body>
</html>
