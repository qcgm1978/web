<style type="text/css">
    .main .main-hd {
        width: 100%;
        height: 435px;
        background: url(../../../images/activity/bj-c2.gif) no-repeat top center;
        background-size: cover;
    }

    .main .main-bd {
        width: 100%;
        background: url(../../../images/activity/bj-bd-c2.gif) repeat-y top center;
		text-align:center;
    }

    .main .mainIn {
		background:none;
		width:1420px;

	
    }

    .main .mainIn p {
        color: #fff;
        font-size: 20px;
        line-height: 40px;
        font-family: "微软雅黑";
        margin-left: 30%;
    }

    .main .mainIn p b {
        color: #fde200;
    }

    .main .mainIn p.mess {
        font-size: 18px;
        background: url(../../../images/activity/mess-bj-c2.gif) no-repeat top left;
        margin-top: 20px;
    }

    .main .mainIn p.mess span {
        margin-left: 5%;
    }

    .main .mainIn p.button {
        width: 213px;
        height: 70px;
        line-height: 66px;
        background: url(../../../images/activity/but-bj.gif) no-repeat top center;
        background-size: cover;
        margin-top: 20px;
        margin-left: 45%;
        text-align: center;
    }

    .main .mainIn p.button a {
        font-size: 35px;
        color: #DF5829;
        font-weight: bold;
    }

    .main-bd01 {
        width: 100%;
        background: url(../../../images/activity/bj-bd-c2.gif) repeat-y top center;
    }
</style>
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" style="min-height: 755px;">
    <tr>
        <td height="1" valign="top">
            <!--主体部分开始-->
            <div class="main">
                <div class="main-hd"></div>
                <div class="main-bd"></div>
            </div>
            <!--主体部分结束-->
        </td>
    </tr>
    <tr>
        <td valign="top" class="main-bd01">
            <div class="main">
                <div class="mainIn">
                    <p><b>活动时间：</b>即日起~2015年6月30日。</p>

                    <p><b>活动规则：</b>活动期间，凡新注册的用户，首次登录U美直播社区，即可获得10U币奖励</p>

                    <p class="mess"><span>与主播一起High，并没那么难！简单注册登录，躺着数钱！</span></p>
                    <?php if ($status == 0): ?>
                        <p class="button J_register_btn"><a href="javascript:" onclick="registerWebsiteBtn()">立即注册</a>
                        </p>
                    <?php endif ?>
                </div>
            </div>
        </td>
    </tr>
</table>
<script src="/js/common/login_reg.js"></script>
<script>
    function registerWebsiteBtn(data) {
        $('#registerBox').click()
    }
</script>