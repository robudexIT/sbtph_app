<template>
     <tr v-for="(item, index) in tdata" :key="index">
       <td>{{index+1}}</td>
       <td>{{item.startime}}</td>
       <td>endtime</td>
       <td>caller</td>
       <td>callStatus</td>
       <td>
           <button>{{limitCommentTitle(item.comment)}}</button>
       </td>
       <td>{{item.commentby}}</td>
       <td>{{item.getdate}}</td>
     </tr>
</template>

<script>
    export default {
        props:['tdata'],
        methods: {
            limitCommentTitle(comment, limit = 30)  {
                var newComment = [];
                if (comment.length > limit) {
                    comment.split(' ').reduce((acc, cur) => {
                        if (acc + cur.length <= limit) {
                            newComment.push(cur);
                        }
                        return acc + cur.length;
                    }, 0);

                    // return the result
                    return `${newComment.join(' ')} ...`;
                }
                return comment;
            }
         }

     
    }
    
</script>



