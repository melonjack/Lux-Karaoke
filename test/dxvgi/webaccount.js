var  Acctrans = Vue.component('Acctrans' , 
 { 
  props: ['cab','prod'] ,
  template:  ` <div class="fd310"> 
        <h5><router-link to="/webaccount"> <i class="fas fa-home"> &nbsp;&nbsp;Home</i> </router-link> </h5> 
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
                <div class="input-group ">
                    <div class="input-group-prepend">
                    <label class="input-group-text" for="inputg1"> Account No: </label>
                      </div>
                    <select class="custom-select" id="inputg1"  v-model='cno'  v-on:change="onChange" >
                    <option v-for='(val, index) in accounts' :value='val.acc_no' >{{val.acc_name}}</option>
                    </select> </div><br><br>
                    Entry Date:  <input type="date" class="form1" v-model="dt0"> Reference No:   <input type="text" class="form1" v-model="tref">
                    Customer Name:
                     <select class="form1"  v-model='uid'>
                     <option v-for='(value, key) in gur.rows' :value='value.id' >{{value.company}}</option>
                     </select> 

                    <table class="account" v-if="ten">
                    <tr><th>Account Name</th><th>Debit</th><th>Credit</th><th>Comment</th></tr>
                    <tr  v-for="(trn, index ) in data"> <td><input type="text" class="" v-model="trn.acc_nm"></td>
                    <td><input type="text" class="" v-model="trn.debit"></td><input type="text" class="" v-model="trn.credit"></td><td><input type="text" class="" v-model="trn.comment"></td>
                     </tr></table>
                    <button type="submit" class="btn btn-success" v-on:click="update">Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <button type="submit" class="btn btn-info" v-on:click="subMT">Submit</button>  &nbsp;&nbsp;&nbsp; Balance: {{b}}
              </div>
              <div class="container shadow" v-if="dup" >
               <table class="table">
               <tr><th>Date</th><th>Account No.</th><th>Debit</th><th>Credit</th><th>Reference</th><th>Comment</th><th>Customer ID</th></tr>
               <tr  v-for="(trn, index ) in data">
                <td>{{trn.date}}</dt><td>{{trn.acc_no}}</td><td>{{trn.debit}}</td><td>{{trn.credit}}</td>
                      <td>{{trn.referance}}</td><td>{{trn.comment}}</td><td>{{trn.cid}}</td>
                 </tr></table>
               </div>
               {{acl}}<br> 
               <div class="alert alert-danger" v-if="dsub" >
                   {{acl}} 
                   </div>
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
              stat1:"save to DB",
              dup: false,
              dsub: false,
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
     onChange() {
      var cc   = 0;
      var dc = 0;
      var d =  0;
      let cm = '';
      let mv = {}
      let n = this.data.length ;
      if( n > 0) {
          for (var i = 0; i < n ; i++ ) {
            cc += Number(this.data[i].credit) ;
            dc += Number(this.data[i].debit);
            cm = this.data[i].comment
          };
          d = dc + cc ;
                  if (dc > cc) {
                            mv.debit  = 0;
                            mv.credit = dc-cc } else {
                            mv.debit  = cc-dc;
                            mv.credit = 0;
                                  } 
           }
      this.b = d     
      mv.comment =  cm ;
      mv.acc_no = this.cno
      let mc = this.accounts.find(({ acc_no }) => acc_no === this.cno )
      mv.acc_nm = mc.acc_name
      console.log(cm)
       this.data.push(mv);
          console.log(this.cno)

     },
     update() {
       this.acl  = "Update"
       this.dup  = true
       this.dsub = false
       var cc    = 0;
       var dc    = 0;
       let n = this.data.length ;
      if( n > 0) {
          for (var i = 0; i < n ; i++ ) {
            this.data[i].date = this.dt0
            this.data[i].referance = this.tref
            this.data[i].cid = this.uid

               cc = Number(this.data[i].credit) ;
               dc = Number(this.data[i].debit);
               if(cc == 0 && dc == 0) {
                  this.data.splice(i, 1)
                 }
              }
          }
     },
     subMT() {
       this.acl  = "SUBMIT"
       this.dsub = true
       this.dup  = false
       let url = './src/php/db_write.php?act=new'; 
                let passdata = this.data
                axios.post(url, JSON.stringify(passdata)).then(function (response) {
                                console.log(response.data);
                              }).catch(function (error) {
                                console.log(error);
                                    });
            this.stat1 = "New Transation completed !" ;
            console.log(this.stat1) ;
     },
    loadarow(lno) {
         let url = 'http://www.gecontech.com/magento/mgc20/src/php/api_db_2020.php?action=onetrans&tt_no=' + lno
         axios.get(url).then(function(response) {
                  app.jsdd = response.data ;    }) .catch(function(error){ console.log(error) ;  }) ;   
    } 
    }
}) 
/****************************************************************************************************************/
/*******************************************************************************************************************/