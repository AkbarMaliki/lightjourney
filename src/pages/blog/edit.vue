<template>
  <div>
    <div class="row">
      <div class="offset-1 col-10">
           <hr class="style13"> 
        <button type="button" @click="$router.push('/blog/kategori')" class="btn btn-sm btn-dark">
          <span class="typcn typcn-arrow-left"></span> Add Kategori
        </button>
        <div class="p-2">
          <form action @submit.prevent="simpan">
            <div class="card">
              <div class="card-header">CATATAN LIGHTJOURNEYS</div>
              <div class="card-body">
                 <div class="sm-form ">
                    <input type="text" disabled id="id" name="id" class="form-control form-control-sm" placeholder="id" v-model="vdata.id" >
                </div>
                <div class="sm-form">
                  <label for="title">Your title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    class="form-control form-control-sm"
                    placeholder="title"
                    v-model="vdata.title"
                  />
                </div>
                <div class="sm-form">
                  <label for="keyword">Your keyword</label>
                  <input
                    type="text"
                    id="keyword"
                    name="keyword"
                    class="form-control form-control-sm"
                    placeholder="keyword"
                    v-model="vdata.keyword"
                  />
                </div>
                 <div class="sm-form ">
                    <label for="bahasa">Bahasa</label>
                    <select class='form-control' v-model="vdata.bahasa">
                      <option>Javascript</option>
                      <option>PHP</option>
                      <option>Dart</option>
                    </select>
                </div>
                  <div class="sm-form ">
                    <label for="perbandingan">Masuk ke Perbandingan?</label>
                    <select class='form-control' v-model="vdata.perbandingan">
                      <option>true</option>
                      <option>false</option>
                    </select>
                </div>
                <div class="sm-form ">
                    <label for="kategori">Your kategori</label>
                      <select class='form-control' v-model="vdata.kategori">
                        <option value="">-----</option>
                        <option v-for="(item, index) in kategoris" :key="index+'kategoris'">{{item.kategori}}</option>
                    </select>
                </div>
                 <div class="sm-form ">
                    <label for="step">Masuk ke step development?</label>
                    <select class='form-control' v-model="vdata.step">
                      <option>true</option>
                      <option>false</option>
                    </select>
                </div>
                <div class="sm-form " >
                    <label for="frameworks">Frameworks</label>
                      <select class='form-control' v-model="vdata.framework">
                        <option value="">-----</option>
                        <option v-for="(item, index) in frameworks" :key="index+'kategoris'">{{item.framework}}</option>
                    </select>
                </div>
              </div>
            </div>
            <wysiwyg v-model="vdata.content" />
            <button type="submit" class="btn btn-sm btn-dark">
              <span class="typcn typcn-media-stop-outline"></span> simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
let db = firebase.firestore()
export default {
  data() {
    return {
      youget: "",
      vdata: {},
      kategoris:[],
      frameworks:[],
      datanya:[]
    };
  },
  layout:'lightjourney',
 
  methods: {
      getDataKategori(){
        let that=this;
        db.collection(`kategorilightjourney`).get().then(res=>{
            let data = res.docs.map(doc=>doc.data())
            that.kategoris=data;
            this.$forceUpdate();
        })
        db.collection(`frameworklightjourney`).get().then(res=>{
            let data = res.docs.map(doc=>doc.data())
            that.frameworks=data;
            this.$forceUpdate();
        })
    },
    simpan() {
      console.log(this.vdata)
        db.collection('listlightjourney').where('idnya', '==', this.$route.query.id).get().then(res=>{
              let data = res.docs.map(e=>{
                  return{
                      id:e.id,
                      ...e.data()
                  }
              })
              data = data[0]
            db.collection('listlightjourney').doc(data.id).set({
                title:this.vdata.title,
                keyword:this.vdata.keyword,
                bahasa:this.vdata.bahasa,
                perbandingan:this.vdata.perbandingan,
                kategori:this.vdata.kategori,
                step:this.vdata.step?this.vdata.step:'',
                framework:this.vdata.framework?this.vdata.framework:''
                },{merge:true}).then(res=>{
                console.log('berhasil update')
            })
          })
        db.collection('lightjourney').doc(this.$route.query.id).set(this.vdata,{merge:true}).then(res=>{
            alert('simpan berhasil')
            setTimeout(() => {
              this.$router.push('/')
            }, 3000);
        })
    }
  },
  mounted() {
    this.getDataKategori();
      db.collection('lightjourney').doc(this.$route.query.id).get().then(res=>{
          let data = {
              id:res.id,
              ...res.data()
          }
          this.datanya = data
          this.vdata.id=data.id
          this.vdata.title=data.title
          this.vdata.keyword=data.keyword
          this.vdata.content=data.content
          this.vdata.perbandingan=data.perbandingan
          this.vdata.bahasa=data.bahasa
          this.vdata.kategori=data.kategori
          this.vdata.step=data.step
          this.vdata.framework=data.framework
          this.$forceUpdate()
      })
  },
};
</script>
