<template>
  <div>
    <div class="row">
      <div class="offset-1 col-10">
           <hr class="style13"> 
      <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-dark  "><span class="typcn typcn-arrow-left"></span> Back</button>
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
      datanya:[]
    };
  },
  methods: {
    simpan() {
        db.collection('listlightjourney').where('idnya', '==', this.$route.query.id).get().then(res=>{
              let data = res.docs.map(e=>{
                  return{
                      id:e.id,
                      ...e.data()
                  }
              })
              data = data[0]
            db.collection('listlightjourney').doc(data.id).set({title:this.vdata.title,keyword:this.vdata.keyword},{merge:true}).then(res=>{
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
      db.collection('lightjourney').doc(this.$route.query.id).get().then(res=>{
          let data = {
              id:res.id,
              ...res.data()
          }
          this.datanya = data
          this.vdata.title=data.title
          this.vdata.keyword=data.keyword
          this.vdata.content=data.content
          this.$forceUpdate()
      })
  },
};
</script>
