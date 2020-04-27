<?php
namespace app\api\controller;
use app\api\model\RegisterAlumniModel;
use app\api\validate\RegisterValidate;

use think\facade\Cache;
use think\model\concern\TimeStamp;
use think\Request;

class Register extends Base
{
    //注册
    public function register(Request $request)
    {
        $data=$request->param();
//       验证验证码
        if ($data['code']!=Cache::get($data['username'])){
            return json(['code'=>0,'msg'=>'验证码不正确']);
        }
        $validate=new RegisterValidate();
        if (!$validate->check($data)) {
            return json(['code' => 0, 'msg' => $validate->getError()]);
        }
        $db=new RegisterAlumniModel();
        if ($info=$db->save($data)){
            return json(['code'=>1,'msg'=>'注册成功'],200);
        }
    }

//    发送验证码
    public function sms_code(Request $request)
    {
       $phoneNumber=$request->param('phoneNumber');
       //缓存验证码
       $code = rand(1000,9999);
       Cache::set($phoneNumber,$code,180);
//       发送验证码
       return $this->curl_post($phoneNumber,"验证码:".$code);
    }

//    验证码网络请求
    public function curl_post($phoneNumber,$content)
    {
        if (!empty($content)){
            $headers = array(
                'Content-Type:application/json; charset=utf-8',
                'Content-Length'.strlen($content),
            );
            $url="http://61.145.229.29:7791/sms/v2/std/send_single";
            $timestamp=date("mdhis");
            $str='H12907'.'00000000'.'298836'.$timestamp;
            $pwd=md5($str);
            $params = ["userid"=>"H12907", "pwd"=>$pwd, "mobile"=>$phoneNumber,"content"=>urlencode($content),'timestamp'=>$timestamp];
            $jsonStr = json_encode($params);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonStr);
            $output = curl_exec($ch);
            curl_close($ch);
            return $output;
        }
    }
}