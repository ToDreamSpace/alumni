<?php

namespace app\api\controller;

use think\Controller;
//解决跨域
class Base extends Controller
{
    public function initialize()
    {
        parent::initialize();
        header("Access-Control-Allow-Origin:*");
        header("Access-Control-Allow-Methods:GET, POST, OPTIONS, DELETE");
        header('Access-Control-Allow-Credentials:true');
        header("Access-Control-Allow-Headers:DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type, Accept-Language, Origin, Accept-Encoding");
    }
}
