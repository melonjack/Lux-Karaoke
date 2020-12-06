var  Acctrans = Vue.component('Acctrans' , 
 { 
  props: ['cab','prod'] ,
  template:  ` <div class="fd310"> 
        <h2><router-link to="/webaccount"> <i class="fas fa-home"> &nbsp;&nbsp;Home</i> </router-link> </h2> &nbsp;&nbsp;
           &nbsp;&nbsp;<br><br>
          <i class="fas fa-phone-alt">Try</i> &nbsp;&nbsp;   <i class="fas fa-envelope"></i>
        <br> {{b}}
        <router-view :pbc="b" :subd="prod"></router-view> 
        </div>  `  ,
  data() {
    return {  
          tm:  false,
          checked: false, 
          title: 'General Entries' ,
          tno: 101,
          b: 54 ,
          dt0:'2020-02-25',
          dts:'2020-01-01',
          dte:'2020-03-30',
          customer:{},
          lnk:'component',
          ledger:{}
           }
},
beforeRouteUpdate(to,from,next) {
  let val = to.params.pid
  this.b  = val 
  next();
 },
mounted: function(){
    this.lnk = '/webaccount/'+'257'+'/atransb' ; 
    this.title = this.$route.params.pid
    console.log(this.$route.params.pid) ;
    
}
}) 
/******************************************************************************************************************/
/***                                    Component atrans b  for accounting     October   2020     Michael       ***/
/******************************************************************************************************************/
var  atransb  = Vue.component('atransb' , 
 { 
  props: ['subd','pbc'] ,
  template: ` <div class="fd1">
              A General Ledger Record  &nbsp;&nbsp; {{b}} {{acclink}} <br>
              <table  class="account" >
                    <caption> Transation # &nbsp;&nbsp; {{tno}} &nbsp;&nbsp;  &nbsp;&nbsp; Balance: &nbsp;&nbsp; {{subd.blnc}}</caption>
                      <tr><th>Trans No.</th><th>Date</th><th>Account no</th><th>Account Name</th><th>Debit</th><th>Credit</th><th>Referance</th><th>Comment</th></tr>
                      <tr v-for= "(trn, index ) in subd.oneledg"><td>{{trn.trans_no}} </td><td>{{trn.date}}</td><td>{{trn.acc_no}}</td><td>{{trn.acc_nm}}</td><td>{{trn.debit}}</td><td>{{trn.credit}}</td>
                      <td>{{trn.referance}}</td><td>{{trn.comment}}</td></tr>
                          </table>
               <button class="btn btn-primary btn-sm" v-on:click="getrecord(subd)">Re-Post</button>
                {{data}} <br> {{acclink}}
                    </div>  ` ,
  data() {
      return {  
              tm:  false,
              tno:243,
              acclink:'33',
              data:'L',
              dt_s:'',
              dt_e:'',
              b: 54 
                }
   },
  mounted: function(){
      console.log(this.$route.params.pid)
      this.tno = this.$route.params.pid 
      this.loadarow(this.tno)
     /*** let url = 'http://www.gecontech.com/magento/mgc20/src/php/api_db_2020.php?action=onetrans&tt_no=' + this.tno
      axios.get(url).then(function(response){
                app.jsdd = response.data ;   
                console.log(app.jsdd) ;  }) .catch(function(error){ console.log(error) ;  }) ;     
          ***/
     },
  beforeRouteUpdate(to,from,next) {
      let val = to.params.pid
      this.b  = val 
      this.loadarow(this.b)
      next();
     },
  methods:{
    getrecord(mx) {
         this.b = this.b+1
         this.data = mx
         console.log(this.data)
         return "yes"
     },
    loadarow(lno) {
         let url = 'http://www.gecontech.com/magento/mgc20/src/php/api_db_2020.php?action=onetrans&tt_no=' + lno
         axios.get(url).then(function(response) {
                  app.jsdd = response.data ;   
                  console.log(app.jsdd) ;   }) .catch(function(error){ console.log(error) ;  }) ;   
    } 
    }

}) 
/****************************************************************************************************************/
/*******************************************************************************************************************/