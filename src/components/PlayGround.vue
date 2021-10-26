<template>

    <div>
      <label>Name</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="age">
    </div>
    <button @click="clickMe">CLICK</button>
    <button @click="changeValue">Change</button>

  <p v-if="isBtn">{{getInfo}}</p>
</template>

<script>
  export default {
    data(){
      return {
        isBtn: false,
        name: 'Rogmer',
        age: '',
        isUpdated: false
      }
    },
    computed:{
      getInfo(){
        return this.name + ' ' +this.age
      }
    },
    methods:{
       clickMe(){
        // this.isBtn = !this.isBtn
       },
       changeValue(){
         this.isUpdated = !this.isUpdated
       }
    },
    watch:{
       isUpdated(newvalue){
        if(newvalue){
         // this.$router.push('/callsummaries/csdinbound')
         alert('get new update value')
        }else{
          alert('old value ')
          // this.$router.push('/callsummaries/csdoutbound')
        }
       }
    }
  }
</script>

<style scoped>

</style>