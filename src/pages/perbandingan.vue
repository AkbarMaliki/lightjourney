<template>
    <div>
        <div style="position:fixed;top:0px;left:0px;width:300px;height:100vh;z-index:10000;overflow:scroll;"
         class="bg-white shadow rounded-r" v-if="menuKiri">
        <br>
        <button type="button" class="btn btn-sm btn-danger float-right mr-4 " @click="menuKiri=!menuKiri">X</button>
        <p class="p-3 text-lg font-bold">Pilihan Kategori</p>
        <br>
            <div class="col-12">
                <div class="sm-form ">
                    <input type="text" style="width:200px;" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
                </div>
            </div>
            <div class="col-md-12 mt-2 mb-2" v-for="(item, index) in td" :key="index+'listlightjourney'">
                <div class="p-2 shadow rounded-lg text-sm cursor-pointer hover:bg-blue-200" 
                :class="kategori==item.kategori?'bg-green-400':'bg-white'"
                @click="ambil(item);menuKiri=false">
                    <span class="typcn typcn-th-small"></span> {{item.urutan}} {{item.kategori}}
                </div>
            </div>
        </div>
        <div @click="menuKiri=false" style="position:fixed;top:0px;left:300px;width:100vw;height:100vh;z-index:10000;overflow:scroll;" v-if="menuKiri">
        </div>
        <button
        style="position:fixed;z-index:1000;top:70px;left:20px;"
         type="button" @click="menuKiri=true" class="btn btn-sm btn-dark rounded-circle"
        ><span class="typcn typcn-th-small"></span></button>
        <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="row justify-content-center">
                  <div class="col-10">
                  <p class="">Kategori yang dipilih : <span class="font-bold text-xl"><span class="typcn typcn-world" @click="munculEdit=!munculEdit"></span> {{kategori}}</span></p>
                    <!-- ===================== -->
                  <button type="button" @click="munculKategori=!munculKategori" class="btn btn-sm btn-dark  float-right"><span class="typcn typcn-arrow-down"></span></button>
                    <div class="row" v-if="munculKategori">
                        <div class="col-12">
                            <div class="sm-form ">
                                <input type="text" style="width:200px;" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
                            </div>
                        </div>
                        <div class="col-md-4 mt-2 mb-2">
                            <div v-for="(item, index) in columns[0]" :key="index+'col1'">
                                 <div class="p-2 shadow mt-1 rounded-lg text-xs cursor-pointer hover:bg-blue-200" 
                                    :class="kategori==item.kategori?'bg-green-400':'bg-white'"
                                    @click="ambil(item);menuKiri=false">
                                        <span class="typcn typcn-th-small"></span> {{item.urutan}} {{item.kategori}}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-2 mb-2">
                            <div v-for="(item, index) in columns[1]" :key="index+'col2'">
                                 <div class="p-2 shadow mt-1 rounded-lg text-xs cursor-pointer hover:bg-blue-200" 
                                    :class="kategori==item.kategori?'bg-green-400':'bg-white'"
                                    @click="ambil(item);menuKiri=false">
                                        <span class="typcn typcn-th-small"></span> {{item.urutan}} {{item.kategori}}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mt-2 mb-2">
                            <div v-for="(item, index) in columns[2]" :key="index+'col3'">
                                 <div class="p-2 shadow mt-1 rounded-lg text-xs cursor-pointer hover:bg-blue-200" 
                                    :class="kategori==item.kategori?'bg-green-400':'bg-white'"
                                    @click="ambil(item);menuKiri=false">
                                        <span class="typcn typcn-th-small"></span> {{item.urutan}} {{item.kategori}}
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-md-4 mt-2 mb-2" v-for="(item, index) in td" :key="index+'listlightjourney'">
                            <div class="p-2 shadow rounded-lg text-xs cursor-pointer hover:bg-blue-200" 
                            :class="kategori==item.kategori?'bg-green-400':'bg-white'"
                            @click="ambil(item);menuKiri=false">
                                <span class="typcn typcn-th-small"></span> {{item.urutan}} {{item.kategori}}
                            </div>
                        </div> -->
                    </div>
                    <!-- ===================== -->
                    <hr>
                        <button type="button" 
                        v-for="(item, index) in bahasa" :key="index+'bahasa'"
                        :style="typeCode==item?'background:lightblue;':''" @click="gantiType(item)"
                        class="btn btn-sm btn-style2 ml-3">{{item}}</button>
                    <hr>
                  </div>
              </div>
                <div class="shadow rounded-lg p-3">
                    <div v-if="typeCode=='--- ALL ---'">
                        <div class="table-responsive">
                            <table border="1" class="table table-sm table-striped" style='table-layout:fixed;'>
                                <tr>
                                    <th 
                                    style="border:1px solid black;" 
                                    v-for="(item, index) in td2" :key="index+'datanya'" class="font-bold bg-blue-400">
                                        {{item.bahasa}}
                                    </th>
                                </tr>
                                <tr>
                                    <td 
                                    style="border:1px solid black;" 
                                    v-for="(item, index) in td2" :key="index+'datanya2'" class="p-2">
                                        <div class="">
                                            <div v-html="item.content" style="overflow:scroll;">

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div v-else>
                        <button v-if="munculEdit" type="button" class="btn btn-sm btn-success  " @click="goEdit()"><span class="typcn typcn-edit"></span> Edit</button>
                        <button v-if="munculEdit" type="button" class="btn btn-sm btn-success  " @click="goHapus()"><span class="typcn typcn-danger ml-3"></span> Hapus</button>
                        <div v-html="vdata.content"></div>
                    </div>
                </div>
          </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
import firebase from "firebase";
let db = firebase.firestore();
export default{
    mounted() {
        this.getListKategori();
        this.refreshData();
    },
    methods: {
        goEdit(){
            console.log(this.vdata)
            if(prompt('secret code?')=="lightjourney"){
                    this.$router.push(`blog/edit?id=${this.vdata.id}`)
            }
        },
        goHapus(){
             if(prompt('secret code?')=="lightjourney"){
                 db.collection(`lightjourney`).doc(this.vdata.id).delete().then(res=>{})
            }
        },
        gantiType(data){
            this.typeCode=data
            this.refreshData();
            this.$forceUpdate();
        },
        ambil(data){
            this.kategori=data.kategori
            window.scrollTo({
                top: 800,
                left: 100,
                behavior: 'smooth'
            });
            this.refreshData();
            this.$forceUpdate();
        },
        refreshData(data){
            if(this.typeCode=='--- ALL ---'){
                db.collection(`lightjourney`)
                .where("kategori",'==',this.kategori)
                .get().then(res=>{
                    let data = res.docs.map(doc=>doc.data())
                     this.datanya = data
                    this.$forceUpdate()
                })
            }else{
                   db.collection('lightjourney')
                   .where("kategori",'==',this.kategori)
                   .where("bahasa",'==',this.typeCode)
                   .get().then(res=>{
                         let data = res.docs.map(e => {
                            return {
                            id: e.id,
                            ...e.data()
                            };
                        });
                        this.vdata.id=data[0].id
                        this.vdata.content=data[0].content
                        this.vdata.perbandingan=data[0].perbandingan
                        this.vdata.bahasa=data[0].bahasa
                        this.vdata.kategori=data[0].kategori
                        this.$forceUpdate()
                    })
                   this.listlightjourney = data;
                   this.$forceUpdate();
            }
        },
        getListKategori(){
            db.collection(`kategorilightjourney`).get().then(res=>{
                let data = res.docs.map(doc=>{ return {id:doc.id,...doc.data()}})
                data.forEach(e=>{
                    e.urutan=parseFloat(e.urutan);
                })
                data=_.orderBy(data, ['urutan'],['asc']); 
                this.listkategori=data;
                this.$forceUpdate();
          })
        },
        getlightojurney() {
           
        },
    },
    computed:{
        columns () {
            let columns = []
            let mid = Math.ceil(this.listkategori.length / 3)
            for (let col = 0; col < 3; col++) {
                columns.push(this.listkategori.slice(col * mid, col * mid + mid))
            }
            return columns
        },
        td(){
            let that=this;
            let data=this.listkategori;
            data=data.filter(e=>{
                if(e.kategori.toLowerCase().indexOf(that.search)!=-1){
                    return e
                }
            })
            return data;
        },
        td2(){
            let data =this.datanya 
            let baru = [];
            data.forEach(e=>{
                if(e.bahasa=='Javascript'){
                    baru.push(e)
                }
            })
            data.forEach(e=>{
                if(e.bahasa=='PHP'){
                    baru.push(e)
                }
            })
            data.forEach(e=>{
                if(e.bahasa=='Dart'){
                    baru.push(e)
                }
            })
            return baru
        }
    },
    data(){
        return{
            menuKiri:false,
            munculEdit:false,
            munculKategori:true,
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'],
            cols: 2,
            typeCode:'Javascript',
            kategori:'Console.log/letak penulisan code',
            listkategori:[],
            bahasa:[
                'Javascript',
                'PHP',
                'Dart',
                '--- ALL ---'
            ],
            vdata:{},
            datanya:[],
            search:'',
            listlightjourney:[]
        }
    },
    layout:'lightjourney'
}
</script>