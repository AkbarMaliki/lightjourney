<template>
  <div>
    <div class="row">
        <div class="col-2 pl-3">
            <br>
            <br>
            <br>
            <div style="position:fixed;">
            <a
                      v-for="(item, index) in content"
                      :style="[{fontWeight:item.type=='H2'?'bold':'normal'},{paddingLeft:item.type=='H3'?'40px':''}]"
                      :key="index+'content'"
                      style="overflow:hidden;font-size:14px;font-weight:bold;text-transform:uppercase;"
                      class="no-style scrollactive-item list-group-item d-flex justify-content-between align-items-center hover:bg-grey cursor-pointer "
                      :href="`#${item.content.replace(/[^a-zA-Z0-9]/g, '').split(' ').join('')}`"
                    >{{item.content}}</a>
            </div>
        </div>
      <div class="col-10 pr-3">
        <hr class="style13" />
        <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-dark">
          <span class="typcn typcn-arrow-left"></span> Back
        </button>
        <button
          type="button"
          @click="$router.push(`/blog/edit?id=${$route.query.id}`)"
          class="btn btn-sm btn-primary"
        >
          <span class="typcn typcn-edit"></span> Edit
        </button>
        <button type="button" @click="delets($route.query.id)" class="btn btn-sm btn-danger">
          <span class="typcn typcn-delete"></span> delete
        </button>
        <div v-if="ready">
          <div v-html="datanya.content"></div>
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
      datanya: {},
      ready: false,
      content:[]
    };
  },
  methods: {
    delets(id) {
      if (confirm("Apakah yakin mendelete file?")) {
         db.collection('listlightjourney').where('idnya', '==', this.$route.query.id).get().then(res=>{
              let data = res.docs.map(e=>{
                  return{
                      id:e.id,
                      ...e.data()
                  }
              })
              data = data[0]
            db.collection('listlightjourney').doc(data.id).delete().then(res=>{
                console.log('berhasil delete')
            })
          })
        db.collection("lightjourney")
          .doc(id)
          .delete()
          .then(res => {
            alert("berhasil delete");
            setTimeout(() => {
              this.$router.push("/");
            }, 3000);
          });
      }
    },
    modified() {
      let that = this;
      let idnya = "";
      this.$el.querySelectorAll("h2, h3").forEach(el => {
        idnya = el.textContent.replace(/[^a-zA-Z0-9]/g, "");
        let headernya = { content: el.textContent, type: el.nodeName };
        that.content.push(headernya)
        if (el.nodeName == "H3") {
          el.classList.add("header3");
        }
        el.id = idnya.split(" ").join("");
      });
      this.$el.querySelectorAll("table").forEach(e => {
        e.classList.add("table");
        e.parentNode.classList.add("table-responsive");
      });
      this.$el.querySelectorAll(".copyThis").forEach(el => {
        // console.dir(el)
        el.style.padding = "20px";
        var btn = document.createElement("button");
        btn.innerHTML = "copy";
        btn.style.position = "absolute";
        btn.style.right = "50px";
        btn.className += "btns btns-sm bg-white text-black font-times";
        btn.onclick = function() {
          var selection = window.getSelection();
          var range = document.createRange();
          let elm = el;
          range.selectNodeContents(elm);
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand("Copy");
          that.$toast.show("Copied to clipboard");
        };
        el.parentNode.insertBefore(btn, el);
        // console.log(el.parentNode)
        // el.parentNode
        delete this.content[0]
      });
    }
  },
  mounted() {
    db.collection("lightjourney")
      .doc(this.$route.query.id)
      .get()
      .then(res => {
        let data = {
          id: res.id,
          ...res.data()
        };
        this.datanya = data;
        this.ready = true;
        setTimeout(() => {
          this.modified();
        }, 1000);
      });
  }
};
</script>
<style>

</style>