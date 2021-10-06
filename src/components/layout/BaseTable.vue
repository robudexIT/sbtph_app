<template>
    <table class="table" :class="tableStriped">
                <thead :class="tableDark">
                    <table-header :theader="theader"></table-header>
                </thead>
                <tbody>
                    <slot></slot>
                </tbody>
  </table>
</template>

<script>
 import TableHeader from './tablelayout/TableHeader.vue'

export default {
    props: ['theader','tdata','tableclass'],
    components: {
         TableHeader,
         
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