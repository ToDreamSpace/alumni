<?php

namespace app\admin\model;

use think\Model;

class AluMerberModel extends Model
{
    protected $table='alu_menber';

    public function getSexAttr($value)
    {
        if($value==1){
            return "男";
        }else if($value==2){
            return "女";
        }else{
            return "";
        }
    }
    
    //新增/编辑方法
    public function _updata($data)
    {
        if(isset($data['id'])){
            //修改
            return $this->save($data,['id'=>$data['id']]);
        }else{
            // 新增
            return $this->save($data);
        }
    }

}
