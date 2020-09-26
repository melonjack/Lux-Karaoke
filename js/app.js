/*******************************************************************************************************************/
/***********                    Component            of Catalog      June 24 , 2020                          *******/
/*******************************************************************************************************************/
 var  catalog = Vue.component('catalog' , 
 { 
  props: ['bacd'] ,
  template:  ` <div class="flexb1" >
      <div v-for='(val, index) in bacd'><div class="imgs"> <img v-bind:src="val.pict" />
               </div>  
                <div class="hello">
                <router-link :to="val.toto">
                {{val.name}} 
                </router-link>
  </div>
               Model: {{val.model}}</div>
           
     </div> `  ,
  data() {
      return {  
          checked: false,
          dt_s:'',
          dt_e:'',
          compon:'/detail/E23008',
          data:'' 
      }
    } ,
    mounted: function(){
   // this.data = JSON.parse(localStorage.getItem('defult'))
   // this.dt_s = this.data.startdt
   // this.dt_e = this.data.enddate
    //let mx = '&dte=' + this.dt_e 
    let url = 'http://www.gecontech.com/magento/mgc20/src/php/product/product.php?acc=catlist1' 
              axios.get(url).then(function(response){
                      app.ab = response.data.clist ;       console.log(app.ab) ;  }) .catch(function(error){ console.log(error) ;  }) ;
    console.log(url) ;
  }
})
/*******************************************************************************************************************/
/***********                             Component   Detail       June 24 , 2020                             *******/
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
            console.log( this.$route.params.pid ) ; 
  },
    mounted: function(){
    this.data = JSON.parse(localStorage.getItem('defult'))
    this.dt_s = this.data.startdt
    this.dt_e = this.data.enddate
    let mx = this.$route.params.pid 
    let url = 'http://www.gecontech.com/magento/mgc20/src/php/product/product.php?acc=detail&code=' + mx 
              axios.get(url).then(function(response){
                      app.ab = response.data.detail ;
                      console.log(app.ab) ;    }) .catch(function(error){ console.log(error) ;  }) ;
    console.log(url) ;
  }
})
/***************************************************************************************/

