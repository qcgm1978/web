<?php
/**
 * Created by PhpStorm.
 * User: caoxiang
 * Date: 15/1/31
 * Time: 下午6:02
 */

class UserController extends Controller {
    function actionLogin(){
        list($r, $msg) = User::login();
        if($r == 0){
            echo Logic::makeResponse(0, $msg, 0);
        }else {
            echo Logic::makeResponse(1, $msg, $_COOKIE['login_fail_count']);
        }
    }

    function actionLogout(){
        User::logout();
        $back = Yii::app()->request->urlReferrer;
        $i = parse_url($back);
        if ($i['host'] != Yii::app()->params['web_host']) {
            $back = '/';
        }
        $this->redirect($back);
    }

    function actionTotalOnline(){
        $r = User::totalOnline();
        echo $r[0];
    }

    function actionRegister(){
        $username = Yii::app()->request->getParam('username');
        $password = Yii::app()->request->getParam('password');
        $confirm_password = Yii::app()->request->getParam('confirm_password');
        $captcha = Yii::app()->request->getParam('captcha');

        list($r, $msg) = User::register($username, $password, $confirm_password, $captcha);
        if ($r == 0) {
            echo Logic::makeResponse(0, '注册成功', $msg);
        }else{
            Logic::outputError($msg);
        }
    }

    function actionCheckLoginGift(){
        $token = Logic::getToken();
        if (!$token) {
            Logic::outputError('请先登录');
        }
        $r = Api::get('user', 'checkLoginGift', array('token'=>$token, 'platform'=>1));
        if ($r['result'] != 0) {
            echo Logic::makeResponse($r['result'], $r['msg']);
        }else{
            echo Logic::makeResponse(0, 'ok', $r['data'][1]['status']);
        }
    }

    function actionGetLoginGift(){
        $token = Logic::getToken();
        if (!$token) {
            Logic::outputError('请先登录');
        }
        $r = Api::get('user', 'getLoginGift', array('token'=>$token, 'type'=>1, 'platform'=>1));
        echo Logic::makeResponse($r['result'], $r['msg']);
    }
}
