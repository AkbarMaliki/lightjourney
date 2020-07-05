<template>
  <div>
    <button type="button" @click="test" class="btn btn-sm btn-primary  ">test</button>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
export default{
  data(){
    return{

    }
  },
  methods:{
      test(){
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
      }
  },
  mounted() {
    
  },
}
</script>