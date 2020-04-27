<?php

namespace app\api\controller;

use app\api\model\YuanxiModel;
use think\Controller;

class Getyuanxi extends Home
{
    public function index()
    {
        $db=new YuanxiModel();
        return json($db->all());
    }
}
