/*******************************************************************************************************************/
/***********                                        New a Vue #App         Sept 27 , 2020                    *******/
/*******************************************************************************************************************/
var app = new Vue({
  el: '#app' ,
  data: {
      message: 'Hello New app Vue !!' ,
      currentView:'Catalog',
      logn:true,
      jsdd:'',
      amp:'',
      a: 0.123  ,
      ab:'',
      chechedItem: [] 
    } ,
    mounted: function(){
    console.log("First")
    console.log(this.currentView)
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