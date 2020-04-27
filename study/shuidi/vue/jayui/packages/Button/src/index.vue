<template>
    <div
    class="x-button"
    :class="['x-button--' + type]"
     >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'x-button',
    props:{
        type:String,
        default:''
    }
}
</script>
<style scoped>
    .x-button{
        display: inline;
        padding: 3px 6px;
        background: #000;
        color: #fff;

    }
</style>