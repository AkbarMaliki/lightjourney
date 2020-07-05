<template>
  <div>
    <div class="row">
      <div class="offset-1 col-10">
        <hr class="style13" />
        <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-dark">
          <span class="typcn typcn-arrow-left"></span> Back
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
let db = firebase.firestore();
export default {
  data() {
    return {
      youget: "",
      vdata: {}
    };
  },
  methods: {
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
