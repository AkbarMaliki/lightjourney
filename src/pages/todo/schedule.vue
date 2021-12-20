<template>
    <div>
        <div class="" v-if="modal" style="width:100vw;height:100vw;position:absolute;top:0;left:0;z-index:100;" @click="modal=false;">

        </div>
        <div v-if="modal">
            <div class="bg-white p-4 shadow-lg rounded-lg" style="position: fixed;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);z-index:120;">
                <div class='p-5'>
                <p class="p-3 font-bold">ADD SCHEDULE !</p>
                <form action="#" @submit.prevent="save">
                <tr>
                    <td>Tanggal</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                         <input type="date" id="tanggal" name="tanggal" class="form-control form-control-sm" placeholder="tanggal" v-model="vdata.tanggal" >
                    </td>
                </tr>
                  <tr>
                    <td>Jam</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                         <input type="time" id="jam" name="jam" class="form-control form-control-sm" placeholder="jam" v-model="vdata.jam" >
                    </td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                         <input type="text" id="title" name="title" class="form-control form-control-sm" placeholder="title" v-model="vdata.title" >
                    </td>
                </tr>
                <tr>
                    <td>Isi</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                        <div class="sm-form">
                        <textarea
                        type="text"
                        id="isi"
                        name="isi"
                        rows="2"
                        placeholder="isi..."
                        class="form-control md-textarea"
                        v-model="vdata.isi"
                        ></textarea>
                        </div>
                    </td>
                </tr>
                <hr>
                <br>
                <button type="submit" v-if="crud=='simpan'" @click="crud='simpan'" class="btn btn-sm btn-dark "><img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt=""> Simpan</button>
                <button type="submit" v-if="crud!='simpan'" @click="crud='edit'" class="btn btn-sm btn-dark ">  <img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt=""> Edit</button>
                <button type="submit" v-if="crud!='simpan'" @click="crud='hapus'" class="btn btn-sm btn-dark "> <img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                     class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt=""> Hapus</button>
                </form>
                </div>
            </div>
        </div>
        <div class="container rounded-lg shadow-lg p-5">
            <div class="row">
                <div class="col-sm-9 order-2 order-sm-1">
                    <div class="row">
                        <div class="col-5">
                            <select class='form-control' v-model="vdata.bulan" style="width:100px;">
                            <option v-for="(item, index) in 12" :key="index" :value="item">{{item =='1'?'Januari':item =='2'?"Februari":item =='3'?"Maret":item =='4'?"April":item =='5'?"Mei":item =='6'?"Juni":item =='7'?"Juli":item =='8'?"Agustus":item =='9'?"September":item =='10'?"Oktober":item =='11'?"November":item =='12'?"Desember":''}}</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <input type="text" id="tahun" name="tahun" class="form-control form-control-sm" placeholder="tahun" style="width:100px;" v-model="vdata.tahun" >
                        </div>
                    </div>
                    <br>
                    <div class="" style=" ">
                        <button type="button" class="btn btn-sm  ml-2 mt-1" 
                            style="width:60px;"
                            :class="`${item.toString().split(' ')[2]==tgl?'btn-dark':'btn-outline-dark'}`"
                            @click="ambil(item)"  v-for="(item, index) in tanggalnya" :key="index">
                                {{item.toString().split(' ')[0]}}
                                <br>
                                {{item.toString().split(' ')[2]}}
                        </button>
                    </div>
           <div class="row">
                   <div class="col-12">
                       <br>
                        <div @click="ambil2(item)" v-for="(item, index) in td" :key="index+'scheul'" class="row p-3">
                            <div class="col-3  d-flex justify-content-center   text-black shadow-lg rounded-lg"> 
                                <div class="align-self-center font-bold text-lg">
                                    <button type="button" name="" id="" class="btn btn-sm btn-dark rounded-circle p-3">

                                    {{item.jam}}
                                    </button>
                                </div>
                                <!-- <p class="text-center font-bold p-2">
                                </p> -->
                            </div>
                            <div class="col-9 ">
                                <div class="p-3 text-sm rounded-lg shadow-lg hover:bg-blue-400 cursor-pointer ">
                                    <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                                         class="d-inline float-right" style="height:20px;width:20px;" alt="">
                                    <p class="font-bold text-lg">
                                        {{item.title}}  
                                    </p>
                                    <p class="">
                                        {{item.isi}}
                                    </p>
                                </div>
                            </div>
                        </div>   
                   </div>
        </div>
                </div>
                <div class="col-sm-3 order-1 order-sm-2 mb-3">
                    <p class="text-center font-bold text-xl p-3">
                        <img src="https://upload.egov.balangankab.go.id/svg/calendar.svg" 
                             class="d-inline" style="height:30px;width:20px;" alt="">
                        Schedule</p>
                    <button type="button"  class="btn btn-sm btn-style9 btn-block text-black font-bold " style="" @click="modal=true;crud='simpan';refresh()">Add +</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import _ from 'lodash'
import firebase from 'firebase'
let db = firebase.firestore()
import datefns from 'date-fns'
export default{
    data(){
        return{
            modal:false,
            pilihHari:'sun',
            tgl:1,
            crud:'simpan',
            datanya:[],
            tanggals:[

            ],
            vdata:{
              bulan:7,
              tahun:2021
            },
        }
    },
    computed:{
        tanggalnya(){
            let that =this;
            let data=this.getAllTanggal(this.vdata.bulan,this.vdata.tahun); 
            // data=data.filter(e=>{
            //     if(e.toString().split('-')[2]==that.tgl){
            //         return e;
            //     }
            // })       
            return data;
        },
        td(){
            let that=this;
            let data = this.datanya ;
            data=data.filter(e=>{
                if(e.tanggal.split('-')[2]==that.tgl){
                    return e;
                }
            })
            data=data.filter(e=>{
                if(e.tanggal.split('-')[1]==that.vdata.bulan){
                    return e;
                }
            })
             data=data.filter(e=>{
                if(e.tanggal.split('-')[0]==that.vdata.tahun){
                    return e;
                }
            })
            data=_.orderBy(data, 'jam', 'asc'); 
            return data;
        }
    },
    methods: {
        refresh(){
            // this.vdata={
            //     tanggal:'',
            //     jam:'',
            //     title:'',
            //     isi:''
            // }
            this.vdata.tanggal=''
            this.vdata.jam=''
            this.vdata.title=''
            this.vdata.isi=''
            this.$forceUpdate();
        },
        ambil(data){
            console.log(data)
            console.log(new Date(2014, 6, 2));
            this.tgl=data.toString().split(' ')[2]
        },
        ambil2(data){
            this.modal=true;
            this.crud='edit'
            this.vdata=JSON.parse(JSON.stringify(data));
            this.$forceUpdate();
            console.log(data)
        },
        simpan(){
            alert('berhasil disimpan')
        },
        save(data) {
            if(this.crud=='simpan'){
                this.vdata.tanggal = this.vdata.tanggal.toString(); 
                this.vdata.createdAt = datefns.format(new Date(),"DD MMMM YYYY");      
                this.vdata.created = datefns.format(new Date(),"DD MMMM YYYY");
                db
                    .collection('app_todo_schedule')
                    .doc()
                    .set(this.vdata, { merge: true })
                    .then((res) => {
                    console.log('input berhasil')
                    })
                    .catch((err) => {
                    console.log(err.message)
                    })
            }else if(this.crud=='edit'){
                this.vdata.tanggal = this.vdata.tanggal.toString(); 
                db
                    .collection('app_todo_schedule')
                    .doc(this.vdata.id)
                    .set(this.vdata, { merge: true })
                    .then((res) => {
                    console.log('update berhasil')
                    })
                    .catch((err) => {
                    console.log(err.message)
                    })
            }else if(this.crud=='hapus'){
                if(confirm('are you sure to delete this item ?')){
                console.log(this.vdata.id)
                db
                    .collection(`app_todo_schedule`)
                    .doc(this.vdata.id)
                    .delete()
                    .then((res) => {
                        console.log('berhasil hapus!')
                    })
                }
            }
        },
        getData() {
        db.collection('app_todo_schedule').onSnapshot((res) => {
            let data = res.docs.map((e) => {
                console.log(e.id)
            return {
                id: e.id,
                ...e.data(),
            }
            })
            console.log(data)
            this.datanya = data
            this.$forceUpdate()
        })
        },
        test(){
             db.collection('app_todo_schedule').onSnapshot((res) => {
            let data = res.docs.map((e) => {
                console.log(e.id)
            return {
                id: e.id,
                ...e.data(),
            }
            })
            console.log(data)
            this.datanya = data
            this.$forceUpdate()
        })
        },
        getTgl(data){
            let hasil='';
            if(data=='Jan') {
                hasil=1;
            }
            else if(data=='Feb') {
                hasil=2;
            }
            else if(data=='Mar') {
                hasil=3;
            }
            else if(data=='Apr') {
                hasil=4;
            }
            else if(data=='May') {
                hasil=5;
            }
            else if(data=='Jun') {
                hasil=6;
            }
            else if(data=='Jul') {
                hasil=7;
            }
            else if(data=='Aug') {
                hasil=8;
            }
            else if(data=='Sep') {
                hasil=9;
            }
            else if(data=='Oct') {
                hasil=10;
            }
            else if(data=='Nov') {
                hasil=11;
            }
            else if(data=='Dec') {
                hasil=12;
            }
            return hasil;
        },
        getAllTanggal(month, year) { 
            return (new Array(31)).fill('').map((v,i)=>new Date(year,month-1,i+1)).filter(v=>v.getMonth()===month-1)
            }
    },
    mounted() {
        let tanggal = new Date();
        this.vdata.bulan = this.getTgl(tanggal.toString().split(' ')[1]);
        this.vdata.tahun = tanggal.toString().split(' ')[3];
        this.tgl= tanggal.toString().split(' ')[2];
        this.tanggals=this.getAllTanggal(this.vdata.bulan,this.vdata.tahun);    
        this.getData();    
    },
    layout:'lightjourney'
}
</script>
<style>
.scroll{
            white-space:nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling:touch;
            -ms-overflow-style:-ms-autohiding-scrollbar;
        }
       


.scroll::-webkit-scrollbar {
  width: 7px;
  height:7px;
}

/* Track */
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background: rgb(95, 86, 86); 
  border-radius: 10px;
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(95, 86, 86); 
}

</style>