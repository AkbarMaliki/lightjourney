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
          <p class="text-lg text-center font-bold p-3">INPUT TODO</p>
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
      <div class="col-md-6">
        <div class="rounded-lg p-3">
          <div class="row">
            <div
              @click="status = 'TASK';showtodo=false"
              class="
                col-4
                text-center
                p-3
                rounded-lg
                shadow-lg
                font-bold
                cursor-pointer
                
                hover:text-white
              "
              :class="`${status=='TASK'?'bg-blue-400':''}`"
              style="font-size:14px;"
            >
            <img src="https://upload.egov.balangankab.go.id/svg/tick.svg" 
                 class="d-inline" style="height:20px;width:20px;" alt="" >
              Task
            </div>
            <div
              @click="status = 'ONPROGRESS';showtodo=false"
              class="
                col-4
                text-center
                p-3
                rounded-lg
                shadow-lg
                font-bold
                cursor-pointer
                
                hover:text-white
              "
              style="font-size:14px;"
              :class="`${status=='ONPROGRESS'?'bg-blue-400':''}`"
            ><img src="https://upload.egov.balangankab.go.id/svg/tick.svg" 
                 class="d-inline" style="height:20px;width:20px;" alt="">
              OnProgress
            </div>
            <div
              @click="status = 'DONE';showtodo=false"
              class="
                col-4
                text-center
                p-3
                rounded-lg
                shadow-lg
                font-bold
                cursor-pointer
                
                hover:text-white
              "
              style="font-size:14px;"
              :class="`${status=='DONE'?'bg-blue-400':''}`"
            ><img src="https://upload.egov.balangankab.go.id/svg/tick.svg" 
                 class="d-inline" style="height:20px;width:20px;" alt="">
              Done
            </div>
          </div>
          <div class="text-center p-2 font-bold text-red">
          </div>
          <div v-for="(item, index) in td" :key="index">
            <div v-if="item" class="p-3 rounded-lg shadow-lg hover:bg-gray-400 cursor-pointer" @click="ambil(item)">
              <span class="float-right text-xs">{{ format(item.tanggal) }} </span>
              <p class="font-bold text-xs">{{ item.title }}</p>
              <p class="text-xs pb-2">{{ item.isi }}</p>
              <button
              v-show="status=='TASK'"
                type="button"
                @click="ganti('ONPROGRESS')"
                class="btn btn-sm btn-primary float-right text-sm"
              >
                <img
                  src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg"
                  class="d-inline"
                  style="height: 20px; width: 20px"
                  alt=""
                />
              </button>
               <button
              v-show="status=='ONPROGRESS'"
                type="button"
                @click="ganti('DONE')"
                class="btn btn-sm btn-danger float-right text-sm"
              >
                <img
                  src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg"
                  class="d-inline"
                  style="height: 20px; width: 20px"
                  alt=""
                />
              </button>
               <button
              v-show="status=='ONPROGRESS'"
                type="button"
                @click="ganti('TASK')"
                class="btn btn-sm btn-success text-sm"
              >
               <img
                  src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg"
                  class="d-inline"
                  style="height: 20px; width: 20px"
                  alt=""
                />
               
              </button>
               <button
              v-show="status=='DONE'"
                type="button"
                @click="tohapus()"
                class="btn btn-sm btn-dark float-right text-sm"
              >
                REMOVE
                <img
                  src="https://upload.egov.balangankab.go.id/svg/arrow-right.svg"
                  class="d-inline"
                  style="height: 20px; width: 20px"
                  alt=""
                />
              </button>
               <button
              v-show="status=='DONE'"
                type="button"
                @click="ganti('ONPROGRESS')"
                class="btn btn-sm btn-primary text-sm"
              >
               <img
                  src="https://upload.egov.balangankab.go.id/svg/arrow-left.svg"
                  class="d-inline"
                  style="height: 20px; width: 20px"
                  alt=""
                />
              </button>
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
            .collection('app_todo_task')
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
        .collection('app_todo_task')
        .doc()
        .set(this.vdata, { merge: true })
        .then((res) => {
          console.log('input berhasil')
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    edit() {
      this.vdata.status = this.status
      db
        .collection('app_todo_task')
        .doc(this.vdata.id)
        .set(this.vdata, { merge: true })
        .then((res) => {
          console.log('update berhasil')
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    hapus() {
        if(confirm('are you sure to delete this item ?')){
            console.log(this.vdata.id)
            db
                .collection(`app_todo_task`)
                .doc(this.vdata.id)
                .delete()
                .then((res) => {
                    console.log('berhasil hapus!')
                })
            }
    },
    getData() {
      db.collection('app_todo_task').onSnapshot((res) => {
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
  layout:"lightjourney"
}
</script>