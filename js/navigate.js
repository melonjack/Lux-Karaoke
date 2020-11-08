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
                        { title:'Home', ul:'http://www.luxkaraokeshop.com',sub:[{name:'Amperifier', url:'#/Amperifier'} ,
                                                     {name:'Microphone', url:'#/Microphone'} ,
                                                     {name:'Speaker', url:'#/Speaker'}
                                                         ]},
                        { title:'Product', ul:'./product/?a=1&b=3&ptc=m2-m3', sub:[{name:'Product List', url:'#/productlist'},{name:'Catalog', url:'#/catalog'}   ]} ,
                        { title:'Login', ul:'#/login',sub:[{name:'Register', url:'#/register'} ,{name:'Log in ', url:'./pre_index.php'}]} 
                      ]  ,
          title: 'Check me' 
               }
    }
  })