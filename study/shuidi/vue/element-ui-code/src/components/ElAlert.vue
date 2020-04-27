<template>
<transition name="el-alert-fade">
    <div
        class="el-alert"
        :class="[typeClass,center ?' is-center' :'','is-' + effect]"
        v-show="visible" 
    >
    <i class="el-alert__icon" :class="[ iconClass]"></i>
    <div class="el-alert__content">
        <span class="el-alert__title">
            {{title}}
        </span>
    </div>
        
    </div>
</transition>

</template>
<script>
const TYPE_CLASS_MAP ={
    'success':'el-icon-success',
    'warning': 'el-icon-warning',
    'erroe': 'el-icon-error'
};
export default {
    name:'ElAlert',
    props:{
        type:{
            type:String,
            default:'info'//不用了,使用好默认值
        },
        title:{
            type:String,
            default:''
        },
        center:Boolean,
        effect:{
            type:String,
            default:'light',
            validator:function(value){
                //其中之一
                return['light','dark'].indexOf(value) !== -1;
            }
        }
    },
    computed:{
        // 计算属性 外面传进来的值在计算一下
        typeClass(){
            return `el-alert--${ this.type }`;
        },
        iconClass(){
            return 'TYPE_CLASS_MAP'[this.type] || 'ele-icon-info'
        }
    },
    data(){
        return{
            visible:true
        }
    }
}
</script>