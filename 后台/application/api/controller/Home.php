<?php

namespace app\api\controller;

use Firebase\JWT\JWT;
use think\Request;

//鉴权
class Home extends Base
{
    /**
     * @param Request $request
     */
    public function initialize()
    {
        parent::initialize();
        $header=request()->header();
        if(!isset($header['token'])){
            return json(['code'=>0,'msg'=>'没有检测到token'],400)->send();
        }
        $token=$header['token'];
        $key='swupl';
        try{
            $info=JWT::decode($token,$key,array('HS256'));
        }catch (\Exception $e){
            return json(['code'=>0,'msg'=>$e->getMessage()],400)->send();
        }
        $this->uid=$info->uid;
    }
}
