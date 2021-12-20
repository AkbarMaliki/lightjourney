<template>
  <div class="container">
    <div class="row">
        <div class="col-4 pl-3">
            <br>
            <div style="">
            <a
                      v-for="(item, index) in content"
                      :style="[{fontWeight:item.type=='H2'?'bold':'normal'},{paddingLeft:item.type=='H3'?'40px':''}]"
                      :key="index+'content'"
                      style="overflow:hidden;font-size:14px;font-weight:bold;text-transform:uppercase;"
                      class="no-style scrollactive-item list-group-item d-flex justify-content-between align-items-center hover:bg-grey cursor-pointer "
                      :href="`#${item.content.replace(/[^a-zA-Z0-9]/g, '').split(' ').join('')}`"
                    >{{index}}. {{item.content}}</a>
            </div>
        </div>
      <div class="col-12 pr-3">
        <hr class="style13" @click="edit=!edit" />
        <div v-if="edit">
          <button type="button" @click="$router.go(-1)" class="btn btn-sm btn-dark">
            <span class="typcn typcn-arrow-left"></span> Back
          </button>
          <button
            type="button"
            @click="rahasia"
            class="btn btn-sm btn-primary"
          >
            <span class="typcn typcn-edit"></span> Edit
          </button>
          <button type="button" @click="rahasia2" class="btn btn-sm btn-danger">
            <span class="typcn typcn-delete"></span> delete
          </button>
        </div>
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
      content:[],
      edit:false
    };
  },
  layout:'lightjourney',
  methods: {
    rahasia(){
      if(prompt('secret code?')=="lightjourney"){
        this.$router.push(`/blog/edit?id=${this.$route.query.id}`)

      }else{
        alert('secret code salah!')
      }
    },
    rahasia2(){
       if(prompt('secret code?')=="lightjourney"){
        this.delets(this.$route.query.id)
      }else{
        alert('secret code salah!')
      }
    },
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