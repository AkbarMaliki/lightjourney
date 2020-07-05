<template>
  <div>
    <div class="row">
      <div class="offset-1 col-10">
        <button type="button" @click="$router.push('/blog/new')" class="btn btn-sm btn-dark  "><span class="typcn typcn-news"></span> New </button>
        <div class="sm-form">
          <label for="search">
            <span class="typcn typcn-zoom"></span> search
          </label>
          <input
            type="text"
            id="search"
            name="search"
            class="form-control form-control-sm"
            placeholder="search"
            v-model="vdata.search"
          />
        </div>
        <div
          v-for="(item, index) in td"
          @click="$router.push(`/blog?id=${item.idnya}`)"
          :key="index"
          class="shadow-lg rounded-lg p-2 hover:bg-blue-500 cursor-pointer anim"
        >
          <p class="p-2 font-bold text-uppercase">{{item.title}}</p>
          <p class="p-1">{{item.keyword}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {
      datanya: [],
      vdata: {
        search: ""
      }
    };
  },
  computed: {
    td() {
      let data = this.datanya;
      data = data.filter((v, i, a) => {
          if(v['title'].indexOf(this.vdata.search)!=-1 || v['keyword'].indexOf(this.vdata.search)!=-1){
              return v
          }
      });
      return data;
    }
  },
  methods: {
    getlightojurney() {
      db.collection("listlightjourney")
        .get()
        .then(res => {
          console.log(res)
          let data = res.docs.map(e => {
            return {
              id: e.id,
              ...e.data()
            };
          });
          console.log(data)
          this.datanya = data;
        });
    }
  },
  mounted() {
    this.getlightojurney();
  }
};
</script>