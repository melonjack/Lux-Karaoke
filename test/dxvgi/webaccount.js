var  Account = Vue.component('Account' , 
 { 
  props: ['cab','prod'] ,
  template:  ` <div class="fd310"> 
        {{cno}}  {{title}}
        </div>  `  ,
  data() {
    return {  
          tm:  false,
          checked: false, 
          title: 'General Entries' ,
          tno: 101,
          cno: 30200,
          acl:'',
          b: 54 ,
          ledger22:{},
          uid:109,
          dt0:'2020-02-25',
          dts:'2020-01-01',
          dte:'2020-03-30',
          customer:{},
          ledger:{}
           }
},
mounted: function(){
console.log("Hello 12!")
}
}) 
/*******************************************************************************************************************/