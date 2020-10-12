var  Acctrans = Vue.component('Acctrans' , 
 { 
  props: ['cab','prod'] ,
  template:  ` <div class="fd310"> 
        {{cno}}  {{title}}
       
        <router-link :to="onelg" class="btn_pt2"> balance</router-link> &nbsp;&nbsp;
        <router-view :pbc="b" :subd="prod"></router-view> 
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
          onelg:'',
          ledger:{}
           }
},
mounted: function(){
    this.onelg = '/webaccount/'+'257'+'/atransb' ; 
    console.log("Hello 12!")
}
}) 
/******************************************************************************************************************/
/***                                    Component atrans b  for accounting     October   2020     Michael       ***/
/******************************************************************************************************************/
var  atransb  = Vue.component('atransb' , 
 { 
  props: ['subd','pbc'] ,
  template: ` <div class="fd1"> <br>module <br>
    {{ tno}}
          <table  class="account" >
                    <caption> General Ledger <br>Acoount: {{subd.gt}}</caption>
                      <tr><th>Trans No.</th><th>Date</th><th>Referance</th<th>Debit</th><th>Credit</th><th>Comment</th><th>Balance</th></tr>
                      <tr v-for= "(trn, index ) in subd.oneledg"><td>{{trn.trans_no}} </td><td>{{trn.date}}</td><td>{{trn.referance}}</td><td>{{trn.debit}}</td><td>{{trn.credit}}</td>
                        <td>{{trn.comment}}</td><td>{{trn.balance}}</td></tr>
                          </table>
    
                    </div>  ` ,
  data() {
      return {  
              tm:  false,
              tno:243,
              acclink:'',
              data:'',
              dt_s:'',
              dt_e:'',
              b: 54 
                }
   },
mounted: function(){
      console.log(this.$route.params.pid)
      this.b = this.$route.params.pid 
      let url = 'http://www.gecontech.com/magento/mgc20/src/php/api_db_2020.php?action=onetrans&tt_no=' + this.tno
      axios.get(url).then(function(response){
                app.jsdd = response.data ;   
                console.log(app.jsdd) ;  }) .catch(function(error){ console.log(error) ;  }) ;
      
     }

}) 
/****************************************************************************************************************/
/*******************************************************************************************************************/