<template>
    
    <div class="modal fade" :id="modalId" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">

          <h4 class="modal-title">{{modalTitle}}</h4>
        </div>
        <div class="modal-body">
              <form :method="formMethod" :id="formId" @submit.prevent="submitFromData">
                  <template v-if="formId== 'addTag' && modalId == 'modalTag'"> 
                     <div class="mb-3">
                      <label for="Add Tag"  class="mb-3">Add Tag</label>
                      <input type="text" class="form-control" id="tag" aria-describedby="tag" v-model="mdlTag.val">
                      <div id="tagdesc" class="form-text">All tag must be unique.</div>
                   </div>
                    <div class="mb-3">
                        <label for="TagType" class="mb-2" >Select TagType:</label>
                        <select class="form-select" aria-label="Default select example" v-model="mdlTagType.val">
                            <option value="CSDINBOUND">CSD-INBOUND</option>
                            <option value="CSDOUTBOUND">CSD-OUTBOUND</option>
                            <option value="COLLECTION">COLLECTION</option>
                        </select>
                    </div>
                  </template>
                  <template v-if="formId=='addAgent' && modalId=='modalAgent'">
                     <div class="mb-3">
                      <label for="Name"  class="mb-3">Name</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" placeholder='Agent Name' v-model="mdlName.val" >
                    </div>
                     <div class="mb-3">
                      <label for="Email Address"  class="mb-3">Email Address</label>
                      <input type="email" class="form-control" id="email" aria-describedby="email" placeholder='Enter Valid Email' v-model="mdlEmail.val">
                    </div>
                     <div class="mb-3">
                      <label for="extension"  class="mb-3">Extension</label>
                      <input type="text" class="form-control" id="extension" aria-describedby="extension" placeholder='Enter Unique Ext.' v-model="mdlExt.val">
                    </div>
                    <div class="mb-3" v-if="agent =='sales'">
                        <label for="TagType" class="mb-2" >Select Team Leader:</label>
                        <select class="form-select" aria-label="Default select example" v-model="selectedTeamLeader.val">
                            <option v-for="teamlead in  salesTeamLeaders" :key="teamlead" :value="teamlead">{{teamlead}}</option>
                        </select>
                    </div>
                  </template>
                

                  <template v-if="formId=='updateAgent' && modalId=='updatemodalAgent' " >
                     <div class="mb-3">
                      <label for="Name"  class="mb-3">Name</label>
                      <input type="text" class="form-control" id="updatename" aria-describedby="name" placeholder='Agent Name' :value="currentName" @input="setName">
                    </div>
                     <div class="mb-3">
                      <label for="Email Address"  class="mb-3">Email Address</label>
                      <input type="email" class="form-control" id="updateemail" aria-describedby="email" placeholder='Enter Valid Email' :value="currentEmail" @input="setEmail">
                    </div>
                     <div class="mb-3">
                      <label for="extension"  class="mb-3">Extension</label>
                      <input type="text" class="form-control" id="updateextension" aria-describedby="extension" placeholder='Enter Unique Ext.' :value="extension" disabled>
                    </div>

                    <div class="mb-3" v-if="agent =='sales'">
                        <label for="TagType" class="mb-2" >Select Team Leader:</label>
                        <select class="form-select" aria-label="Default select example"  :value="currentTeamLeader" @change="setTeamLeader">
                            <opttion :value="currentTeamLeader" selected>{{currentTeamLeader}}</opttion>
                            <option v-for="teamlead in  salesTeamLeaders" :key="teamlead" :value="teamlead">{{teamlead}}</option>
                        </select>
                    </div>
                  </template>

                  <hr>
                  <div class="row justify-content-end">
                    <div class="col-5 ">
                        <button type="button " class="btn btn-primary ml-auto m-1" data-bs-dismiss="modal" id="addbtn" >Submit</button>
                        <button type="button" class="btn btn-danger ml-auto "  data-bs-dismiss="modal" >Close</button>
                    </div>
  
                </div>
                 

          </form>
        </div>


      </div>

    </div>
  </div>


</template>

<script>
    export default {
        emits:['emittedData'],
        props: ['modalId','modalTitle', 'formId', 'formMethod','agent','currentName', 'currentEmail', 'extension','currentTeamLeader'],
        
        data(){
          return {
            
            mdlIsValid: true,
            mdlName: {
              val: null,
              isValid: true
            },
            mdlEmail: {
              val: null,
              isValid: true
            },
            mdlExt: {
              val: null,
              isValid: true
            } ,
            mdlTag: {
              val: null,
              isValid:true
            },
            mdlTagType: {
              val: null,
              isValid: true
            },
            selectedTeamLeader: {
              val: null,
              isValid: true 
            },
            updateName: null,
            updateEmail:null,
            updateTeamLeader:null
         
          }
        },
        computed:{
          salesTeamLeaders(){
            //available on sales only
            return this.$store.getters['agentinfo/getSalesTeamLeaders']
          },
         
        },
        methods: {
            setName(e){
              this.updateName = e.target.value
            },
            setEmail(e){
              this.updateEmail = e.target.value
            },
            setTeamLeader(e){
              this.updateTeamLeader = e.target.value
            },
            formValidation(){
              return this.formIsValid
            },
            resetUpdateInputs(){
              this.updateTeamLeader == null
              this.updateEmail = null
              this.updateName = null

            },
           
            submitFromData(){
              if(this.formValidation()){
                return
              }
              let data;
              if(this.modalId == 'modalTag' && this.formId == 'addTag'){
                  let d = new Date()
                  let month = d.getMonth()+1
                  let year = d.getFullYear()
                  let  day = d.getDate()
                  let createddate = `${year}-${month}-${day}`
                 data = {
                  createdby: this.$store.getters.getUserName,
                  createddate: createddate,
                  tagname: this.mdlTag.val,
                  tagtype: this.mdlTagType.val
                }
                
              }else if(this.modalId == 'modalAgent' && this.formId == 'addAgent'){
                  data = {
                  name: this.mdlName.val,
                  email: this.mdlEmail.val,
                  extension: this.mdlExt.val
                }
                if(this.agent == 'sales'){
                  data.teamlead = this.selectedTeamLeader.val
                }
              }else if(this.formId=='updateAgent' && this.modalId=='updatemodalAgent'){
                  let name
                  let email
                  if(this.updateName !== null){
                    name = this.updateName
                  }else{
                    name = this.currentName
                  }

                  if(this.updateEmail !== null){
                    email = this.updateEmail
                  }else{
                    email = this.currentEmail

                  }
                  data = {
                  name: name,
                  email: email,
                  extension: this.extension
                }
                if(this.agent == 'sales'){
                  if(this.updateTeamLeader !== null){
                     data.teamlead = this.updateTeamLeader
                     this.updateTeamLeader = null
                    
                  }else{
                    data.teamlead = this.currentTeamLeader
                    this.updateTeamLeader = null
                  }
                 
                }
               
              }
              
              this.$emit('emittedData', data)
            }
        },
       
        
    }

</script>