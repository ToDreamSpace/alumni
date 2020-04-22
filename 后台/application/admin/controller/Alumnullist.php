<?php

namespace app\admin\controller;

use think\Controller;
use app\admin\controller\Base;
use app\admin\model\AluMerberModel;
use think\Request;
use app\admin\validate\AlumnulValidate;


class Alumnullist extends Base 
{

    //首页
    public function index()
    {
        $db=new AluMerberModel();
        $list=$db->order('id', 'desc')->paginate(30);
        $this->assign("list",$list);
        $this->assign("total",$list->total());
        return $this->fetch(); 
    }

    //搜索页面
    public function search(Request $request)
    {
        $db=new AluMerberModel();
        $tag=$request->param('tag');
        $list=$db->whereOr(
            ['id'=>$tag,
            'name'=>$tag,
            'tel'=>$tag,
            'phone'=>$tag,
            'qq'=>$tag,
            ])->paginate(10);
        $this->assign("list",$list);
        $this->assign("total",$list->total());
        return $this->fetch('index'); 
    }

    //删除方法
    public function delete(Request $request)
    {
         $id=$request->param('id');
         $db=new AluMerberModel();
         $res=$db->where('id',$id)->delete();
         if($res){
            return ['code'=>1,'msg'=>'删除成功'];
         }else{
            return ['code'=>0,'msg'=>'删除失败'];
         }
    }

    //添加首页
    public function create()
    {
        return $this->fetch();    
    }

    //编辑
    public function edit(Request $request)
    {
        $id=$request->param('id');
        $db=new AluMerberModel();
        $info=$db->where('id',$id)->find();
        $this->assign('info',$info);
        return $this->fetch();
    }
    

    //保存
    public function save(Request $request)
    {
       $data=$request->param();
       //验证器
       $validate=new AlumnulValidate();
       if( !$validate->check($data)){
           return ['code'=>0,'msg'=>$validate->getError()];
       }
       $db=new AluMerberModel();
       $res=$db->_updata($data);
       if($res){
          return ['code'=>1,'msg'=>'添加成功'];
       }else{
          return ['code'=>0,'msg'=>'添加失败'];
       }
    }

}
