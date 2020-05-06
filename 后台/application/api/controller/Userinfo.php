<?php

namespace app\api\controller;

use app\api\model\RegisterAlumniModel;

class Userinfo extends Home
{
//    user页面获取部分信息
    public function index()
    {
        $db = new RegisterAlumniModel();
        $data = $db->where('id',$this->uid)
            ->with('zhuanke,benke,shuoshi,boshi,hanshou')
            ->field('id,username,name,face,signature,sfzh,zuigaoxueli,is_authentication')->find();
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
        $data = $db->where('id',$this->uid)->field('name,sfzh,email,qq,xh,signature,face')->find();
        if ($data) {
            return json(['code' => 1, 'msg' => '获取用户信息', 'data' => $data],200);
        } else {
            return json(['code' => 0, 'msg' => '获取用户失败']);
        }
    }

//    获取学历信息
    public function getEducation()
    {
        $db = new RegisterAlumniModel();
        $data = $db->where('id',$this->uid)
            ->with('zhuanke,benke,shuoshi,boshi,hanshou')
            ->field('id,zuigaoxueli')->find();
        if ($data) {
            return json(['code' => 1, 'msg' => '获取用户信息', 'data' => $data],200);
        } else {
            return json(['code' => 0, 'msg' => '获取用户失败']);
        }
    }

//    获取工作信息
//    获取学历信息
    public function getWorkinfo()
    {
        $db = new RegisterAlumniModel();
        $data = $db->where('id',$this->uid)
            ->with('work')
            ->field('id')->find();
        if ($data) {
            return json(['code' => 1, 'msg' => '获取用户信息', 'data' => $data],200);
        } else {
            return json(['code' => 0, 'msg' => '获取用户失败']);
        }
    }

}
