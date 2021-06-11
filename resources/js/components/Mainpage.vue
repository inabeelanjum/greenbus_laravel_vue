<template>
      
 <div id="wrapper">
       <Leftbar />
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
                <Topbar /> 
                <Dashboard />
                <Logout />
            </div>
     </div>
 </div>

</template>


<script>
import Dashboard from './Dashboard.vue'
import Leftbar from './Leftbar.vue'
import Topbar from './Topbar.vue'
import Logout from './Logout.vue'
export default {
    components:{
        Dashboard,
        Leftbar,
        Topbar,
        Logout
    }
 
}
</script>

<style>

</style>