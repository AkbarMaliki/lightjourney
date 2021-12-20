<template>
  <div>
    <div class="row">
      <div class="offset-1 col-10">
        <hr class="style13" />
        <button type="button" @click="$router.push('/blog/kategori')" class="btn btn-sm btn-dark">
          <span class="typcn typcn-th-small"></span> Add Kategori
        </button>
            <button type="button" @click="$router.push('/blog/framework')" class="btn btn-sm btn-dark ml-4">
          <span class="typcn typcn-th-small"></span> Add Frameworks
        </button>
        <div class="p-2">
          <form action @submit.prevent="simpan">
            <div class="card">
              <div class="card-header">CATATAN LIGHTJOURNEYS</div>
              <div class="card-body">
               
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
                <div class="sm-form " v-if="vdata.perbandingan=='true'">
                    <label for="kategori">Your kategori</label>
                      <select class='form-control' v-model="vdata.kategori" @change="ubahlain">
                        <option v-for="(item, index) in kategoris" :key="index+'kategoris'" :value="item.kategori">{{item.urutan}} {{item.kategori}}</option>
                    </select>
                </div>
                <div class="sm-form ">
                    <label for="step">Masuk ke step development?</label>
                    <select class='form-control' v-model="vdata.step">
                      <option>true</option>
                      <option>false</option>
                    </select>
                </div>
                <div class="sm-form " v-if="vdata.step=='true'">
                    <label for="frameworks">Frameworks</label>
                     <select class='form-control' v-model="vdata.framework">
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
import firebase from "firebase";
import _ from 'lodash'
let db = firebase.firestore();
export default {
  data() {
    return {
      youget: "",
      vdata: {},
      kategoris:[],
      frameworks:[],
    };
  },
  layout:'lightjourney',
  mounted() {
    this.getDataKategori();
  },
  methods: {
    ubahlain(){
      this.vdata.title='xx_javascript_'+this.vdata.kategori;
      this.vdata.keyword=this.vdata.kategori.split(' ').join(',');
      this.$forceUpdate();
    },
      getDataKategori(){
        let that=this;
        db.collection(`kategorilightjourney`).get().then(res=>{
            let data = res.docs.map(doc=>doc.data())
            data.forEach(e=>{
              e.urutan=parseFloat(e.urutan);
            })
            data=_.orderBy(data, ['urutan'],['asc']); 
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
      db.collection("lightjourney")
        .add(this.vdata)
        .then(res => {
          console.log("Document successfully written!");
          db.collection("listlightjourney")
            .doc()
            .set(
              {
                title: this.vdata.title,
                keyword: this.vdata.keyword,
                bahasa:this.vdata.bahasa?this.vdata.bahasa:'',
                perbandingan:this.vdata.perbandingan?this.vdata.perbandingan:'',
                kategori:this.vdata.kategori?this.vdata.kategori:'',
                step:this.vdata.step?this.vdata.step:'',
                framework:this.vdata.framework?this.vdata.framework:'',
                idnya: res.id
              },
              {}
            )
            .then(res => {
              alert("simpan berhasil");
              this.$router.push("/");
            });
        });
      // db.collection('lightjourney').doc().set(this.vdata,{merge:true}).then(res=>{
      //     console.log('setelah disimpan',res)
      // })
    }
  }
};
</script>
