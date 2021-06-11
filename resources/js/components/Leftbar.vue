<template>
   <ul :class="[status ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled']" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link class="" :class="[ status ? 'sidebar-brand d-flex align-items-center justify-content-center' : 'sidebar-brand d-flex align-items-center justify-content-center toggled' ]" to="/" >
                <div class="sidebar-brand-text mx-3"><img class="logo" src="/css/img/logo.png" alt=""></div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link class="nav-link" to="/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                    </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Interface
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-car"></i>
                    <span>Fleet Managment</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Fleet Types:</h6>
                        
                     
                        <router-link class="collapse-item" to="/addfleet">Add Fleet</router-link>
                         
                        <router-link class="collapse-item" to="/fleetlist">Fleet List</router-link>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="far fa-money-bill-alt"></i>
                    <span>Ticket Managment</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Tickets:</h6>
                        <a class="collapse-item" href="">Passenger</a>
                        <a class="collapse-item" href="">Booking Information</a>
                        <a class="collapse-item" href="">How To Use</a>
                        <router-link class="collapse-item" to ="/tripdetails">Fleet Trip Details</router-link>
                        <a class="collapse-item" href="">Refund</a>
                        <a class="collapse-item" href="">Feedback</a>
                        <a class="collapse-item" href="">DownTime</a>

                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsethree"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-road"></i>
                    <span>Trip Managment</span>
                </a>
                <div id="collapsethree" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Route:</h6>
                        <router-link class="collapse-item" to="/addroute">Add Route</router-link>
                        <router-link class="collapse-item" to="/routelist">Route List</router-link>
                        <a class="collapse-item" href="">Shedule</a>
                        <h6 class="collapse-header">Route:</h6>
                        <a class="collapse-item" href="">Assign</a>
                        
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">
    
           

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"  v-on:click="doit()"></button>
            </div>
            

           
          

        </ul>

        <router-view />
</template>

<script>
import { mapState } from 'vuex'
export default {
  
    
    computed:{
        ...mapState(['status'])
    },
    methods:{
        doit(){
        this.$store.commit('changestatus')
        }
    }
  
  

}
</script>

<style scoped>
.logo{
    width: 130px;
}

</style>>

