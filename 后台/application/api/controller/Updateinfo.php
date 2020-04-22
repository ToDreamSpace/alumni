<?php

namespace app\api\controller;

use app\api\model\RegisterAlumniModel;
use think\Controller;
use think\Request;

class Updateinfo extends Home
{
    //完善信息、更新
    public function updateinfo(Request $request)
    {
        $data=$request->param();
        //验证还没有做
        $db=new RegisterAlumniModel();
        $db->save($data,['id'=>$this->uid]);
        return json(['code'=>1,'msg'=>'更新成功！']);
    }
}
