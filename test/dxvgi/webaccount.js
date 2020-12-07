var  Acctrans = Vue.component('Acctrans' , 
 { 
  props: ['cab','prod'] ,
  template:  ` <div class="fd310"> 
        <h5><router-link to="/webaccount"> <i class="fas fa-home"> &nbsp;&nbsp;Home</i> </router-link> </h5> &nbsp;&nbsp; {{b}}
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
 }
}) 
/******************************************************************************************************************/
/***                                    Component atrans b  for accounting     October   2020     Michael       ***/
/******************************************************************************************************************/
var  atransb  = Vue.component('atransb' , 
 { 
  props: ['subd','pbc'] ,
  template: ` <div class="fd1">
              A General Ledger Entries  &nbsp;&nbsp; <br>
              <table  class="account" v-if="tm">
                    <caption> Transation # &nbsp;&nbsp; {{tno}} &nbsp;&nbsp;  &nbsp;&nbsp; Balance: &nbsp;&nbsp; {{subd.blnc}}
                     <button class="btn btn-primary btn-sm" v-on:click="getrecord(subd)">Re-Post</button></caption>
                      <tr><th>Trans No.</th><th>Date</th><th>Account no</th><th>Account Name</th><th>Debit</th><th>Credit</th><th>Referance</th><th>Comment</th></tr>
                      <tbody>
                      <tr v-for= "(trn, index ) in subd.oneledg"><td>{{trn.trans_no}} </td><td>{{trn.date}}</td><td>{{trn.acc_no}}</td><td>{{trn.acc_nm}}</td><td>{{trn.debit}}</td><td>{{trn.credit}}</td>
                      <td>{{trn.referance}}</td><td>{{trn.comment}}</td></tr>
                      </tbody>
                          </table>
               
              <div class="container" v-if="ten">
                    Account No: 
                    <select class="form1"  v-model='cno'  v-on:change="onChange" >
                    <option v-for='(val, index) in acl' :value='val.acc_no' >{{val.acc_name}}</option>
                    </select> 
                    Reference No:  <input type="date" class="form1" v-model="dt0">
                  Entry Date: <input type="text" class="form1" v-model="tref"> Customer Name:
                  <select class="form1"  v-model='uid'>
                  <option v-for='(value, key) in gur.rows' :value='value.id' >{{value.company}}</option>
                  </select> 

                    <table class="account" v-if="ten">
                    <tr><th>Account Name</th><th>Debit</th><th>Credit</th><th>Comment</th></tr>
                    <tr  v-for="(trn, index ) in data"> <td><input type="text" class="" v-model="trn.acc_nm"></td>
                    <td><input type="text" class="" v-model="trn.debit"></td><input type="text" class="" v-model="trn.credit"></td><td><input type="text" class="" v-model="trn.comment"></td>
                     </tr></table>
                    <button type="submit" class="btn btn-success">Update</button>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<button type="submit" class="btn btn-info">Submit</button>
              </div>
                {{data}} <br>
                    </div>  ` ,
  data() {
      return {  
              tm: true,
              ten: false,
              tno: 243,
              acclink: '33',
              data: 'L',
              dt0: "2020-10-10",
              tref: "generl Entry",
              dt_s: '',
              dt_e: '',
              cno: 30200,
              acl:'',
              b: 54 ,
              ledger22:{},
              uid:109,
              gur:'',
              accounts:'' 
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
         this.gur      = JSON.parse(localStorage.getItem('gs_user')) 
         let vacc  =  JSON.parse(localStorage.getItem('accounts'));
         this.accounts = vacc.rows
         console.log(vacc)
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
         this.tm = false
         this.ten = true
         this.data = mx.oneledg
         let v3 = this.data[0]
         this.dt0 = v3.date
         this.tref = v3.referance        
         console.log(this.data)
         return "yes"
     },
     onChange {
      conesole.log(this.cno)
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