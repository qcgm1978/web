<?php

class HelpController extends Controller
{
    public function init(){
        $this->menu_key = 'help';
    }

	public function actionIndex()
	{
		$this->redirect('anchor');
	}

    public function actionAnchor($type=0){
        $title = array(
            '什么是主播等级？',
            '如何申请成为签约主播？',
            '如何开始直播？',
            '如何查看直播数据和礼物？',
            //'如何安装音视频优化工具？',
        );
        $this->title = $title[$type];
        $this->render('anchor', array('type'=>$type, 'titles'=>$title, 'levels'=>User::anchorLevels()));
    }

    public function actionUser($type=0){
        $title = array(
            '如何获得爵位？',
            '什么是土豪？',
            '什么是社团',
            '其他常见问题？',
        );
        $this->title = $title[$type];
        $this->render('user', array('titles'=>$title, 'type'=>$type));
    }
}