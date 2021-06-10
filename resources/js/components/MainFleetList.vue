<template>
   <div id="wrapper">
       <Leftbar />
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
                <Topbar /> 
                <FleetList />
                <Logout />
            </div>
     </div>
 </div>
</template>

<script>
import Leftbar from './Leftbar.vue'
import Topbar from './Topbar.vue'
import Logout from './Logout.vue'
import FleetList from './FleetList.vue'
export default {
    components:{
        FleetList,
        Leftbar,
        Topbar,
        Logout,
    }

}
</script>

<style>

</style>