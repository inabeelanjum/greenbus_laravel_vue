<template>
   <div class="col-xl-3 col-md-6 pt-4 pm-4 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body pt-4 pm-4">
                            <a href="" class="btn btn-primary btn-btn-md"><i class="fas fa-plus"></i> Add</a>
                           
                        </div>
                    </div>
                </div>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Route List</h6>
                    </div>
                    <div class="card-body">
                        <form action=""> 
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Route Name</th>
                                        <th>Stop Names</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                               
                                <tbody>
                                    <tr>
                                        <td>
                                        <input type="checkbox" id="customCheck1">
                                        </td>
                                        <td>Saddar - 6th Road</td>
                                        <td>Marrir Chowk | Liaqat Bagh | waris khan </td>
                                        <td>Active</td>
                                        <td>
                                            <a href="">
                                                <img style="height:20px;
                                                width: 20px;" src="/css/img/delete.svg" alt="edit">
                                            </a>
                                            <a href="">
                                                <img style="height:20px;
                                                width: 20px;" src="/css/img/edit.svg" alt="delete">
                                            </a>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                           
                                <div class="col-md-12 text-center">
                            <button type="submit" class="btn btn-success mb-3"> Delete All </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
</template>

<script>
export default {

}
</script>

<style>

</style>