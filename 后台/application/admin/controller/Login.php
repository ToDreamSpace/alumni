<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;
use think\captcha\Captcha;
use app\admin\validate\LoginValidate;
use app\admin\model\AdminModel;

class Login extends Controller
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        return $this->fetch();
    }
    //验证码生成
    public function verify()
    {
        $config =    [
            // 验证码字体大小
            'fontSize'    =>    30,    
            // 验证码位数
            'length'      =>    3,   
            // 关闭验证码杂点
            'useNoise'    =>    false, 
            'useZh'=>false,
        ];
        $captcha = new Captcha($config);
        return $captcha->entry();
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        //
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    
     //登录验证
    public function save(Request $request)
    {
        $data=$request->param();
        $validate=new LoginValidate();
        if(!$validate->check($data)){
            return ['code'=>0,'msg'=>$validate->getError()];
        }
        //验证验证码
        if(!captcha_check($data['code'])){
            return ['code'=>0,'msg'=>'验证码错误'];
        };

        $db=new AdminModel();
        $res=$db->login($data);
        if($res){
            return ['code'=>1,'msg'=>'登录成功'];
        }else{
            return ['code'=>1,'msg'=>'账号或者密码错误'];
        }

    }

    //登录退出
    public function logout()
    {
        session(null);
        return ['code'=>1,'msg'=>'退出成功'];
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        //
    }
}
