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
            </div>
           <div class="buy-act">
           media33<br>
           {{bacd.brief}} <br>
           In Stock
           </div> 
    </div>  <!--- End of flex-main  -->
    {{bacd}} 
        <div class="flex-main">
          <div class="imgs">
           Hello here
          </div>
         <div class="feature">
          {{bacd.brief}}
          </div>
         <div class="buy-act">
          media33<br>
          {{bacd.brief}} <br>
           In Stock
         </div> 
</div>  <!--- End of flex-main  -->
           
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
/***************************************************************************************/