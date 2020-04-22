<?php
namespace app\api\controller;
use app\api\model\RegisterAlumniModel;
use app\api\validate\RegisterValidate;
use think\Request;

class Register extends Base
{
    //注册
    public function register(Request $request)
    {
        $data=$request->param();
        $validate=new RegisterValidate();
        if (!$validate->check($data)){
            return json(['code'=>0,'msg'=>$validate->getError()]);
        }
        $db=new RegisterAlumniModel();
        if ($info=$db->save($data)){
            return json(['code'=>1,'msg'=>'注册成功'],200);
        }
    }
}