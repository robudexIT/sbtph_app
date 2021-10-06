<template>

    <tr v-if="theader=='csdinbound' || theader=='csdoutbound' || theader=='collection' || theader=='sales'">
        <th scope="col">#</th>
        <th scope="col">EXTENSION</th>
        <th scope="col">NAME</th>
        <th scope="col" v-if="theader=='sales'">TEAMLEADER</th>
        <th scope="col">Total Made Calls </th>
        <th scope="col">Total Calls Duration</th>
         <th scope="col">
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myDateRange" dataset-backdrop="static" dataset-keyboard="false" id="selectdate">SELECT DATE</button>
           <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#mySearch" dataset-backdrop="static" dataset-keyboard="false">SEARCH</button>
        </th>
    </tr>

    <tr v-if="theader=='csdinbounddetails' || theader=='csdoutbounddetails' || theader=='collectiondetails' || theader=='salesdetails'">
        <th scope="col">#</th>
        <th scope="col" v-if="theader=='csdinbounddetails'">Extension</th>
        <th scope="col">Called(#)</th>
        <th scope="col">Caller</th>
        <th scope="col">CallStatus</th>
        <th scope="col">StartTime</th>
        <th scope="col">EndTime</th>
        <th scope="col">Duration</th>
        <th scope="col">Recordings</th> 
        <th scope="col">
            <input type="hidden" name="extension" id="extension">
            <input type="hidden" name="name" id="name">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myDateRange" dataset-backdrop="static" dataset-keyboard="false" id="selectdate">SELECT DATE</button>
        </th>
        <th scope="col">Comment/Tag</th>
     </tr>

     <tr v-if="theader=='parkedcalls'">
        <th scope="col">#</th>
        <th scope="col">Caller</th>
        <th scope="col">Waiting Time</th>
        <th scope="col">Date</th>                  
    </tr>

     <tr v-if="theader=='missedcalls'">
         <th scope="col">#</th>
        <th scope="col" >Total Missed Calls</th>
        <th scope="col">
          <button type="button" class="btn btn-primary btn-small" data-toggle="modal" data-target="#myDateRange" dataset-backdrop="static" dataset-keyboard="false" id="selectdate">SELECT DATE</button>
        </th>
    </tr>

     <tr  v-if="theader=='detailedmissedcalls'"> 
         <th scope="col">#</th>
         <th scope="col">StartTime</th>
         <th scope="col">EndTime</th>
         <th scope="col">Caller</th>
         <th scope="col">CallStatus</th>
         <th scope="col">Comment</th>
         <th scope="col">Comment By</th>
         <th scope="col">
             <input type="hidden" name="extension" id="extension">
             <input type="hidden" name="username" id="username">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myDateRange" dataset-backdrop="static" dataset-keyboard="false" id="selectdate">SELECT DATE</button>

         </th>
     </tr>

     <tr v-if="theader=='voicemails'">
        <th scope="col">#</th>
        <th scope="col">Caller</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">VoiceMail</th>
        <th scope="col">Action</th>
    </tr>

     <tr v-if="theader=='phoneloginheader'">
         <th scope="col">#</th>
        <th scope="col">EXTENSION</th>
        <th scope="col">NAME</th>
        <th scope="col">LOGIN/LOGOUT</th>
        <th scope="col">LOGIN DURATION</th>
        <th scope="col">SERVER USED</th>
        <th scope="col">SERVER STATUS</th>
        <th scope="col">CHANNEL STAT</th>
    </tr>

     <tr v-if="theader=='agent'">
        <th scope="col"><h3>#</h3></th>
        <th scope="col"><h3>Extension</h3></th>
        <th scope="col"><h3>Name</h3></th>
        <th scope="col"><h3>Email</h3></th>
        <th scope="col"><h3>Action</h3></th>
     </tr>

     <tr v-if="theader=='tags'">
        <th scope="col">#</th>  
       <th scope="col">TAGTYPE</th>
       <th scope="col">TAGNAME</th>
       <th scope="col">CREATED</th>
       <th scope="col">CREATED DATE</th>
       <th scope="col">ACTION</th>
    </tr>

    
    
</template>

<script>
export default {
    props:['theader'],
   
}

</script>