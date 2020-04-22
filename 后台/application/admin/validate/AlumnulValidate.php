<?php

namespace app\admin\validate;

use think\Validate;

class AlumnulValidate extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名'	=>	['规则1','规则2'...]
     *
     * @var array
     */	
	protected $rule = [
        'name'=>'require',
        'sex'=>'require',
        'phone'=>'require|number',
    ];
    
    /**
     * 定义错误信息
     * 格式：'字段名.规则名'	=>	'错误信息'
     *
     * @var array
     */	
    protected $message = [
        'name.require'=>'姓名不能为空',
        'sex.require'=>'请选择性别',
        'phone.require'=>'电话不能为空',
        'phone.number'=>'电话请使用纯数字',
    ];
}
