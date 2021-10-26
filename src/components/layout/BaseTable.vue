<template>
    <table class="table" :class="tableStriped">
                <thead :class="tableDark">
                    <table-header :theader="theader" :metricsHeader="metricsHeader"> 
                        <th scope="col">
                              <button type="button" class="btn btn-primary btn-small" data-bs-toggle="modal" data-bs-target="#myDateRange" dataset-backdrop="static" dataset-keyboard="false" id="selectdate">SELECT DATE</button>
                              <!-- <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mySearch" dataset-backdrop="static" dataset-keyboard="false">SEARCH</button> -->
                        </th>
                    </table-header>
                    
                </thead>
                <tbody>
                    <slot></slot>
                </tbody>
  </table>

  <select-date-range-modal-form :tags="tags" @emittedData="searchResult"></select-date-range-modal-form>
</template>

<script>
import SelectDateRangeModalForm from '../agentcdr/modal/SelectDateRangeModalForm.vue'
 import TableHeader from './tablelayout/TableHeader.vue'

export default {
    props: ['theader','tdata','tableclass', 'metricsHeader', 'tags'],
    components: {
         TableHeader,
          SelectDateRangeModalForm,
         
    },
    methods:{
      searchResult(from,to,tag){
        
         
         this.$emit('emittedData',from,to,tag)
     },
    },
    computed: {
        tableDark(){
           return this.tableclass == 'cdr'  || this.tableclass == "metrics" ? 'table-dark': ''
        },
        tableStriped(){
            return this.tableclass == 'agent' || this.tableclass == 'tags' ? 'table table-striped': ''
        }
    }
}
</script>