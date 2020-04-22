<?php

namespace app\admin\controller;

use think\Controller;

class Upload extends Base
{
    public function upload()
    {
        // 获取表单上传文件 例如上传了001.jpg
        $file = request()->file('file');
        // 移动到框架应用根目录/uploads/ 目录下
        $info =$file->validate(['size'=>156780,'ext'=>'JPG,jpg,png,gif'])->move( './uploads');
        if($info){
            // 成功上传后 获取上传信息
            // 输出 jpg
            //echo $info->getExtension();
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            $path='/uploads/'.$info->getSaveName();
            return ['code'=>1,'msg'=>'上传成功','path'=>$path];
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            //echo $info->getFilename(); 
        }else{
            // 上传失败获取错误信息
            return ['code'=>0,'msg'=>$file->getError()];
        }
    }
}
