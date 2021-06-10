<template>
  <div class="col-xl-12 col-lg-12">
                    <div class="card shadow mb-4">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Add New Fleet</h6>  
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <form>
                                <div class="form-group row">
                                  <div class="col-lg-8">
                                    <input type="text" class="form-control form-control-md pt-2 pb-2 mt-3" id="username" name="username" placeholder="User Name">
                                  </div>
                                </div>
                                <div class="form-group row">
                                   
                                    <div class="col-lg-8">
                                      <input type="text" class="form-control form-control-md pt-2 pb-2 mt-3" id="fleet_number" name="fleet_number" placeholder="Fleet Number">
                                    </div>
                                  </div>
                                  
                                  <div class="form-group row">
                                    <div class="col-lg-8">
                                      <input type="number" min="1" class="form-control form-control-md pt-2 pb-2 mt-3" id="total_seats" name="total_seats" placeholder="Total Seats">
                                    </div>
                                    </div>
                                   
                                    <div class="form-group row">
                                        <div class="col-lg-8">
                                          <input type="password" class="form-control form-control-md pt-2 pb-2 mt-3" id="fleet_password" name="fleet_password" placeholder="Fleet Password">
                                        </div>
                                      </div>
                                      <div class="form-group row">
                                        <div class="col-lg-8">
                                          <input type="password" class="form-control form-control-md pt-2 pb-2 mt-3" id="cfleet_password" name="cfleet_password" placeholder="Confirm Fleet Password">
                                        </div>
                                      </div>
                                      <div class="form-group row">
                                        <div class="col-lg-8">
                                            <select class="custom-select custom-select-md mb-3 pt-2 pb-2  mt-3">
                                                <option selected>Select Route</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                              </select>
                                        </div>
                                      </div>
                                      <div class="form-group row">
                                        <div class="col-lg-8">
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
                                          <div class="col-lg-8">
                                            <input type="submit" value="Submit" class="btn btn-success btn-md float-right ml-2">
                                            <input type="reset" value="Reset" class="btn btn-primary btn-md float-right">
                                           
                                          </div>
                                      </div>
                                     
                              </form>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {

}
</script>

<style>

</style>