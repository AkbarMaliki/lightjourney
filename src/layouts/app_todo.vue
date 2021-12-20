
<template>
<div >
    <div class="p-2 anim left bg-gray-800 shadow-2xl" style="height:100vh;"  :style="menu?'width: 250px;':'width: 40px;'">
        <div class=" rounded-lg">
            <div v-if="menu" class="text-left p-3  rounded-lg shadow-lg" style="background: rgb(31,143,175);
                    background: linear-gradient(90deg, rgba(31,143,175,1) 0%, rgba(186,255,217,1) 100%);">

                    <p class="text-white float-right mt-4 pr-4" id="admin">T_A_Maliki</p>
            <img src="https://upload.egov.balangankab.go.id/svg/user.svg" 
                            class="d-inline img-circle" style="height:50px;width:40px;filter: brightness(0) invert(1);" alt="">
                <div>
                <br>
                <a  href="#" @click="$router.push('/app')" style="z-index:2;position:absolute;widht:100%;">
                    <button type="button" class="btn btn-sm btn-dark btn-block text-sm">
                    <img src="https://upload.egov.balangankab.go.id/svg/th-small-outline.svg" 
                         class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
                     DASHBOARD</button>
                </a> 
                <br>
                </div>
            </div>  
            <div v-else>
            <br>
            <br>
            </div>
            <div v-show="!menu">
                <br>
                <br>
            </div>
            <a href="#" @click="$router.push('/app/calculator')">
            <div  class="dropdown mt-1 ml-0 d-block text-sm" style="z-index:98;width:100%;">
                <button type="button" class="text-left text-white mt-5 btn-block dropbtn">
                    <span v-if="menu" class="pl-1">
                       <img src="https://upload.egov.balangankab.go.id/svg/calculator.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt=""> Calculator
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/calculator.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div v-show="!menu" class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:235px;">
                <a ><button type="button"  class="btn btn-sm btn-dark  btn-block mt-1 text-left">Calculator</button></a>
                </div>
            </div>
            </a>

            <a href="#" @click="$router.push('/app/todo/schedule')">
            <div  class="dropdown mt-1 ml-0 d-block text-sm" style="z-index:98;width:100%;">
                <button type="button" class="text-left text-white mt-5 btn-block dropbtn">
                    <span v-if="menu" class="pl-1">
                       <img src="https://upload.egov.balangankab.go.id/svg/stopwatch.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt=""> Schedule
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/stopwatch.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div v-show="!menu" class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:235px;">
                <a ><button type="button"  class="btn btn-sm btn-dark  btn-block mt-1 text-left">Schedule</button></a>
                </div>
            </div>
            </a>

            <a href="#" @click="$router.push('/app/todo/task')">
            <div  class="dropdown mt-1 ml-0 d-block text-sm" style="z-index:98;width:100%;">
                <button type="button" class="text-left text-white mt-5 btn-block dropbtn">
                    <span v-if="menu" class="pl-1">
                       <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt=""> Task
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div v-show="!menu" class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:235px;">
                <a ><button type="button"  class="btn btn-sm btn-dark  btn-block mt-1 text-left">Task</button></a>
                </div>
            </div>
            </a>

             <a href="#" @click="$router.push('/app/todo/note')">
            <div  class="dropdown mt-1 ml-0 d-block text-sm" style="z-index:98;width:100%;">
                <button type="button" class="text-left text-white mt-5 btn-block dropbtn">
                    <span v-if="menu" class="pl-1">
                       <img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt=""> Note
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div v-show="!menu" class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:235px;">
                <a ><button type="button"  class="btn btn-sm btn-dark  btn-block mt-1 text-left">Note</button></a>
                </div>
            </div>
            </a>

            <a href="#" @click="$router.push('/app_todo/task')">
            <div  class="dropdown mt-1 ml-0 d-block text-sm" style="z-index:98;width:100%;">
                <button type="button" class="text-left text-white mt-5 btn-block dropbtn">
                    <span v-if="menu" class="pl-1">
                       <img src="https://upload.egov.balangankab.go.id/svg/cog.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt=""> Setting
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/cog.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div v-show="!menu" class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:235px;">
                <a ><button type="button"  class="btn btn-sm btn-dark  btn-block mt-1 text-left">Setting</button></a>
                </div>
            </div>
            </a>

             <a href="#" @click="$router.push('/app_todo/task')">
            <div  class="dropdown mt-1 ml-0 d-block text-sm" style="z-index:98;width:100%;">
                <button type="button" class="text-left text-white mt-5 btn-block dropbtn">
                    <span v-if="menu" class="pl-1">
                       <img src="https://upload.egov.balangankab.go.id/svg/eject.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt=""> Logout
                    </span>
                    <span v-else>
                        <img src="https://upload.egov.balangankab.go.id/svg/eject.svg" 
                            class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
                    </span>
                </button>
                <div v-show="!menu" class="p-1 text-sm dropdown-content animate__animated animate__fadeIn " style="width:235px;">
                <a ><button type="button"  class="btn btn-sm btn-dark  btn-block mt-1 text-left">Logout</button></a>
                </div>
            </div>
            </a>

        </div>
    </div> 
    <div class="anim right bg-white  p-2 " style="">
        <button type="button" class="btn btn-sm btn-dark  " @click="menu=!menu">
            <img src="https://upload.egov.balangankab.go.id/svg/th-menu.svg" 
                class="d-inline" style="height:17px;width:17px;filter: brightness(0) invert(1);" alt="">
        </button>
            <div class="float-right mr-3 mt-2">
        <img src="https://upload.egov.balangankab.go.id/svg/media-record.svg" 
             class="d-inline" style="height:12px;width:12px;" alt="">
                 <img src="https://upload.egov.balangankab.go.id/svg/media-record.svg" 
             class="d-inline" style="height:12px;width:12px;" alt="">
                 <img src="https://upload.egov.balangankab.go.id/svg/media-record.svg" 
             class="d-inline" style="height:12px;width:12px;" alt="">
            </div>
    </div>
    <div style="position:absolute;min-height:100vh;width:100vw;z-index:1000;margin-left:250px;" v-if="menu" @click="menu=false">
    </div>
    <div class="">
        <router-view></router-view>
    </div>
</div>
</template>
<script >
export default{
    data(){
        return{
            menu:false,
            ready:false
        }
    },
    methods: {
        logout(){
            
        }
    },
}
</script>
<style>
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100000;
}

.dropdown-content a {
  color: black;
  padding: 5px;
  padding-left: 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.right {
    overflow: hidden;
    min-height: 50px;
}
.left {
    float: left;
    
    min-height: 100vh;
}

.anim{
    transition:all 0.4s ease-in-out ;
}

</style>
