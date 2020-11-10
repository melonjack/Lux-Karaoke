/*******************************************************************************************************************/
/***********                                        New a Vue #App         Sept 27 , 2020                    *******/
/*******************************************************************************************************************/
var app = new Vue({
  el: '#app' ,
  data: {
      message: 'Hello New app Vue !!' ,
      currentView:'listitem',
      logn:true,
      jssn:'',
      amp:'',
      a: 0.123  ,
      ab:'',
      chechedItem: [] 
    } ,
    mounted: function(){
      const options = {}
      this.getApi(options)
    console.log("First")
    console.log(this.currentView)
    },
  methods:{
    getApi:function (options) {
      fetch('./test/jsn.json').then((response) => response.text()).then((data) => {
                     this.jssn  = JSON.parse(data) ;
                      console.log(this.jssn) ;
             }).catch((err) => {console.log(err); });
        return "OK"               
      },
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