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
           </div> 
    </div>  
    {{bacd}} 
            <div class="imgs">
            <div class="det1"> <img v-bind:src="pdata.pict" /> </div>
            <div class="det2"> {{pdata.brief}}
                 <div class= "content1"> 
                      <li v-for='(lt, index) in pdata.description'> {{lt}} </li>
                    </div>
             </div>
            <div class="det3">In Stock <br> Call for Price </div>
             </div>
            <div> {{pdata.description}} </div>
            <div> {{pdata.note}} </div>
            <li v-for='(itm, index) in pdata2'> {{index}} {{itm.info}} </li>
            {{pdata2[1]}}
            <div class="flexb1" >
            <div v-for='(val, index) in pdata2'><div class="imgs"> <img v-bind:src="val.img" />
               </div>  
                <div class="hello">
                                {{val.price}} 
                  </div>
               Model: {{val.model}}</div>
               </div>  <!--- End of flex1  -->
           
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