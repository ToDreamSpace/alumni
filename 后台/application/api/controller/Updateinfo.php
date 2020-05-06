<?php

namespace app\api\controller;

use app\api\model\BenkeModel;
use app\api\model\BoshiModel;
use app\api\model\HanshouModel;
use app\api\model\RegisterAlumniModel;
use app\api\model\ShuoshiModel;
use app\api\model\WorkModel;
use app\api\model\ZhuankeModel;
use app\api\validate\WorkValidate;
use think\Controller;
use think\Db;
use think\Request;

class Updateinfo extends Home
{
    //完善基础信息
    public function updateinfo(Request $request)
    {
        $data=$request->param();
        //验证还没有做
        $db=new RegisterAlumniModel();
        $db->save($data,['id'=>$this->uid]);
        return json(['code'=>1,'msg'=>'更新成功！']);
    }
//    完善工作信息
    public function updateworkinfo(Request $request)
    {
        $data=$request->param();
        $validate=new WorkValidate();
        $db=new WorkModel();
        if ($db->where('id',$this->uid)->find()){
            $res=$db->save($data,['id'=>$this->uid]);
        }else{
            $data['id']=$this->uid;
            $res=$db->save($data);
        }
        return json(['code'=>1,'msg'=>'更新成功！']);
    }

//完善学历信息
    public function updateeducation(Request $request)
    {
        $data=$request->param();
        $db=new BenkeModel();
        $this->cunchu($data,$db,'benke');
        $db=new BoshiModel();
        $this->cunchu($data,$db,'boshi');
        $db=new ShuoshiModel();
        $this->cunchu($data,$db,'shuoshi');
        $db=new ZhuankeModel();
        $this->cunchu($data,$db,'zhuanke');
        $db=new HanshouModel();
        $this->cunchu($data,$db,'hanshou');

        $db1=new RegisterAlumniModel();
        $db1->save([
            'zuigaoxueli'  => $data['zuigaoxueli'],
        ],['id' =>$this->uid ]);

        return json(['code'=>1,'msg'=>'更新成功！']);
    }

    //学历存储方法
    public function cunchu($data,$db,$name)
    {
        if ($db->where('id',$this->uid)->find()){
            $res=$db->save($data[$name],['id'=>$this->uid]);
        }else{
            $data[$name]['id']=$this->uid;
            $res=$db->save($data[$name]);
        }
    }
}
