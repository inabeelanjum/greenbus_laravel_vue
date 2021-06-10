<template>
      
 <div id="wrapper">
       <Leftbar />
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
                <Topbar  /> 
                <RouteList />
                <Logout />
            </div>
     </div>
 </div>

</template>


<script>
import RouteList from './RouteList.vue'
import Leftbar from './Leftbar.vue'
import Topbar from './Topbar.vue'
import Logout from './Logout.vue'
export default {
    components:{
        RouteList,
        Leftbar,
        Topbar,
        Logout
    }
 
}
</script>

<style>

</style>