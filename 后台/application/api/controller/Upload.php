<?php

namespace app\api\controller;

use think\Controller;
use think\Request;
use think\response\Json;

class Upload extends Controller
{
    //分类图标上传接收
    public function upload(Request $request)
    {
        // 获取表单上传文件 例如上传了001.jpg
        $file = $request->file('file');
//        return $file->getMime();
        // 移动到框架应用当前目录/uploads/ 目录下
        $info = $file->move('./uploads');
        if ($info) {
            // 成功上传后 获取上传信息
            // 输出 jpg
            return json(["code"=>1,"msg"=>"上传成功","url"=>"/uploads/".$info->getSaveName()]);
        } else {
            // 上传失败获取错误信息
            return json(['code'=>0,'msg'=>'$file->getError()']);
        }
    }

}
