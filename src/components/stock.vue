<template>
<div class="main1">
  <div class="stock">
      <div class="bg-img2">
        <div class="pos1">
        <div class="pos2">
         <div class="heading1" >
           <img src="/static/tick.svg" alt="logo" class="src1">
          <p class="left">TICKER</p>
          </div>
         <div > <router-link :to="{name: 'news'}" class="newlink"><p >NEWS</p></router-link></div>           
        </div> 
        
                                               <div class="serachbox">
                                                 
                      <input type="text"  id="ser" class="serch" name="search" placeholder="     Enter The Stock Symbol" v-model="search">
                      <button type="submit" class="bttn btn-primary btn-responsive" id="bt" name="button" @click.prevent="callFunction">Search</button>
                      </div>
            <div class="container">

              <div class="card border-dark mb-3" id="crd">
                  

                  <div class="card-body l">
                  
                      <h5 class="card-body">COMPANY SYMBOL   :   {{this.search.toUpperCase()}} </h5>
                      <hr >
                      <h5 class="card-body">CURRENT PRICE   :   {{post.c}} </h5>
                      <hr >
                      <h5 class="card-body">HIGHEST PRICE   :   {{post.l}} </h5><hr >
                      <h5 class="card-body">OPENING PRICE   :   {{post.o}} </h5><hr >
                      <h5 class="card-body">PREVIOUS CLOSE PRICE   :   {{post.pc}} </h5><hr >
                      <h5 class="card-body">TIMESTAMP OF CURRENT DAILY BAR   :   {{post.t}} </h5><hr >
              

                  </div>
              </div>
            </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: 'stock',
  data () {
    return {
      post: [],
      search: ""
    
    }
  },
  mounted(){
        
        var input = document.getElementById("ser");
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("bt").click();
        }
        });
  },
  methods: {
    callFunction: function () {
    
      
      this.search=this.search.toUpperCase();
      axios.get(`https://finnhub.io/api/v1/quote?symbol=${this.search}&token=bqalujvrh5r8t7qnamb0`)
      .then(response => {
      console.log(response.data)
      console.log(this.search)
      this.post = response.data
      this.$forceUpdate()
    }).catch(err => {
      console.log(err)
    })
    
  }
    }
}

</script>

<style scoped>
.main1{
  background-color: #0a192f;
  min-height: 100vh;
}
    .bg-img2{
    
    background-position: cover;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: max-content;
    width: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover
  }
.btn1:hover{
  background-color: rgb(3, 16, 88);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
  .hi{
      margin-top: 70px;
  }
  .card{
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      color: #0a192f;
      width: 75%;
      border:groove #06f8c0!important;
      background-color: #ccd6f6;
  }



  .bttn{
     border: groove #06f8c0;
     border-radius: 100px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      background-color: grey;
      color: white;
      height: 50px;
      width: 100px;

        font-size: 25px;
color: #06f8c0;
background-color: #0a192f
  }
  .bi{
    font-style: italic;
    margin-top: 70px;
    color: white;
  }
  .pos2{
    background-color: #0a192f;
    width: 100%;
    height: 70px; 
    position: sticky;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    top: 0px;

  }
  .newlink{
    text-decoration: none;
    float: right;
    color: #06f8c0;
    padding: 30px;
    font-size: 25px;
    margin-top: -110px!important;

  }
 .newlink:hover{
   color: #4e8d7e;
   }
  .left{
      float: left!important;
      color: #06f8c0;
    
    font-size: 25px;
  }
  .heading1{
    display: flex;
    padding: 30px;
  }
.src1{
  width: 50px;
  height: 30px;

}
.serachbox{
  display: flex;
  justify-content: center;
  margin-top: 60px;
  
}
#ser{
  border: groove #06f8c0;
  border-radius: 100px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  font-size: 25px;
  color: #64ffda;
  width: 60%;
  
  
    
  }
  .pos1{
    background-color: #0a192f;
  }
  
  @media only screen and(max-width:600px){
    .card{
      width: 95%;
    }
    .bi{
      font-size: 60px;
    }

  }
</style>