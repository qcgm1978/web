<?php
/**
 * Created by PhpStorm.
 * User: caoxiang
 * Date: 15/5/12
 * Time: 下午1:37
 */

class ActivityController extends Controller {
    public function actionWLoginCoin(){
        if (User::auth(Logic::getToken())) {
            $s = 1;
        }else{
            $s = 0;
        }
        $this->render('wLoginCoin', array('status'=>$s));
    }

    public function actionLoginCoin(){
        $this->layout = false;
        $token = Yii::app()->request->getParam('token');
        if (User::auth($token)) {
            $s = 1;
        }else{
            $s = 0;
        }
        $this->render('loginCoin', array('status'=>$s));
    }

    public function actionLoginVip(){
        $this->layout = false;
        $token = Yii::app()->request->getParam('token');
        if (User::auth($token)) {
            $s = 1;
        }else{
            $s = 0;
        }
        $this->render('loginVip', array('status'=>$s));
    }

    public function actionChargeCoin(){
        $this->layout = false;
        $token = Yii::app()->request->getParam('token');

        $uid = User::auth($token);
        if ($uid) {
            $s = 1;
            $charge_status = Api::getData('user', 'checkChargeGift', array('uid'=>$uid, 'coin'=>10000, 'platform'=>2));
        }else{
            $charge_status = 0;
            $s = 0;
        }
        $this->render('chargeCoin', array('status'=>$s, 'charge'=>$charge_status));
    }

    public function actionYouthVoice(){
        $info = User::info();
        if ($info) {
            $status = 0;
            if ($_REQUEST) {
                $name = Yii::app()->request->getParam('name');
                $sex = Yii::app()->request->getParam('gender');
                $qq = Yii::app()->request->getParam('qq');
                $phone = Yii::app()->request->getParam('phone');
                $position = Yii::app()->request->getParam('job');
                $hobby = Yii::app()->request->getParam('favorite');
                list($r1, $works1) = Logic::uploadFile('J_song-video', 'youth');
                list($r2, $works2) = Logic::uploadFile('J_resolve-video', 'youth');
                $photo1 = Yii::app()->request->getParam('J_img');
                $photo2 = Yii::app()->request->getParam('J_img2');
                $size1 = Yii::app()->request->getParam('size1');
                $size2 = Yii::app()->request->getParam('size2');

                if ($name && $sex && $qq && $phone && $position && $hobby && (!$r1 || !$r2) && ($photo1 || $photo2)) {
                    if ($size1) {
                        $size1 = json_decode($size1, true);
                        Logic::cutImage(Yii::getPathOfAlias('webroot') . '/' . $photo1, $size1);
                    }
                    if ($size2) {
                        $size2 = json_decode($size2, true);
                        Logic::cutImage(Yii::getPathOfAlias('webroot') . '/' . $photo2, $size2);
                    }
                    $photo1 = basename($photo1);
                    $photo2 = basename($photo2);
                    $sql = "insert into c_youth_apply(uid, name, sex, qq, phone, `position`, hobby, works1, works2, photo1, photo2)
                      VALUES (".$info['uid'].", '$name', $sex, '$qq', '$phone', '$position', '$hobby', '$works1', '$works2', '$photo1', '$photo2')";
                    Yii::app()->db->createCommand($sql)->execute();
                    $status = 1;
                }else{
                    $status = 2;
                }
            }
        }else{
            $status = 3;
        }
        $this->layout = false;
        $this->render('youthVoice', array('status'=>$status));
    }

    public function actionUploadImg(){
        list($r, $photo) = Logic::uploadFile('img', 'youth');
        if ($r) {
            echo Logic::makeResponse($r, '上传失败');
            return;
        }
        $img = '/upload/youth/'.$photo;
        echo "
            <script>
            window.parent.setBigImg(\"$img\")
            </script>
        ";
    }
}