<?php

namespace app\api\controller;

use app\api\model\RegisterAlumniModel;

class Userinfo extends Home
{
//    user页面获取部分信息
    public function index()
    {
        $db = new RegisterAlumniModel();
        $data = $db->where('id',$this->uid)->with('profileYuanxi')->field('username,name,face,signature,sfzh,education,is_authentication,bkyuanxi,bkruxueyear')->find();
        if ($data) {
            return json(['code' => 1, 'msg' => '获取用户信息', 'data' => $data],200);
        } else {
            return json(['code' => 0, 'msg' => '获取用户失败']);
        }
    }
    //获取更多信息
    public function moreInfo()
    {
        $db = new RegisterAlumniModel();
        $data = $db->where('id',$this->uid)->with('profileYuanxi')->field('name,sfzh,email,qq,xh,education,bkzhuanye,bkyuanxi,bkruxueyear,face')->find();
        if ($data) {
            return json(['code' => 1, 'msg' => '获取用户信息', 'data' => $data],200);
        } else {
            return json(['code' => 0, 'msg' => '获取用户失败']);
        }
    }
}
