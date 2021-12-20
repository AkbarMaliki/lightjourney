<template>
    <div>
        <div style="width:100vw;height:50px;position:fixed;top:0px;left:0px;z-index:1000;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,0.502305145691089) 0%, rgba(9,9,121,0.5219129888283438) 35%, rgba(0,212,255,0.6283555658591562) 100%);
        " class="bg-blue-300 shadow rounded-b">
            <div style="height:50px;" class="d-flex justify-content-center align-items-center shadow-lg rounded-lg">
                <div style="width:100%">
                    <button type="button" @click="$router.push('/')" class="btn btn-sm btn-style10  float-right mr-5">Light Journey</button>
                    <button type="button" @click="$router.push('/')" class="btn btn-sm btn-dark ml-5 "><span class="typcn typcn-cog"></span> Catatan</button>
                    <button type="button" @click="$router.push('/perbandingan')" class="btn btn-sm btn-dark ml-2 "><span class="typcn typcn-cog"></span> Perbandingan</button>
                    <button type="button" @click="$router.push('/step')" class="btn btn-sm btn-dark ml-2 "><span class="typcn typcn-cog"></span> Step Development</button>
                    <button type="button" @click="$router.push('/todo/task')" class="btn btn-sm btn-dark ml-2 "><span class="typcn typcn-cog"></span> Todo</button>
                    <button type="button" @click="$router.push('/todo/schedule')" class="btn btn-sm btn-dark ml-2 "><span class="typcn typcn-cog"></span> Schedule</button>
                </div>
            </div>
        </div>
        <hr>
        <br>
        <br>
        <br>
      <router-view></router-view>  
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
}
</script>