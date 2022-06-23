const app = Vue.createApp({

   
   data() {
    return {
    url:'http://www.thenetninja.co.uk',
    showBooks : true ,  
    books :[
      {title:'name of the wind' ,author:'patrick rothfuss', img:'assets/img-1.jpg', isFav: true },
      {title:'name of the wind' , author:'patrick rothfuss', img:'assets/img-2.jpg', isFav: false },
      {title:'name of the wind' , author:'patrick rothfuss', img:'assets/img-3.jpg', isFav: true },
    ]
   }
  },
  methods: {
    toogleshowbooks() {
  
      this.showBooks = !this.showBooks
    },
     toogleFav(book){
    book.isFav = !book.isFav
     }
  },
  computed: {
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  }
 
})



app.mount('#app')
