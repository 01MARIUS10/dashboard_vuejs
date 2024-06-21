<template>
    <div class="w-screen min-h-screen flex">
        <Navbar></Navbar>
        <div class="grow bg-red-300">
            <slot></slot>
        </div>
    </div>
</template>

<script lang='ts' setup>
import Navbar from './Dashboard/Navbar.vue';
</script>