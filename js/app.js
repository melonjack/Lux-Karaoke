/*********************      component  gnav-bar       *********************************************************************/
Vue.component('gnav-bar', {
  props: ['nlink'] ,
  template: `<div id="gnav"><ul id="nav" > 
               <li v-for="item in links"> <a v-bind:href="item.ul">{{item.title}}</a>
               <ul >   <li v-for="lk in item.sub"> <a v-bind:href="lk.url">{{lk.name}}</a> </li>  </ul>
                </li></ul></div> `  ,
  data() {
    return { 
        checked: false, 
        links: [
                      { title:'Home', ul:'./',sub:[{name:'Book Keeping', url:'#/accounting'} ,
                                                   {name:'Income Statement', url:'#/income'} ,
                                                   {name:'Balance Sheet', url:'#/abalance'} ,
                                                   {name:'Invoice Entry', url:'#/accInvoice'}]},
                      { title:'Products', ul:'#/products', sub:[{name:'Product List', url:'#'},{name:'Pre-Order', url:'#/preOrder'},{name:'Gecon Admin 2020', url:'../me2020'} ]} ,
                      { title:'GoPHP', ul:'./src/php/getPrice.php', sub:[{name:'Price Update PERL', url:'./src/perl/two.pl'} ,
                                                                         {name:'link 3', url:'#/accInvoice/1'} ,
                                                                         {name:'link 4', url:'#/accInvoice/2'}]} ,
                      { title:'Portfolio', ul:'#/portfolio', sub:[{name:'Portfolio Total', url:'#/portfo'} ,
                                                                  {name:'Portfolio Zhou',  url:'#/portfo/1'} ,
                                                                  {name:'Portfolio Fan',   url:'#/portfo/2'} ,
                                                                  {name:'Dividend Income',  url:'#/portfo/3'} ,
                                                                  {name:'TermDep', url:'#/termdeposit'} ,{name:'Activity', url:'#/portfolio/2'}]} ,
                      { title:'Login', ul:'#/login',sub:[{name:'Register', url:'#/register'} ,{name:'Gecon Admin Beta', url:'./pre_index.php'}]} 
                    ]  ,
        title: 'Check me' 
        
    }
  }
})
/*******************************************************************************************************************/
/***********                                        New a Vue #App         Sept 27 , 2020                    *******/
/*******************************************************************************************************************/
var app = new Vue({
  el: '#app' ,
  data: {
      message: 'Hello New app Vue !!' ,
      currentView:'gnav-bar',
      logn:true,
      jsdd:'',
      amp:'',
      a: 0.123  ,
      ab:'',
      chechedItem: [] 
    } ,
  mounted: function(){
      this.message =  this.getCookie("username")
      if(this.message == "user618") {
          this.logn = false
      this.currentView = "gnav-bar"    
      }
           //  console.log(this.currentView)
     },
  methods:{
      getCookie:function (cname) {
           var name = cname + "=";
           var ca = document.cookie.split(';');
           for(var i = 0; i < ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0) == ' ') {
            c = c.substring(1);
             }
          if (c.indexOf(name) == 0) {
                 return c.substring(name.length, c.length);
              }
            }
            return "";
         }    
      }  // End of methods
})
/***************************************************************************************/