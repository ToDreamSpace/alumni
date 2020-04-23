<?php

namespace app\api\controller;

use think\Controller;
//解决跨域
class Base extends Controller
{
    public function initialize()
    {
        parent::initialize();
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header('Access-Control-Allow-Headers:x-requested-with,content-type');
    }
}
