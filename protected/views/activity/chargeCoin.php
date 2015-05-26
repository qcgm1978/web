<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首充送豪礼</title>
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no" name="viewport" id="viewport"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no, email=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- 删除苹果默认的工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!-- 设置苹果工具栏颜色 -->
    <meta name="format-detection" content="telphone=no, email=no">
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
    <!-- 适应移动端end -->
    <meta name="nightmode" content="enable/disable">
    <meta name="imagemode" content="force">
    <meta name="format-detection" content="telephone=no,email=no">
    <link rel="stylesheet" type="text/css" href="../../../css/activity/skin-1/style/footer_header.css">
</head>
<body>
<div class="con_720">
    <div class="banner">
        <img src="../../../css/activity/skin-1/img/app-scs.png" alt="">
    </div>
    <div class="con">
        <dl class="con-hd">
            <dt>活动时间：</dt>
            <dd>即日起~2015年6月30日。</dd>
        </dl>
        <dl>
            <dt>活动规则：</dt>
            <dd>活动期间，移动端用户首次充值30元（含）以上，就会额外获得<span class="jub">1000U币</span>奖励！</dd>
        </dl>

        <?php if ($status == 1): ?>
            <?php if ($charge == 1): ?>
                <a href="javascript:" onclick="uumieActivity.toRecharge();" class="lj_zc"><img src="../../../css/activity/skin-1/img/cz-bj1.png"></a>
            <?php endif ?>
        <?php else: ?>
            <a href="javascript:" onclick="uumieActivity.toLogin();" class="lj_zc"><img src="../../../css/activity/skin-1/img/cz-bj1.png"></a>
        <?php endif ?>
        <h2 class="zc">如此简单就可以任性！你，还在等什么？</h2>
    </div>
</div>
</body>
</html>