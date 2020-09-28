/*******************************************************************************************************************/
/***********                             Component   Product Informations      Sept.27 , 2020                *******/
/*******************************************************************************************************************/
var  detail = Vue.component('detail' , 
 { 
  props: ['bacd'] ,
  template:  ` <div class="flexb2" >
            <div class="imgs">
            <div class="det1"> <img v-bind:src="bacd.pict" /> </div>
            <div class="det2"> {{bacd.brief}}
                 <div class= "content1"> 
                      <li v-for='(lt, index) in bacd.description'> {{lt}} </li>
                    </div>
             </div>
            <div class="det3">media33 </div>
             </div>
            <div> {{bacd.description}} </div>
            <div> {{bacd.note}} </div>
           
     </div> `  ,
  data() {
      return {  
          checked: false,
          dt_s:'',
          dt_e:'',
          data:'' 
      }
    } ,
 created: function(){
            console.log( this.$route.params ) ; 
  },
mounted: function(){
    this.dt_s = this.data.startdt
    this.dt_e = this.data.enddate
    let mx = this.$route.params 
   
    console.log(url) ;
  }
})
/***************************************************************************************/