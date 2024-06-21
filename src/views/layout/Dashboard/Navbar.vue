<template>
    <div class="relative flex flex-col h-100 w-auto p-[15px]"
    :class="{'lessNav':!isMoreDetail}"
    >
        <div class="nav-head grow">
            <div class="logo flex items-center justify-center h-[100px] px-[10px] ">
                <img src="../../../_image/logo.png" alt="" class="w-[42px] h-[42px]">
                <span class="ml-[10px] font-semibold text-xl hideNavCollapse grow">Ramora</span>
            </div>
            <div class="profil flex items-center justify-center  h-[130px] px-[10px] pb-[10px] ">
                <div class="profil-image  border-2 rounded-[12px]  border-red-200">
                    <div class="  m-[2px] rounded-[8px] bg-gray-200">
                        <img src="../../../_image/avatar.webp" alt="" class="w-[65px] h-[65px] ">
                    </div>
                </div>
                <span  class="ml-3 font-semibold hideNavCollapse grow">Sakura</span>
            </div>
            <div class="menu">
                <p class="mb-2 px-[10px] text-gray-600 font-bold text-lg " >Menu</p>
                <NavLink v-for="i in 4" :key="i" class="mb-[8px]"></NavLink>
            </div>
        </div>
        <div class="nav-foot flex items-center justify-center h-[60px]">
            <img src="../../../_image/shop.svg" alt="icon" class="w-[25px] h-[25px]">
            <span class="ml-3 hideNavCollapse"> Logout</span>
        </div>
        <div class="toogle absolute top-[15px] right-[-45px] bg-red-500 "
        @click="toogleNav()">
            <img src="../../../_image/shop.svg" class="w-[40px] h-[40px] p-[10px]" alt="toogle">
        </div>
    </div>
</template>

<script setup lang="ts">
import NavLink from "../../../components/atoms/NavLink.vue"
import { ref } from 'vue';

let isMoreDetail = ref<Boolean>(true)
let toogleNav = () => {
    console.log('toogle is',isMoreDetail.value)
    isMoreDetail.value = !isMoreDetail.value
}
</script>


<style>
.lessNav .hideNavCollapse{
    display:none;
}
.lessNav .menu > p{
    text-align: center;
}
.hideNavCollapse{
    width:200px;        
}
</style>