<template>
  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Add New Route</h6>
                    </div>
                    <div class="card-body">
                        <form method="post" action="">
                            <div class="row"  >
                                <div class="col-lg-12">
                                    <div id="inputFormRow">
                                        <div class="input-group mb-3">
                                            <input type="text"  class="form-control m-input" placeholder="Start Location" autocomplete="off">
                                        </div>
                                    </div>
                                     <div id="inputFormRow">
                                        <div class="input-group mb-3" v-for="(input,index) in input" :key="index" >
                                            <input type="text"  class="form-control m-input" placeholder="Add Stop" autocomplete="off">
                                            <div class="input-group-append">                
                                                <button @click="removeroute()" type="button" class="btn btn-danger">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="addroute()" type="button" class="btn btn-info font-weight-bold">Add Stop <i class="fas fa-plus"></i></button>
                                    <input type="text" name="" class="form-control m-input mt-5" placeholder="End Location" autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group row pt-3">
                                <div class="col-lg-12">
                                    Status *
                                    <label class="radio-inline">
                                        <input type="radio" name="optradio"> Active
                                      </label>
                                      <label class="radio-inline">
                                        <input type="radio" name="optradio"> Inactive
                                      </label>
                                </div>
                              </div>
                              <div class="row">
                                  <div class="col-lg-12">
                                    <input type="submit" value="Submit" class="btn btn-success btn-md float-right ml-2">
                                    <input type="reset" value="Reset" class="btn btn-primary btn-md float-right">
                                   
                                  </div>
                              </div>
                        </form>
                        
                    </div>
                </div>
</template>

<script>
export default {
    data(){
        return{
        input:[{
            route:''
        }]
    }
    },
    methods:{
        addroute(index){
            this.input.push({
                route:''
            })
        },
        removeroute(index){
            this.input.splice(index,1)

        }
    },

 

}
</script>

<style>

</style>