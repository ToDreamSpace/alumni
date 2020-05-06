<?php

namespace app\api\model;

use think\Model;

class RegisterAlumniModel extends Model
{
    public $table='alu_register_alumni';

//    关联本科模型
    public function benke()
    {
        return $this->hasOne('BenkeModel','id','id');
    }
    //    关联专科模型
    public function zhuanke()
    {
        return $this->hasOne('ZhuankeModel','id','id');
    }
    //    关联硕士模型
    public function shuoshi()
    {
        return $this->hasOne('ShuoshiModel','id','id');
    }
    //    关联博士模型
    public function boshi()
    {
        return $this->hasOne('BoshiModel','id','id');
    }
    //    关联函授模型
    public function hanshou()
    {
        return $this->hasOne('HanshouModel','id','id');
    }


    //    关联工作模型
    public function work()
    {
        return $this->hasOne('WorkModel','id','id');
    }
}
