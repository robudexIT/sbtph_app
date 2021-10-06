<template>
     <base-container>
        <div>
            <h2 class="text-center">Generate Metrics</h2>
           <metrics-form></metrics-form>
        </div>
     </base-container>
</template>


<script>
import BaseContainer from '../layout/BaseContainer.vue'
 import MetricsForm from './forms/MetricsForm.vue'
export default {
    components:{
        MetricsForm,
        BaseContainer
    }
    
}
</script>