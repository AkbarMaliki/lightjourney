<template>
  <div>
    <div class="row">
      <div class="offset-1 col-10">
        <hr class="style13" />
        <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-dark">
          <span class="typcn typcn-arrow-left"></span> Back
        </button>
        <div class="p-2">
          <form action @submit.prevent="simpan"
          style="position:fixed;bottom:10px;right:10px;width:300px;min-height:300px;"
          >
            <div class="card">
              <div class="card-header">CATATAN LIGHTJOURNEYS</div>
              <div class="card-body">
                  <div class="sm-form ">
                      <input disabled type="text" id="id" name="id" class="form-control form-control-sm" placeholder="id" v-model="vdata.id" >
                  </div>
                 <div class="sm-form " >
                      <label for="urutan">Your urutan</label>
                      <input type="text" id="urutan" name="urutan"
                       class="form-control form-control-sm" placeholder="urutan" v-model="vdata.urutan" >
                  </div>
                <div class="sm-form">
                  <label for="framework">Your framework</label>
                  <input
                    type="text"
                    id="framework"
                    name="framework"
                    class="form-control form-control-sm"
                    placeholder="framework"
                    v-model="vdata.framework"
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-sm btn-dark">
              <span class="typcn typcn-media-stop-outline"></span> simpan
            </button>
            <button type="button" @click="hapus" v-if="vdata.id" class="btn btn-sm btn-danger ml-2 ">hapus</button>
            <button type="button" @click="vdata={};$forceUpdate()" v-if="vdata.id" class="btn btn-sm btn-success ml-4  ">refresh</button>
          </form>
          <div v-for="(item, index) in datanya" :key="index+'kategori'" @click="ambil(item)"  class="shadow p-3 mt-2 rounded hover:bg-blue-400 cursor-pointer">
            {{item.urutan}}  {{item.framework}}
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
export default {
  data() {
    return {
      youget: "",
      vdata: {},
      datanya:[]
    };
  },
  layout:'lightjourney',
  mounted() {
    this.getData();
  },
  methods: {
     
      ambil(item){
          this.vdata.id=item.id;
          this.vdata.urutan=item.urutan
          this.vdata.framework=item.framework
          this.$forceUpdate();
      },
      getData(){
          let that=this;
          db.collection(`frameworklightjourney`).get().then(res=>{
              let data = res.docs.map(doc=>{ return {id:doc.id,...doc.data()}})
               data.forEach(e=>{
                e.urutan=parseFloat(e.urutan)
              })
              data=_.orderBy(data, ['urutan'],['asc']); 
              that.datanya=data;
              this.$forceUpdate();
          })
      },
    simpan() {
        if(this.vdata.id){
             db.collection('frameworklightjourney').doc(this.vdata.id).set(this.vdata,{merge:true}).then(res=>{
                alert('berhasil edit')
                this.getData();
            })
        }else{
            db.collection('frameworklightjourney').doc().set(this.vdata,{merge:true}).then(res=>{
                alert('Berhasil disimpan')
                this.getData();
            })
        }
    },
     hapus(){
          if(confirm('yakin delete?')){
              db.collection(`frameworklightjourney`).doc(this.vdata.id).delete().then(res=>{
                        this.getData();
                })
            }
      },
  }
};
</script>
