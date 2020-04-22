<?php

namespace app\api\controller;

use app\api\model\RegisterAlumniModel;

class Userinfo extends Home
{
    public function index()
    {
        $db = new RegisterAlumniModel();
        $data = $db->where('id',$this->uid)->field('username,name,face,signature')->find();
        if ($data) {
            return json(['code' => 1, 'msg' => '获取用户信息', 'data' => $data],200);
        } else {
            return json(['code' => 0, 'msg' => '获取用户名失败']);
        }
    }
}
