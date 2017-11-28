<template>
  <div class="container header-main">  
    <div class="row">
      <div class="col-sm-3">
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/frontier-logo.png" alt="Frontier">
        </a>
      </div>    
      <div class="col-sm-5">
        <ul class="nav nav-justified nav-shop">
          <li><a href="#">Shop</a></li>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>    
      <div class="col-sm-4">
        <div class="input-group" >
          <input type="text" class="form-control" placeholder="Search Frontier...">
          <span class="input-group-addon" aria-hidden="true">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>        
        </div>
      </div>
    </div>  
    
  </div>  
</template>

<style lang="scss" scoped>

.header-main {
    border-bottom: 1px solid #CECECE;
    padding-bottom: 15px;
}
  .navbar-brand {
    float: left;
    padding: 0 15px;
    img {      
      position: relative;
      top: -5px;
      width: auto;
    }
  }
  .nav-shop {
    li {
      a {
        border-bottom: none;
        border: none;
        border-radius: 5px;
        color: #333;
        font-family: "nexa bold", inherit;
        font-size: 22px;
        font-weight: normal;
        line-height: 45px;        
        margin: 0 5px -2px;
        padding: 0 10px 0 0px;        
      }
    }    
  }
  .input-group-addon {
    background-color: #ac0916;
    border: 1px #8c0d04 solid;       
    border-left: none;
    border-radius: 0px 5px 5px 0px;
    color: white;
  }

</style>
