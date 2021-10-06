<template>       
        <div>
            <form method="GET" id="genMentrics" @submit.prevent="generateMetrics">
             <div class="input-group mb-3">
                 <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Select </label>
                  </div>
                <select class="form-select" name="group" form="genMentrics" required id="group" v-model="group">
                   <option value="csdinbound">CSD-INBOUND</option>
                   <option value="csdoutbound">CSD-OUTBOUND</option>
                    <option value="collection">COLLECTION</option>
                </select>
             </div>
             <div class="form-group">
                   <label for="start_date_and_time">Start Date & Time</label>
                   <!-- <input type="text" class="form-control" id="start_date_and_time" name="start_date_and_time" aria-describedby="start_date_and_time" placeholder="Enter Date & Time" required> -->
                   <!-- <datetime v-model="startDateTime"></datetime> -->
                   <!-- <vue-ctk-date-time-picker v-model="startDateTime"></vue-ctk-date-time-picker> -->
                   <date-picker v-model="startDateTime.val" placeholder="Enter Date and Time ..." position="left" ref="start_date_and_time"></date-picker>
             </div>
             <div class="form-group">
                  <label for="end_date_and_time">End Date & Time</label>
                  <!-- <vue-ctk-date-time-picker v-model="endDateTime"></vue-ctk-date-time-picker> -->
                  <!-- <datetime v-model="endDateTime"></datetime> -->
                  <!-- <input type="text" class="form-control" id="end_date_and_time" name="end_date_and_time" aria-describedby="end_date_and_time" placeholder="Enter Date & Time" > -->
                    <date-picker v-model="endDateTime.val" placeholder="Enter Date and Time ..." position="left" ref="end_date_and_time"></date-picker>
             </div>
              <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Select Metrics </label>
                  </div>
                  <select class="form-select" name="option_metrics"  required id="option_metrics" v-model="optionMetrics.val" @change="selectMetrics">
                    <option option value="" disabled selected></option>
                     <option value="callduration">Call Durations</option>
                     <option value="callcounts">Call Counts</option>
                      <option value="blended">Blended Durations/Counts</option>
                      <option value="tag">Tags</option>
                  </select>
                  
              </div>
              <div class="border" v-if="selectBlended" >
                 <p>Choose Your Desired Weight Percentage(%):</p>
                   <div class="row">
                     <div class="cl">

                     </div>
                      <div class="col-2 pr-0 mr-0 ">
                          <label class="pr-0 mr-0 ">Select CallDuration Weight: </label>
                      </div>
                       <div class="col-2 pl-0 ml-0">
                         <select class="custom-select"  id="duration_weight" name="duration_weight" v-model="callDurationWeight" v-on:change="setDurationPercentage" >
                           <option value="0" selected>0</option>
                           <option  v-for=" count in 100" :key="count" :value="count" selected>{{count}}</option>
                         </select>
                     </div>
                   </div>
                     <br>
                   <div class="row">
                     <div class="col-2 pr-0 mr-0">
                        <label class="pr-0 mr-0 ">Select CallCounts Weight: </label>
                     </div>
                       <div class="col-2 pl-0 ml-0">
                         <select class="custom-select" id="callcount_weight" name="callcount_weight" v-model="callCountsWeight" v-on:change="setCountPercentage" >
                           <option value="0" selected>0</option>
                            <option  v-for=" count in 100" :key="count" :value="count" selected>{{count}}</option>
                         </select>
                     </div>
                   </div>             
              </div>
              <div class="row">
                      
                      <div class="col-2">
                        <label class="pr-0 mr-0 mt-2">Sort Order: </label>
                        <select class="form-select" id="sorted_order" name="sorted_order" v-model="sortedOrder">
                          <option value="descending" selected>DESCENDING</option>
                           <option value="ascending" >ASCENDING</option>
                        </select>
                    </div>
              </div>                 
                 <br>
              <div class="text-left mb-3">
                    <input type="submit" name="genbtn"  class="btn btn-primary ml-auto" value="Generate" id="genbtn" generateMetrics>
               </div>
               
            </form>
        </div>
        <div id="calltype_modal"></div>

</template>

<script>

 import DatePicker from 'vue3-date-time-picker';
 import 'vue3-date-time-picker/dist/main.css'

export default {
    components: {
       DatePicker
    },
    data(){
        return {
            sortedOrder: null,
            group: null,
            optionMetrics: {
              val: null,
              isValid: true
            },
            callDurationWeight: 0,
            callCountsWeight: 0,
            hasWeightOption: true,

            startDateTime: {
              val: '',
              isValid: true
            },
            endDateTime: {
              val: '',
              isValid: true
            },
            isValidDateRange: true,
            selectBlended: false,
            formIsValid: true,
            
            
        }
    },
    methods:{
      
        setDurationPercentage(){
            this.callCountsWeight = 100 - this.callDurationWeight
        },
        setCountPercentage(){
            this.callDurationWeight = 100 - this.callCountsWeight
        },
        selectMetrics(){
            if(this.optionMetrics.val == 'callduration'){
                this.callDurationWeight = 100
                this.callCountsWeight = 0
                this.selectBlended = false
            }   
            if(this.optionMetrics.val == 'callcounts'){
                this.callDurationWeight = 0
                this.callCountsWeight = 100
                this.selectBlended = false
            }
            if(this.optionMetrics.val == 'blended'){
                this.callDurationWeight = 0
                this.callCountsWeight = 0
                this.selectBlended = true
            }
            if(this.optionMetrics.val == 'tag'){
              this.callDurationWeight = 0
              this.callCountsWeight = 0
              this.selectBlended = false

            }
        },
        formValidation()
        {
          this.formIsValid = true

           if(this.startDateTime.val == ''){
             this.startDateTime.isValid = false
             this.formIsValid = false
           }
           if(this.endDateTime.val == ''){
             this.endDateTime.isValid = false
             this.formIsValid = false
           }

           if(this.optionMetrics.val == ''){
             this.optionMetrics.isValid = false
             this.formIsValid = false
           }
           if(this.optionMetrics.val == 'blended'){
             if(this.callDurationWeight == 0 && this.callCountsWeight == 0){
              this.formIsValid = false
              this.hasWeightOption = false
            }
           }
           
           const startTimeStamp =  this.startDateTime.val.getTime()
           const endTimeStamp =  this.endDateTime.val.getTime()
            
           if(startTimeStamp > endTimeStamp){
              // this.$refs.end_date_and_time.clearValue()
              // this.$refs.start_date_and_time.clearValue()
              alert('Start Date should not be greater in End Date')
              this.formIsValid = false
              this.isValidDateRange = false
              
           }
           return this.formIsValid
        },
        generateMetrics(){
           if(!this.formValidation()){
            //  console.log(this.optionMetrics.val)
             alert('error inputs')
             return
           }
           console.log(this.optionMetrics.val)
           // convert to a string of YYYY-MM-DD HH:MM:ss
           let startTimeStamp =  this.startDateTime.val.getTime()
           let start_date_and_time = new Date(startTimeStamp).toISOString().substr(0, 19).replace('T', ' ')
           let endTimeStamp =    this.endDateTime.val.getTime()
           let end_date_and_time = new Date( endTimeStamp).toISOString().substr(0, 19).replace('T', ' ')
       
           this.$router.push({name: 'generatedmetrics',
              params: {
                sort_order: this.sortedOrder
              },
              query: {group: this.group,
                      start_date_and_time,
                      end_date_and_time,
                      option_metrics: this.optionMetrics.val,
                      duration_weight: this.callDurationWeight,
                      callcount_weight: this.callCountsWeight,
                      
              },
              
           
           })
        }
    },
    computed:{
      getTypeOf(){
        return typeof this.bob
      }
        
    },
    created(){
      
    },
   
}
</script>

<style >

  .invalid label {
  color: red;
  }
  .form_invalid {
    color: red;
  }
  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }

 .dp__input {
   color: blue;
   height: 40px;
   font-size: 20px;
   background-color: rgb(235, 227, 227);
   padding: 5px;
   margin:20px 0  ;

 }
  #tj-datetime-input{
      color: blue;
      background-color: rgb(238, 238, 238);
      height: 40px;
  }
</style>