<template>
    <div>
        <div class="seach-box">
            <van-search v-model="searchvalue" placeholder="请输入搜索蜡笔小新相关内容" />
            <van-icon name="flower-o" @click="$router.push('/list')"/>
            <div v-for="(item,index) in everydata.filter(item=>item.title.indexOf(searchvalue)!==-1)" :key="index" class="imglist">
                <div class="imgs"><img :src="item.pic" alt="" @click="$router.push({name:'detail',params:item})"></div>          
                <b>{{item.class}}</b>
                <p>{{item.title}}</p>
            </div>
        </div>
    
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return {
            searchvalue:"",
        }
    },
    computed:{
        ...mapState(["everydata"])
    },
    methods:{
        ...mapActions(["getlistdata"])
    },
    created(){
        console.log(this.everydata)
        let obj={
            method:"post",
            url:"/geteverylist",
            datas:this.$route.params.title,
        }
        this.getlistdata(obj)
    }

}
</script>
<style lang="scss" scoped>
.seach-box{
    width: 100%;
    height: 50px;
    // background: darkblue;
}

.imglist{
    width: 150px;
    height: 200px;
    float: left;
    margin: 10px 10px;
    .imgs{
        width: 150px;
        height: 100px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
    
</style>