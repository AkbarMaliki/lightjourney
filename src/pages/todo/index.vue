<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3"></div>
        <div
          class="
            col-sm-3
            p-4
            shadow-lg
            rounded-lg
            text-center
            font-bold
            hover:bg-blue-400
            cursor-pointer
          "
          @click="$router.push('/todo/schedule')"
        >
          <img
            src="https://upload.egov.balangankab.go.id/svg/stopwatch.svg"
            class="d-inline"
            style="height: 30px; width: 20px"
            alt=""
          />
          SCHEDULE
          <p class="p-1 text-lg text-red-600">12</p>
        </div>
        <div
          class="
            col-sm-3
            p-4
            shadow-lg
            rounded-lg
            text-center
            font-bold
            hover:bg-blue-400
            cursor-pointer
          "
          @click="$router.push('/todo/task')"
        >
          <img
            src="https://upload.egov.balangankab.go.id/svg/pin.svg"
            class="d-inline"
            style="height: 30px; width: 20px"
            alt=""
          />
          TASK
          <p class="p-1 text-lg text-red-600">12</p>
        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-12">
          <div class="p-4">
         
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Bar from "@/components/Chart/Bar";
import apexchart from 'vue-apexcharts'
export default {
    components:{
     apexchart   
    },
  data() {
    return {
      series: [{
              name: "Desktops",
              data: [10, 6, 5, 13, 7, 3, 12, 0, 0]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Total Task tiap bulan',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
    };
  },
};
</script>