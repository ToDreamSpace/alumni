<?php

namespace app\api\controller;

use app\api\model\RegisterAlumniModel;
use app\api\validate\LoginValidate;
use Firebase\JWT\JWT;
use think\Controller;
use think\Request;

class Login extends Base
{
//    登录
    public function login(Request $request)
    {
        $data=$request->param();
        $validate=new LoginValidate();
        if (!$validate->check($data)){
            return json(['code'=>0,'msg'=>$validate->getError()]);
        }
        $db=new RegisterAlumniModel();
        $info=$db->where('username',$data['username'])->where('password',$data['password'])->find();
        if (!$info){
            return json(['code'=>0,'msg'=>'用户名或密码错误'],400);
        }
        $key = 'swupl';
        $payload = array(
            "iat" => time(),
            "nbf" => time(),
            'exp'=>time()+60*60*24,//token过期时间
            'uid'=>$info['id'],
        );
        $token=JWT::encode($payload,$key);
        return json(['code'=>1,'msg'=>'登录成功','token'=>$token]);
    }

}
