<?php

namespace app\api\validate;

use think\Validate;

class RegisterValidate extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名'	=>	['规则1','规则2'...]
     *
     * @var array
     */	
	protected $rule = [
        'name'=>'require',
        'username'=>'require|unique:alu_register_alumni',
        'password'=>'require',
        'code'=>'require'
    ];
    
    /**
     * 定义错误信息
     * 格式：'字段名.规则名'	=>	'错误信息'
     *
     * @var array
     */	
    protected $message = [
        'name.require'=>'请输入正确的姓名',
        'username.unique'=>'手机号已存在',
        'password.require'=>'请输入密码',
        'code.require'=>'验证码不能为空',
    ];
}
