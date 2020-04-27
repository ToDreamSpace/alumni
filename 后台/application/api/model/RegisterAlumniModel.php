<?php

namespace app\api\model;

use think\Model;

class RegisterAlumniModel extends Model
{
    public $table='alu_register_alumni';


//    关联学院模型
    public function profileYuanxi()
    {
        return $this->hasOne('YuanxiModel','ID','bkyuanxi');
    }

}
