<template>
    <div  >
        <div v-for="(item,index) in list" :key="index" class="listhome">
                <img :src="item.pic" alt="" >
                <p @click="$router.push({name:'everylist',params:{title:item.class}})">蜡笔小新{{item.class}}</p>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(["list","img"]) 
    },
    methods: {
        ...mapActions(["getlistdata"]),

    },
    mounted(){
        let obj={
            method:"get",
            url:"/getlistdata",
            datas:[]
        }
        this.getlistdata(obj)
    },

}
</script>
<style lang="scss" scoped>
.listhome{
    width: 100%;
    height: 200px;
    line-height: 200px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0px;
        left: 0px;
    }
    p{
        position: absolute;
        z-index: 999;
        width: 100%;
        height: 200px;
        color: white;
        font-weight: bolder;
        font-size: 30px;
    }

}
    
</style>
