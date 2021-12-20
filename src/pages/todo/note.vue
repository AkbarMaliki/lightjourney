<template>
  <div>
    <div class="row justify-content-center p-3">
      <button type="button" style="position:fixed;bottom:20px;right:10px;z-index:100;" @click="showtodo=!showtodo" class="btn btn-sm btn-dark rounded-circle shadow-lg">
        <img src="https://upload.egov.balangankab.go.id/svg/plus.svg" 
             class="d-inline" style="height:30px;width:20px;filter: brightness(0) invert(1);" alt=""> 
      </button>
    <!-- <div class='col-sm-1' v-if="!showtodo">
           <button type="button" class="btn  btn-dark float-left" @click="showtodo=!showtodo">
                <img src="https://upload.egov.balangankab.go.id/svg/arrow-maximise.svg" 
                   class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
            </button>
    </div> -->
    <div style="position:fixed;z-index:100;left:0;height:30vh;width:100vw;" :style="`${showtodo?'top:0px;':'top:-30vh;'}`" @click="showtodo=!showtodo">
    </div>
    <div style="height:70vh;width:100vw;position:fixed;z-index:100;left:0;" :style="`${showtodo?'bottom:0px;':'bottom:-70vh;'}`" class="rounded-t-lg bg-white shadow-lg anim">
      <div class="row justify-content-center">
        <div class="col-md-6">
          
      <div class="p-3 shadow-lg rounded-lg">
            <button type="button" class="btn  btn-dark float-left" @click="showtodo=!showtodo">
                <img src="https://upload.egov.balangankab.go.id/svg/arrow-minimise.svg" 
                   class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
            </button>
               <button type="button" class="btn  btn-dark float-right" @click="refresh">
              <img src="https://upload.egov.balangankab.go.id/svg/arrow-sync.svg" 
                   class="d-inline" style="height:20px;width:20px;filter: brightness(0) invert(1);" alt="">
            </button>
          <p class="text-lg text-center font-bold p-3">INPUT NOTE</p>
          <hr>
          <form action="#" @submit.prevent="save">
            <div class="sm-form">
              <label for="title">Title : </label>
              <input
                type="text"
                id="title"
                name="title"
                class="form-control form-control-sm"
                placeholder="title" 
                required
                style="width:50%;"
                v-model="vdata.title"
              />
            </div>
            <div class="sm-form">
              <label for="tanggal">Tanggal : </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                class="form-control form-control-sm"
                placeholder="tanggal" 
                required
                style="width:200px;"
                v-model="vdata.tanggal"
              />
            </div>
            <p>Text :</p>
            <div class="sm-form">
              <textarea
                type="text"
                id="isi"
                name="isi"
                rows="2"
                placeholder="isi..."
                class="form-control md-textarea"
                v-model="vdata.isi"
              ></textarea>
            </div>
          <br />
          <div class="float-right">
              <div v-if="vdata.id">
                <button
                type="button"
                @click="edit"
                class="btn btn-outline-dark"
                >
                <img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                    class="d-inline" style="height:20px;width:20px;" alt="">
                    Edit
                </button>
                <button
                type="button"
                @click="hapus"
                class="btn btn-outline-dark"
                >
                <img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                    class="d-inline" style="height:20px;width:20px;" alt="">
                hapus
                </button>
              </div>
              <div v-else>
                <button type="submit" class="btn  btn-outline-dark"><img src="https://upload.egov.balangankab.go.id/svg/pen.svg" 
                 class="d-inline" style="height:20px;width:20px;" alt=""> Save</button>
              </div>
          </div>
          </form>

          <br />
          <hr class="style13" />
          <br />
        </div>
    </div>
    </div>
      </div>
      <!-- <div class="col-md-6" v-if="showtodo">
        
      </div> -->
      <div class="col-md-12">
        <div class="rounded-lg p-3">
          <div class="row">
            <div v-for="(item, index) in td" :key="index" class="col-sm-3">
                <div v-if="item" class="p-2 rounded-lg shadow-lg hover:bg-gray-400 cursor-pointer" @click="ambil(item)">
                    <img src="https://upload.egov.balangankab.go.id/svg/pin.svg" 
                         class="d-inline float-right" style="height:15px;width:15px;" alt="">
                
                <p class="font-bold text-xs uppercase">{{ item.title }}</p>
                <p class="text-xs pb-2">{{ item.isi }}</p>
                <span class="float-right text-xs">{{ format(item.tanggal) }} </span>
                <br />
                </div>
                <div v-else>
                <p class="p-5">DATA KOSONG</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import firebase from 'firebase'
let db = firebase.firestore()
import datefns from 'date-fns'
export default {
  data() {
    return {
      vdata: {},
      datanya: [],
      status: 'TASK',
      showtodo:false,
    }
  },
  computed: {
    td() {
      let that = this
      let data = this.datanya
      //   console.log(data[0].createdAt.toDate());
      //   data = _.orderBy(data, ['createdAt'],['asc']);
      data = data.filter((e) => {
        if (e.status == that.status) {
          return e
        }
      })
      data = _.sortBy(data, (o) => o.createdAt)
      return data
    },
  },
  methods: {
    ganti(data){
        setTimeout(() => {
            this.vdata.status =data
            db
            .collection('app_todo_note')
            .doc(this.vdata.id)
            .set(this.vdata, { merge: true })
            .then((res) => {
            console.log('update berhasil')
            })
            .catch((err) => {
            console.log(err.message)
            })
        }, 1000);
    },
    tohapus(){
        
    },
    test(){
        console.log();
    },
    refresh() {
      this.vdata = {}
      this.status = 'TASK'
      this.$forceUpdate()
    },
    ambil(data) {
      this.vdata = JSON.parse(JSON.stringify(data))
      this.showtodo=!this.showtodo;
      console.log(data)
      this.$forceUpdate()
    },
    format(data){
      return datefns.format(data,"DD MMMM YYYY");      
    },
    save() {
      this.vdata.status = this.status
      this.vdata.createdAt = datefns.format(new Date(),"DD MMMM YYYY");      
      this.vdata.created = datefns.format(new Date(),"DD MMMM YYYY");
      db
        .collection('app_todo_note')
        .doc()
        .set(this.vdata, { merge: true })
        .then((res) => {
          console.log('input berhasil')
          this.showtodo=false;
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    edit() {
      this.vdata.status = this.status
      db
        .collection('app_todo_note')
        .doc(this.vdata.id)
        .set(this.vdata, { merge: true })
        .then((res) => {
          console.log('update berhasil')
          this.showtodo=false;
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    hapus() {
        if(confirm('are you sure to delete this item ?')){
            console.log(this.vdata.id)
            db
                .collection(`app_todo_note`)
                .doc(this.vdata.id)
                .delete()
                .then((res) => {
                    console.log('berhasil hapus!')
                  this.showtodo=false;
                })
            }
    },
    getData() {
      db.collection('app_todo_note').onSnapshot((res) => {
        let data = res.docs.map((e) => {
            console.log(e.id)
          return {
            id: e.id,
            ...e.data(),
          }
        })
        console.log(data)
        this.datanya = data
        this.$forceUpdate()
      })
    },
  },
  mounted() {
    this.getData()
  },
  layout:"app_todo"
}
</script>