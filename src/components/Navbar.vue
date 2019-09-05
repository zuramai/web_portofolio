<template>
    <div id="navbar">
        <ul class="nav flex justify-around flex-wrap">
            <li class="nav-item">
                <router-link to="/about">Tentang</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/karya">Karya</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/skills">Skills</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
    .nav {
        width: 100%;
    }
    .nav-item {
        display: inline-block;    
        list-style: none;
        padding: 20px;
        font-family: 'Chilanka';
        font-size: 18px; 
    }
    
</style>