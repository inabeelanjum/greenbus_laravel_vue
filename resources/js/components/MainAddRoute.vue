<template>
   <div id="wrapper">
       <Leftbar />
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
                <Topbar /> 
                <Addroute />
                <Logout />
            </div>
     </div>
 </div>
</template>

<script>
import Addroute from './Addroute.vue'
import Topbar from './Topbar.vue'
import Logout from './Logout.vue'
import Leftbar from './Leftbar.vue'
export default {
    components:{
        Addroute,
        Leftbar,
        Topbar,
        Logout,
    }

}
</script>

<style>

</style>