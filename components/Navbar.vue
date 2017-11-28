<template>
  <header>
    <nav class="navbar navbar-static-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nbFrontier" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="nbFrontier">
          <ul class="nav navbar-nav nav-left">
            <li class="active"><a href="#">Residential <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Business</a></li> 
            <li><a href="#">Wholesale</a></li>             
          </ul>
          
          <ul class="nav navbar-nav navbar-right"> 
            <li class="location">
              <a href="#"><i class="fa fa-map-marker green fa-lg"></i> Norwalk CT (change) <b class="caret"></b></a>                        
            </li>          
            <li class="lang-selector">
              <a href="#"><i class="fa fa-globe fa-lg"></i> Español</a>
            </li>            
            <li class="signin hidden-xs">
              <a href="#"><i class="fa fa-lg fa-user"></i> Sign In <b class="caret"></b></a>                        
            </li>
          </ul>            
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <logo></logo>
  </header>     
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  $white: #FFF;  
  $gray: #666;
  
  .navbar {
    min-height:32px !important;
    border: none;
  } 
  
  .navbar-inverse {    
    li {
      a {
        color: $white;
        font-size: 11px; 
        line-height: 1.42857;     
        margin-right: 2px;         
        padding: 10px 10px 7px;     
      }
    }
    
    .nav-left {
      li {
        a {
          background-color: #666;          
          color: $white;
          font-size: 11px; 
          line-height: 1.42857;
          margin-right: 2px;
          padding: 12px 25px 7px;
        }
        
        &.active {
          a {
            background-color: $white;            
            color: $gray;
          }
        }
      }
    }    
  }  
  
  
</style>
  

