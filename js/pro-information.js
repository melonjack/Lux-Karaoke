/*******************************************************************************************************************/
/***********                             Component   Product Informations      Sept.27 , 2020                *******/
/*******************************************************************************************************************/
var  detail = Vue.component('detail' , 
 { 
  props: ['bacd'] ,
  template:  ` <div class="flexb2" >
     <div class="flex-main">
          <div class="imgs">
            <a href="#" > <img :src="img_url + bacd.image"  width="450" ></a>
          </div>
          <div class="feature">
          {{bacd.brief}}
          <hr>
          <div class="feat"> {{bacd.description}} </div>
            </div>
           <div class="buy-act">
           shipping from Vancouver BC Canada <hr>
           shipping Cost {{bacd.rprice}} <br>
           <i class="fa fa-th"></i> &nbsp;&nbsp; &nbsp;&nbsp;<i class="fa fa-address-book"></i>
           In Stock
           </div> 
    </div>  <!--- End of flex-main  -->
    {{bacd}} 
           
     </div> `  ,
  data() {
      return {  
          checked: false,
          dt_s:'',
          dt_e:'',
          img_url: 'https://mzhou2015.github.io/gecon_pub/src/vxdagi/image/',
          pdata:'' ,
          pdata2:''
      }
    } ,
 created: function(){
          this.pdata = {pict:"http://www.gecontech.com/magento/myadmin/docs/image/products/kv-v5pro-2019032016.jpg",brief:"InAndon KV-V5 Pro Karaoke Player, Intelligent Voice Keying Machine Real-time score The newest model (KV-V5 Pro + 4TB HDD )",
                           description:["High Definition 4K Output","Built-in wireless,With Chinese Cantonese Taiwanese English Chiuchow Songs in","Update songs from Cloud with a huge song Database",
                                         "Own reverb function , rising-falling tone function ","Package Includes: KV-V5 Pro karaoke player,Power adpter 12V/2A,Audio/Video RCA Cable,User Manual"],note:"495x400x152"}
            console.log( this.checked ) ; 
  },
mounted: function(){
      let mx = this.dt_s 
      this.pdata2 =  JSON.parse(localStorage.getItem('prodata'))
      console.log( this.pdata2 )
      
  }
})
/************************************************************************************************************************/
/***********                             Component   Product ListItem      Nov.9 2020   Michael  Zhou             *******/
/************************************************************************************************************************/
var  listitem = Vue.component('listitem' , 
 { 
  props: ['prodata','index'] ,
  template: `<div class="listitem">
    bgfgghk
               <div class="imgs">
                <a href="#" > <img :src="url + prodata.image"  width="340" ></a>
               </div>
              <div class="brief">
                 <a href="./#" >{{prodata.brief}}</a> <hr> <span> product code: {{prodata.ptcode}} </span>
               </div>
           </div> `,
  data() {
      return {  
          checked: false,
          dt_s:'',
          dt_e:'',
          pdata:'' ,
          url: 'https://mzhou2015.github.io/gecon_pub/src/vxdagi/image/',
          pdata2:''
      }
    } ,
 created: function(){
      
  },
mounted: function(){
  
    console.log("Second")
  
   }
})
/***************************************************************************************/
var  list1 = Vue.component('list1' , 
 { 
  props: ['prodata','index'] ,
  template: `<div class="listitem">
  Hello World !
  </div> `,
  data() {
    return {  
        checked: false,
        dt_s:'',
     
    }
  } 
})
/***************************************************************************************/
var  list2 = Vue.component('list2' , 
 { 
  props: ['prodata'] ,
  template: `<div class="list2">
  Hello World2 !
  </div> `,
  data() {
    return {  
        checked: false,
        dt_s:'',
        url: './product/?kdy35=aesdf&a=cata4de&ptc=E4578' 
    }
  } 
})
Vue.component('citem', { 
  props: ['prodata','index'] ,
  template: `<div class="listitem"> 
                <div class="imgs">
                <a :href="url+prodata.ptcode+rnd" > <img :src="img_url + prodata.image"  width="340" ></a>
               </div>
                <div class="brief">
                 <a :href="url+prodata.ptcode+rnd" >{{prodata.brief}}</a> <hr> <span> product code: {{prodata.ptcode}} </span>
                 <br> <span> Model: {{prodata.model}} </span>
               </div>
  </div> `,
  data() {
    return {  
        checked: false,
        rnd:"&rdd=dre456" ,
        dt_s:'',
        img_url: 'https://mzhou2015.github.io/gecon_pub/src/vxdagi/image/',
        url: './product/?kdy35=aesdf&a=cata4de&ptc=' 
    }
  } 
 })
Vue.component('component-b', { template: `<div class="listitem">  Hello World !</div> ` })
Vue.component('component-c', { template: `<div class="listitem">  Hello World !</div> ` })