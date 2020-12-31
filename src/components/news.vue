<template>
<div class="main">
  <div class="news">
    
        <div class="pos3">
         <div class="heading2" >
           <img src="/static/tick.svg" alt="logo" class="src2">
          <p class="left1">TICKER</p>
          </div>
         <div > <router-link :to="{name: 'stock'}" class="stlink"><p >STOCK</p></router-link></div>           
        </div> 
        
        <div class="bg-img4">
        
       <div class="nb" id="nb">
         
         <h1>FOR BUSINESS NEWS...</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" id="news" class="brtn btn-primary btn-responsive" align="center" @click.prevent="callFunction">PRESS HERE <br></button>
       </div>

         
        
    <div v-for="(i,index) in news" :key="index">
        <div class="card border-dark">
            <div class="card-header">
                <h2><b>{{i.title}}</b></h2><br>
            </div>
            <div class="card-body">
                <h4 class="card-text"><b>{{i.description}}</b></h4><br>
                <h4 class="card-title">{{i.content}}</h4>
                <a :href="i.url">{{i.url}}</a>
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
  name: 'news',
  data () {
    return {
      news: []
    
    }
  },

  methods: {
    callFunction: function () {
      
      axios.post(`http://ticker0.herokuapp.com/news/`)
      .then(res=>{this.news=res.data.articles}
        
      )
    document.getElementById("nb").style.display="none"


    }}
}

</script>

<style scoped>
.main{
  background-color: #0a192f;
  min-height: 100vh;
}
    .card{
        margin: 100px auto 100px auto;
        border: solid  #06f8c0;;
        border-radius: 40px;
        max-width: 95%;
    }
    .card:hover{

  box-shadow: 0 8px 16px 0 rgb(133, 131, 131);
    }
    .bg-img4{
    width: 100%;
   
    background-color: #0a192f;

  }

 
  .brtn{
     
      padding-bottom: 0px;
      background-color:  #0a192f;
      border-radius: 20px;
      border: solid #06f8c0;
      color:  #06f8c0;
      font-size: 30px;
      cursor: pointer;
      
  }
  .brtn:hover{
      
      background-color:  #10233f;
      color:  #49ecc6;
      
  }
  .new{
      font-style: italic;
      margin-top: 100px;
      text-align: center;
      color: white;
  }
  .pos{
    background-color: #0a192f;
    width: 100%;
    height: 100px;  
  }
  .stlink{
    text-decoration: none;
    float: right;
    color: #06f8c0;
    padding: 30px;
    font-size: 25px;
    margin-top: -110px!important;

  }
 .stlink:hover{
   color: #4e8d7e;
   }
  .src2{
  width: 50px;
  height: 30px;

}
  .heading2{
    display: flex;
    padding: 30px;
  }
    .left1{
      float: left!important;
      color: #06f8c0;
    
    font-size: 25px;
  }
  .pos3{
    background-color: #0a192f;
    width: 100%;
    height: 70px; 
    position: sticky;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    top: 0px;
    z-index: 1;

  }
  .card-header{
    background-color: #0e2b55;
    color: #06f8c0 ;
    border: solid #06f8c0 ;
   
  }
    .card-body{
      border: solid #06f8c0 ;
      
  }
  .nb{
    display: flex;
    justify-content: center;
    margin-top: 200px;
    border: solid #06f8c0;
   padding-top: 100px;
   padding-bottom: 100px;
   width: 60%;
   margin: auto;
   margin-top: 200px;
      }
  h1{
    color:#06f8c0 ;
    font-weight: bold;
    }
  @media only screen and(max-width:650px){
    .btn{
      width: 95%;
    }

      #nb{
    display: flex;
    justify-content: center;
    margin-top: 200px;
    border: solid #06f8c0;
   padding-top: 100px;
   padding-bottom: 100px;
   width: 500px;
   margin: auto;
   margin-top: 200px;
      }
    .brtn{
      width: 90%!important;
      padding-bottom: 50px;
      background-color:  #0a192f;
      border-radius: 20px;
      border: solid #06f8c0;
      color:  #06f8c0;
      font-size: 30px;
  }
  .brtn:hover{
      
      background-color:  #10233f;
      color:  #49ecc6;
    }

  }
</style>