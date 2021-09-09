<template>
<!-- "buefy": "^0.9.2", -->
    <section v-if="ready">
      <div v-if="selected">
        <!-- FORM -->
      </div>
      <div style="overflow:scroll;padding:10px;" class="scrollbarnya">
            <div class="sm-form float-right">
                <input type="text" id="search" name="search" class="form-control form-control-sm" placeholder="search" v-model="search" >
          </div>
            <select class='form-control' style="width:20vw;" v-model="perPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="1000">semua</option>
            </select>
            <!-- b-table -->
        <b-table
            :data="td"
            :sticky-header="false"
            :selected.sync="selected"
            :per-page="perPage" :bordered="true" :striped="true" :narrowed="true" :hoverable="true" :mobile-cards="false" :paginated="true" :sort-icon="'arrow-up'" :sort-icon-size="'is-small'" :pagination-simple="false" :default-sort-direction="'asc'" :pagination-rounded="true" default-sort="id"
            >
            <b-table-column 
            :visible="!hides.includes(item.field)"
            :searchable="caris.includes(item.field)"
            v-for="(item, index) in keys" :key="index+'keys'"
            :field="item.field" :label="item.label" sortable  v-slot="props" >
            <span class="text-md" v-if="item.field!='link'">
                {{ props.row[item.field] }}
            </span>
            <span v-else>
              <a :href="props.row[item.field]" target="__blank" class="text-sm">
                <button type="button" name="" id="" class="text-sm btn btn-sm btn-dark btn-block"><span class="typcn typcn-download"></span> Download</button>
              </a>
            </span>
            </b-table-column>
        </b-table>
      </div>
    </section>
</template>

<script>
    export default {
      props:['tables','hide','cari'],
        data() {
            return {
                ready:false,
                datanya:[],
                keys:[],
                perPage:10,
                search:"",
                selected:{status:false},
            }
        },
        watch:{
          selected(){
            window.scrollTo(0, 0);
            if(this.selected){
              this.$emit('selected',JSON.parse(JSON.stringify(this.selected)))
            }
          },
          tables(){
            this.getData();
            this.$forceUpdate();
          }
        },
        methods: {
         async getData(){
            let that =this
            if(this.tables){
              this.datanya = this.tables
              this.datanya.forEach(e=>{
                if(e.id){
                  e.id=parseInt(e.id)
                }
              })
              that.keys = Object.keys(this.datanya[0])
              that.keys = that.keys.map(e=>{
                return {
                  field:e,
                  label:e.toUpperCase()
                }
              })
              this.ready = true
              this.$forceUpdate()
            }
            this.$forceUpdate()
          }
        },
       async mounted() {
         let that=this
         this.$nuxt.$on('getData',function(){
           that.getData()
         });
         this.getData()
          // setTimeout(() => {
          //   this.$el.querySelectorAll('th').forEach(e=>{
          //     e.style.background = 'black';
          //     e.style.color = "white";
          //   })
          // }, 2000);
        },
         computed:{
           hides(){
             let data =this.hide ?this.hide:[]
             data.push('createdAt','updateAt')
             return data
           },
           caris(){
             let data = this.cari?this.cari:['']
             return data
           },
          td(){
            let data = this.datanya
            //! search fungsi
            let keys = Object.keys(data[0]);
            let that=this
            data = data.filter((v, i, a) => {
              let hasil = false;
              keys.filter(key => {
                if (typeof v[key] == "string") {
                  if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
                    hasil = true;
                  }
                } else {
                  if (v[key] != null) {
                    if (v[key].toString().indexOf(this.search) != -1) {
                      hasil = true;
                    }
                  } else {
                  }
                }
              });
              if (hasil) return v;
            });
            return data
          }
        },  
    }
</script>
<style >
.is-sticky-column-one {
    background: #23d160 !important;
    color: white !important;
}
.is-sticky-column-two {
    background: #167df0 !important;
    color: white !important;
}
.scrollbarnya::-webkit-scrollbar {
  width: 5px;
  height:5px;
}

/* Track */
.scrollbarnya::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent; 
  border-radius: 5px;
}
 
/* Handle */
.scrollbarnya::-webkit-scrollbar-thumb {
  cursor: grab;
  background: black; 
  border-radius: 5px;
}

/* Handle on hover */
.scrollbarnya::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</style>