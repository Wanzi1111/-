<template>
    <div>
        <div >
        <h3>{{text.class}}</h3>
        <h5>{{text.title}}</h5>
        <div class="imgs">
            <img :src="text.pic" alt="">
        </div>
        <van-icon name="flower-o" @click="$router.push('/list')"/>
        <p>{{text.desc}}</p>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        console.log(this.$route.params)
        return {
            text:this.$route.params
        }
    }
}
</script>
<style lang="scss" scoped>
.imgs{
    width: 300px;
    height: 300px;
    margin: auto;
    img{
        width: 100%;
        height: 100%;
    }

}
    
</style>