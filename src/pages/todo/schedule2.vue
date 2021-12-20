<template>
    <div>
        <!-- <div v-if="modal" style="width:100vw;height:100vh;z-index:2;background:rgba(21,176,235,0.2544059860272234);">

        </div> -->
        <div style="position:fixed;right:10px;bottom:20px;">
            <button type="button"  class="btn btn-md btn-style9 rounded-full " @click="modal2=!modal2;">+</button>
        </div>
        <div class="" v-if="modal2" style="width:100vw;height:100vw;position:absolute;top:0;left:0;z-index:100;" @click="modal2=false;">

        </div>
        <div v-if="modal2">
            <div class="bg-white p-4 shadow-lg rounded-lg" style="position: fixed;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);z-index:120;">
                <div class='p-5'>
                <p class="p-3 font-bold">ADD SCHEDULE !</p>
                <form action="#" @submit.prevent="save">
                <tr>
                    <td>Tanggal</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                         <input type="date" id="tanggal" name="tanggal" class="form-control form-control-sm" placeholder="tanggal" v-model="vdata2.tanggal" >
                    </td>
                </tr>
                  <tr>
                    <td>Jam</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                         <input type="time" id="jam" name="jam" class="form-control form-control-sm" placeholder="jam" v-model="vdata2.jam" >
                    </td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td class="pl-3 pr-3">:</td>
                    <td>
                         <input type="text" id="title" name="title" class="form-control form-control-sm" placeholder="title" v-model="vdata2.title" >
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
                        v-model="vdata2.isi"
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
        <div v-if="modal" 
        class="shadow rounded-lg bg-white"
        style="position: fixed;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);z-index:3">
        <div class="p-4" style="width:80vw;height:80vh;overflow:scroll;">
            <button type="button" @click="modal=false" class="btn btn-dark float-left">x</button>
            <br>
            <hr>
            <p class="font-bold">SCHEDULE <span class="typcn typcn-calendar"></span></p>
                <div @click="ambil2(item)" v-for="(item, index) in pilih.schedule" :key="index+'scheul'" class="row p-3">
                    <div class="col-3  d-flex justify-content-center   text-black shadow rounded-lg"> 
                        <div class="align-self-center font-bold text-lg">
                            <button type="button" name="" id="" class="btn btn-sm btn-dark rounded-circle p-3">
                            {{item.jam}}
                            </button>
                        </div>
                        <!-- <p class="text-center font-bold p-2">
                        </p> -->
                    </div>
                    <div class="col-9 ">
                        <div class="p-3 text-sm rounded-lg shadow hover:bg-blue-400 cursor-pointer ">
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
        <div style="height:100vh;" class="">
            <br>
            <div class="row justify-content-center">
              <div class="col-4 text-right">
                    <button type="button" @click="prev" class="btn btn-dark  text-xs "><span class="typcn typcn-arrow-left"></span> Prev</button>
              </div>
              <div class="col-4">
                    <div class="text-center pt-2 font-bold">
                        {{namabulan(vdata.bulan)}} / {{vdata.tahun}}
                    </div>
              </div>
              <div class="col-4">
                    <button type="button" @click="next" class="btn btn-dark  text-xs ">Next <span class="typcn typcn-arrow-right"></span></button>
              </div>
            </div>
            <div class="p-1">
                <div class="parent">
                    <div class="p-3 bg-dark hover:bg-blue-400 cursor-pointer text-sm font-bold text-white" style="height:10vh;" 
                     v-for="(item, index) in hari" :key="index+'hari'">
                        {{item}}
                    </div>
                    <div v-for="(item, index) in skip" :key="index+'skip'">
                        
                    </div>
                    <div @click="ambil(item)" class="p-3 shadow hover:bg-blue-400 cursor-pointer"  style="min-height:15vh;"
                    :class="`${item.schedule.length>0?'bg-red-300':''}`" 
                    v-for="(item, index) in tanggals" :key="index">
                        <div @click="item.name?liburnya=item:''">
                            <div class="float-right font-bold text-sm text-red-400" v-if="item.name">
                                o
                            </div>
                            <!-- {{new Date(item.tgl).toString().split(' ')[0]}} -->
                            <span :class="`${new Date(item.tgl).toString().split(' ')[0]=='Sun'?'text-red-600':item.name?'text-red-600':''}`">
                                {{new Date(item.tgl).toString().split(' ')[2]}}
                            </span>
                            <div class="sm:float-right font-bold text-lg text-center" v-if="item.schedule.length>0">
                                <span class="typcn typcn-pin"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pl-3 pb-3">
            <hr>
            <div v-for="(item, index) in libur" :key="index+'liburs'">
                <p>{{item.date}} - {{item.name}} {{item.info}}</p>
            </div>
        </div>
        <div class="bg-black p-3 text-white"> 
            
            API : https://kalenderindonesia.com/api
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import datefns from 'date-fns'
import libur from '@/static/json/calendar_libur.json'
import _ from 'lodash'
import firebase from 'firebase'
let db = firebase.firestore()
export default{
    data(){
        return{
            vdata:{},
            modal:false,
            modal2:false,
            tgl:'',
            alltgl:[],
            libur:[],
            liburnya:{},
            skip:0,
            pilihHari:'sun',
            pilih:[],
            tgl:1,
            crud:'simpan',
            datanya:[],
            tanggals:[

            ],
            vdata:{
              bulan:7,
              tahun:2021
            },
             vdata2:{
              bulan:7,
              tahun:2021
            },
            hari:[
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                "Fri",
                "Sat",
            ],
            tanggals2:[],
            datanya2:[]
        }
    },
    mounted() {
        let that =this
        this.getLibur();
        this.getSchedule();
        var tanggal = new Date();
        this.vdata.bulan = this.getTgl(tanggal.toString().split(' ')[1]);
        this.vdata.tahun = tanggal.toString().split(' ')[3];
        this.getTanggal(this.vdata.bulan,this.vdata.tahun);
        
        
        this.$forceUpdate();

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
            // data=data.filter(e=>{
            //     if(e.tanggal.split('-')[2]==that.tgl){
            //         return e;
            //     }
            // })
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
    watch:{
        datanya2(){
            this.getData();
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
            if(data.schedule.length>0){
             this.modal=!this.modal;
             this.modal2=false;
             this.pilih=data   
            }else{
             this.modal=false;
             this.modal2=false;
            }
            // console.log(new Date(2014, 6, 2));
            // this.tgl=data.toString().split(' ')[2]
        },
        ambil2(data){
            this.modal=false;
            this.modal2=true;
            this.crud='edit'
            this.vdata2=JSON.parse(JSON.stringify(data));
            this.$forceUpdate();
        },
        namabulan(){
            let data = 'Januari';
            if(this.vdata.bulan=='1'){
                data='Januari'
            }else if(this.vdata.bulan=='2'){
                data='Februari'
            }else if(this.vdata.bulan=='3'){
                data='Maret'
            }else if(this.vdata.bulan=='4'){
                data='April'
            }else if(this.vdata.bulan=='5'){
                data='Mei'
            }else if(this.vdata.bulan=='6'){
                data='Juni'
            }else if(this.vdata.bulan=='7'){
                data='Juli'
            }else if(this.vdata.bulan=='8'){
                data='Agustus'
            }else if(this.vdata.bulan=='9'){
                data='September'
            }else if(this.vdata.bulan=='10'){
                data='Oktober'
            }else if(this.vdata.bulan=='11'){
                data='November'
            }else if(this.vdata.bulan=='12'){
                data='Desember'
            }
            return data
        },
        simpan(){
            alert('berhasil disimpan')
        },
        save(data) {
            if(this.crud=='simpan'){
                this.vdata2.tanggal = this.vdata2.tanggal.toString(); 
                this.vdata2.bulan = this.vdata.bulan; 
                this.vdata2.createdAt = datefns.format(new Date(),"DD MMMM YYYY");      
                this.vdata2.created = datefns.format(new Date(),"DD MMMM YYYY");
                db
                    .collection('app_todo_schedule')
                    .doc()
                    .set(this.vdata2, { merge: true })
                    .then((res) => {
                    that.modal1=false
                        that.modal2=false
                    })
                    .catch((err) => {
                    // console.log(err.message)
                    })
            }else if(this.crud=='edit'){
                this.vdata2.tanggal = this.vdata2.tanggal.toString(); 
                db
                    .collection('app_todo_schedule')
                    .doc(this.vdata2.id)
                    .set(this.vdata2, { merge: true })
                    .then((res) => {
                        that.modal1=false
                            that.modal2=false
                    })
                    .catch((err) => {
                    // console.log(err.message)
                    })
            }else if(this.crud=='hapus'){
                if(confirm('are you sure to delete this item ?')){
                // console.log(this.vdata2.id)
                db
                    .collection(`app_todo_schedule`)
                    .doc(this.vdata2.id)
                    .delete()
                    .then((res) => {
                        that.modal1=false
                        that.modal2=false
                    })
                }
            }
        },
        getSchedule(){
            let that=this;
            db.collection('app_todo_schedule').onSnapshot((res) => {
                let data = res.docs.map((e) => {
                        return {
                            id: e.id,
                        ...e.data(),
                    }
                })
                that.datanya2=data;
                that.$forceUpdate();
            })
        },
        getData() {
            let that=this;
            let data = JSON.parse(JSON.stringify(this.datanya2))
            // console.log('data',data)
            // console.log('datanya2',that.datanya2)
            // console.log('bulan',that.vdata.bulan)
            data=data.map(e=>{
                return {
                    ...e,
                    tgl:e.tanggal
                }
            })
            data=data.filter(e=>{
                if(parseInt(e.tanggal.split('-')[1])==that.vdata.bulan){
                    return e
                }
            })
            that.tanggals.forEach((e,i)=>{
                that.tanggals[i].schedule=[];
                data.forEach(k=>{
                    if(e.tgl==k.tgl){
                        that.tanggals[i].schedule.push(k);
                    }
                })
            })
            this.datanya = data
            console.log('after',that.tanggals)
            this.$forceUpdate()
        },
        getTanggal(bulan,tahun){
            let that=this;
            let tanggal = new Date();
            
            let data=this.tanggals;
            this.tanggals=this.getAllTanggal(bulan,tahun);
            let harilibur=[];
            Object.values(libur.data.holiday).forEach(e=>{
                if(e.count>0){
                    harilibur.push(...e.data)
                }
            })
            // Object.values(libur.data.leave).forEach(e=>{
            //     if(e.count>0){
            //         harilibur.push(...e.data)
            //     }
            // })
            // Object.values(libur.data.longWeekend).forEach(e=>{
            //     if(e.count>0){
            //         harilibur.push(...e.data)
            //     }
            // })
            let tahunbulan=datefns.format(
                    new Date(`${this.vdata.tahun}-${this.vdata.bulan}-1`),
                    "YYYY-MM"
                );
            harilibur=harilibur.filter(e=>{
                if(e.date.slice(0,7)==tahunbulan){
                    return e
                }
            })
            this.tanggals=this.tanggals.map(e=>{
                return {
                    tanggal:e,
                    tgl:datefns.format(
                    new Date(e),
                    "YYYY-MM-DD"
                ),
                };
            })
            this.libur=harilibur;
            let leftjoin = _.map(this.tanggals, function(obj) {
                return _.assign(
                    obj,
                    _.find(that.libur, {
                    date: obj.tgl
                    })
                );
            });
            
            this.tanggals=leftjoin
            let tgl1=this.tanggals[0].tanggal.toString().split(' ')[0];
            // console.log(tgl1)
            if(tgl1=='Mon'){
                this.skip=1;
            }else if(tgl1=='Tue'){
                this.skip=2;
            }else if(tgl1=='Wed'){
                this.skip=3;
            }else if(tgl1=='Thu'){
                this.skip=4;
            }else if(tgl1=='Fri'){
                this.skip=5;
            }else if(tgl1=='Sat'){
                this.skip=6;
            }else if(tgl1=='Sun'){
                this.skip=0
            }
            data=this.tanggals;
            this.tgl= tanggal.toString().split(' ')[2];
            this.tanggals2=this.getAllTanggal(this.vdata.bulan,this.vdata.tahun);    
            // this.getData(); 
            this.$forceUpdate();
            return data
        },
        next(){
            if(this.vdata.bulan!=12){
                this.vdata.bulan=this.vdata.bulan+1;
                this.getTanggal(this.vdata.bulan,this.vdata.tahun);
                this.getData();
                this.$forceUpdate();
            }else{
                this.vdata.bulan=1;
                this.vdata.tahun=parseInt(this.vdata.tahun)+1;
                this.getTanggal(this.vdata.bulan,this.vdata.tahun);
                this.getData();
                this.$forceUpdate();
            }
        },
        prev(){
            if(this.vdata.bulan!=1){
                this.vdata.bulan=this.vdata.bulan-1;
                this.getTanggal(this.vdata.bulan,this.vdata.tahun);
                this.getData();
                this.$forceUpdate();
            }else{
                this.vdata.bulan=12;
                this.vdata.tahun=parseInt(this.vdata.tahun)-1;
                this.getTanggal(this.vdata.bulan,this.vdata.tahun);
                this.getData();
                this.$forceUpdate();
            }
        },
        getLibur(){
        //    console.log();
        },
         getAllTanggal(month, year) { 
            return (new Array(31)).fill('').map((v,i)=>new Date(year,month-1,i+1)).filter(v=>v.getMonth()===month-1)
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
    },
}
</script>
<style>
.parent {
    display: grid;
    /* repeat(jumlah column, 1fr) */
    grid-template-columns: repeat(7, 1fr);
    /* repeat(jumlah row) */
    /* grid-template-rows: repeat(7, 1fr);  */
    grid-column-gap: 1px;
    grid-row-gap: 1px;
}
</style>