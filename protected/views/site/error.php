<?php
/* @var $this SiteController */
/* @var $error array */

$this->pageTitle=Yii::app()->name . ' - Error';
$this->breadcrumbs=array(
	'Error',
);
?>
<div style="text-align: center; margin: 100px">
<h1><?php echo $code; ?></h1>
<br><br>
<div class="error">
    <?php
    $message =  '出现异常，请回<a href="/">首页</a>继续';
    if ($code == '404' || $code == '400') {
        $message = '您要找的页面已经不在了，请回<a href="/">首页</a>继续吧';
    }
    if ($code == '500') {
        $message = '人太多了，服务器忙不过来，攻城狮们正在解决，请稍后再试';
    }
    echo $message;
    ?>
</div>
</div>
