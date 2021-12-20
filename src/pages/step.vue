<template>
    <div>
        <div style="position:fixed;top:0px;left:0px;width:300px;height:100vh;z-index:10000;overflow:scroll;"
         class="bg-white shadow rounded-r" v-if="menuKiri">
        <br>
        <button type="button" class="btn btn-sm btn-danger float-right mr-4 " @click="menuKiri=!menuKiri">X</button>
        <p class="p-3 text-lg font-bold">Pilihan Framework Development</p>
        <br>
          <div class="col-12">
                <div class="sm-form ">
                    <input type="text" style="width:200px;" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
                </div>
            </div>
            <div class="col-md-12 mt-2 mb-2 text-sm" v-for="(item, index) in td" :key="index+'listlightjourney'">
                <div class="p-2 shadow rounded-lg cursor-pointer hover:bg-blue-200" 
                :class="framework==item.framework?'bg-green-400':'bg-white'"
                @click="ambil(item);menuKiri=false">
                    <span class="typcn typcn-th-small"></span> {{item.urutan}} {{item.framework}}
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
                  <p class="">Step Development yang dipilih : <span class="font-bold text-xl"><span class="typcn typcn-world"  @click="munculEdit=!munculEdit"></span> {{framework}}</span></p>
                    <hr>
                  </div>
              </div>
                <div class="row justify-content-center">
                    <div class="col-11">
                        <div class="shadow rounded-lg p-3">
                            <button v-if="munculEdit" type="button" class="btn btn-sm btn-success  " @click="goEdit()"><span class="typcn typcn-edit"></span> Edit</button>
                            <div v-html="vdata.content"></div>
                        </div>
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
        gantiType(data){
            this.typeCode=data
            this.refreshData();
            this.$forceUpdate();
        },
        ambil(data){
            this.framework=data.framework
            this.refreshData();
            this.$forceUpdate();
        },
        refreshData(data){
                // db.collection("listlightjourney")
                //    .where("framework",'==',this.framework)
                //    .get()
                //    .then(res => {
                //    let data = res.docs.map(e => {
                //        return {
                //        id: e.id,
                //        ...e.data()
                //        };
                //    });
                   db.collection('lightjourney')
                   .where("framework",'==',this.framework)
                //    .doc(data[0].idnya)
                   .get().then(res=>{
                        // let data = {
                        //     id:res.id,
                        //     ...res.data()
                        // }
                        let data = res.docs.map(e => {
                            return {
                             id: e.id,
                                ...e.data()
                            };
                       })
                       console.log(data)
                        this.vdata.id=data[0].id
                        this.vdata.content=data[0].content
                        this.vdata.perbandingan=data[0].perbandingan
                        this.vdata.bahasa=data[0].bahasa
                        this.vdata.kategori=data[0].kategori
                        this.$forceUpdate()
                    })
                   this.listlightjourney = data;
                   this.$forceUpdate();
                   setTimeout(() => {
            document.querySelectorAll('div').forEach(e=>{if(e.style.whiteSpace=='pre'){
                e.style.overflow='scroll'
                e.style.height= "100px";
                var btn = document.createElement('button');
                btn.setAttribute('class','btn btn-sm btn-dark ml-1 mb-1');
                btn.innerText="Copy"
                var btn2 = document.createElement('button');
                btn2.setAttribute('class','btn btn-sm btn-dark ml-1 mb-1');
                btn2.innerText="Show All"
                btn.addEventListener('click',function(){
                    var selection = window.getSelection();
                    var range = document.createRange();
                    let elm = e;
                    range.selectNodeContents(elm);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    document.execCommand("Copy");
                    // alert('berhasil mengcopy code')
                })
                btn2.addEventListener('click',()=>{
                if(e.style.height=='100px'){
                    e.style.height= "";
                }else{
                    e.style.height= "100px";
                }
                });
                e.parentNode.insertBefore(btn, e);
                e.parentNode.insertBefore(btn2, e);
            }})
        }, 3000);
            //    });
        },
        getListKategori(){
            db.collection(`frameworklightjourney`).get().then(res=>{
                let data = res.docs.map(doc=>{ return {id:doc.id,...doc.data()}})
                  data.forEach(e=>{
                    e.urutan=parseFloat(e.urutan);
                })
                data=_.orderBy(data, ['urutan'],['asc']); 
                this.listframework=data;
                this.$forceUpdate();
          })
        },
        getlightojurney() {
           
        },
    },
    computed:{
        td(){
            let that=this;
            let data=this.listframework;
            data=data.filter(e=>{
                if(e.framework.toLowerCase().indexOf(that.search)!=-1){
                    return e
                }
            })
            return data;
        }
    },
    data(){
        return{
            menuKiri:false,
            munculEdit:false,
            typeCode:'Javascript',
            framework:'---',
            listframework:[],
            bahasa:[
                'Javascript',
                'PHP',
                'Dart',
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