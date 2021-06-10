<template>
      
 <div id="wrapper">
       <Leftbar />
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
                <Topbar /> 
                <FleetTripDetails />
                <Logout />
            </div>
     </div>
 </div>

</template>


<script>
import FleetTripDetails from './FleetTripDetails.vue'
import Leftbar from './Leftbar.vue'
import Topbar from './Topbar.vue'
import Logout from './Logout.vue'
export default {
    components:{
        Leftbar,
        Topbar,
        Logout,
        FleetTripDetails,
    }
 
}
</script>

<style>

</style>