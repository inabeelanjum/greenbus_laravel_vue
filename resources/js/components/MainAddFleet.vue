<template>
      
 <div id="wrapper">
       <Leftbar />
        <div id="content-wrapper" class="d-flex flex-column"> 
            <div id="content">
                <Topbar /> 
                <Addfleet />
                <Logout />
            </div>
     </div>
 </div>

</template>


<script>
import Addfleet from './Addfleet.vue'
import Leftbar from './Leftbar.vue'
import Topbar from './Topbar.vue'
import Logout from './Logout.vue'
export default {
    components:{
        Addfleet,
        Leftbar,
        Topbar,
        Logout
    }
 
}
</script>

<style>

</style>