*{
  padding: 0;
  margin: 0;
}
/* HEADER*/
header{
  background: #212529;
  padding: 0px 5px;
  height: 97px;
  position: relative;
  overflow: hidden;
}
.hd-div{
  display: inline-block;
}
#logo{
  height: 100%;
  font-family: 'Libre Baskerville', serif;
  color: #d9d9d9;
  padding-right: 37px;
}
#logo .cntnr{
  margin: 14px 3px;
}
#logo-name{
  display: block;
  font-size: 30px;
  letter-spacing: 6px;
}
#logo-name span, #logo-name-2 span{
  color: #e22b63;
}
#logo-name-2{
  display: block;
  font-size: 20px;
  letter-spacing: 5.5px;
}
#appointment{
  float: right;
  height: 100%;
}
#appointment .cntnr span{
  display: block;
  font-family: 'Libre Baskerville', serif;
  margin-top: 33px;
  padding: 8px 13px;
  color: #d9d9d9;
}
#apt{
  background: #e22b63;
}
#menu{
  display: none;
}
@media screen and (max-width: 405px)
and (min-width: 0){
  #menu{
    display: block;
    margin-top: 22px!important;
    font-size: 30px;
    color: #e22b63!important;
  }
  #apt{
    display: none!important;
  }
}
#links{
  width: 62%;
  height: 100%;
  position: absolute;
  font-family: 'Libre Baskerville', serif;
}
@media screen and (max-width: 853px)
and (min-width: 0){
  #links{
    display: none;
  }
}
#links ul{
  display: inline-block;
  list-style: none;
  height: 100%;
}
#links li{
  height: 100%;
  display: inline-block;
  overflow: hidden;
  color: #d9d9d9;
  padding: 0 10px;
}
#active-link{
  background: #e22b63;
}
#links ul li .cntnr{
  margin: 40px 4px;
}
#contact{
  display: inline-block;
  right: 0;
  position: absolute;
  width: 200px;
  text-align: center;
  top: 33px;
  padding: 7px;
  border:1px solid #e22b63;
  color: #d9d9d9;

}
@media screen and (max-width: 1082px)
and (min-width: 0){
  #contact{
    display: none;
  }
}
.menu-items{
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  background: rgba(0,0,0,0.9);
  height: 100%;
  font-family: 'Libre Baskerville', serif;
  z-index: 999;
}
@media screen and (max-width: 780px)
and (min-width: 0){
  .menu-items{
    width: 80%;
  }
}
@media screen and (max-width: 506px)
and (min-width: 0){
  .menu-items{
    width: 90%;
  }
}
.center{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.menu-items ul{
  width: 95%;
}
.menu-items ul li{
  color: #fff;
  list-style: none;
  margin: 15px 0;
  text-align: center;
}
.appointment span{
  display: block;
  background: #e22b63;
  color: #fff;
  padding: 8px;
  text-align: center;
}
.social{
  position: absolute;
  bottom: 5px;
  text-align:center;
  width: 100%;
}
.social a{
  color: #e22b63;
  margin-left: 2%;
}
#x-menu{
  color: silver;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 25px;
  margin: 8px;
}
/* //HEADER */

/* X-COL */

.x-col{
  position: relative;
  height: 480px;
  width: 100%;
  background-size: cover!important;
  padding: 8px 0;
  font-family: 'Lato', sans-serif;
}
.x-content{
  background: rgba(33, 37, 41, 0.8);
  border: 1px solid #e22b63;
  color: #d9d9d9;
  width: 450px;
}
@media screen and (max-width: 472px)
and (min-width: 0){
  .x-content{
    width: 95%;
  }
}
.x-content hr{
  width: 40px;
  border-color: #e22b63;
}
.x-content .content{
  padding: 45px 37px;
}
.x-content h3{
  font-size: 30px;
  font-weight: lighter;
}
.x-content p{
  padding: 15px 0;
}
.x-content a{
  color: #d9d9d9;
  background: #e22b63;
  padding: 10px 5px;
  width: 100px;
  font-size: 12px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
}
/* //X-COL */

/* XX-COL */
.xx-col{
  padding: 50px 0;
  overflow: hidden;
}
.xx-col h3{
  padding: 8px;
  color: #e22b63;
}
.xx-col hr{
  width: 30px;
  margin-left: 8px;
}
.p-col{
  overflow: hidden;
  width: 100%;
  margin-top: 30px;
}
.p-col-inns{
  float: left;
  width: 50%;
}
@media screen and (max-width: 750px)
and (min-width: 0px){
  .p-col-inns{
    width: 100%;
  }
  .product{
    width: 49%!important;
    margin-top: 50px;
  }
}
@media screen and (max-width: 500px)
and (min-width: 0px){
  .p-col-inns{
    width: 100%;
  }
  .product{
    width: 100%!important;
    margin-top: 30px;
  }
}
.product{
  width: 49%;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  background: #fff;
  position: relative;
}
.prod-left{
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 5px;
  cursor: pointer;
}
.prod-right{
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 5px;
  cursor: pointer;
}
.product img{
  width: 100%;
  cursor: pointer;
}
.prod-info{
  font-family: 'Libre Baskerville', serif;
}
.prod-visuals .hair-1{
  height: 20px;
  width: 20px;
}
.prod-visuals span{
  display: inline-block;
  height: 15px;
  width: 15px;
  background: #e22b63;
}
.prod-name{
  font-size: 95%;
  text-transform: capitalize;
}
.prod-price{
  color: #e22b63;
  font-size: 120%;
}
.enlarge{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 888;
  background: rgba(0,0,0,0.8);
  top: 0;
}
.enlarge i{
  position: fixed;
  top: 0;
  right: 0;
  font-size: 25px;
  color: red;
  z-index: 888;
}
.enlarge .cntnr{
  border: 1px solid red;
  height: 95%;
  width: 95%;
  margin: auto;
  margin: 1% 2%;
  position: relative;
  overflow: hidden;
}
.enlarge .cntnr img{
  width: 100%;
}
.payment{
  background: rgba(255,255,255,0.9);
  position: absolute;
  bottom: 0;
  width: 100%;
  font-family: 'Libre Baskerville', serif;
}
.payment a{
  text-align: center;
  margin: auto;
  display: block;
  padding: 8px;
  background: #d9d9d9;
  margin-top: 8px;
}
.info h3{
  text-align: center;
}
.info hr{
  width: 30px;
  margin: auto;
}
.info p{
  text-align: center;
  margin-top: 5px;
}
 .prod-name{
  cursor: pointer;
}
 .prod-name:hover{
  text-decoration: underline;
}
.about-hair{
  font-size: 80%;
  margin-top: 8px;
  display: block;
  text-align: center;
}
.enlarge{
  display: none;
}
.enlarge button{
  background: #e22b63;
  color: #fff;
  border: none;
}
.enlarge form{
  display: none;
}
.enlarge form .form-group{
  padding: 5px;
}
.form-group label{
  display: block;
  font-size: 90%;
  color: #e22b63;
  font-weight: bold;
  letter-spacing: 2px;
  color: grey;
}
.form-group input{
  text-align: center;
  width: 45%;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(0,0,0,0.5);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  padding: 5px;
  outline: none;
  margin-top: 20px;

}
.email-input{
  width: 95%!important;
  margin-top: 8px!important;
  display: block;
  text-align: left!important;
}
.tel-input{
  width: 95%!important;
  display: block!important;
}
.enlarge select{
  display: block;
  margin: auto;
  margin: 25px auto;
  padding: 8px;
  background: transparent;
  border: 2px solid #000;
  outline: none;
}
.enlarge option{
  background: rgba(255,255,255,0.5)!important;
  text-align: center;
  color: #e22b63;
  outline: none;
  border: none;
  background: transparent;
}
.enlarge form button{
  width: 100px;
  display: block;
  margin: auto;
  padding: 8px;
}
/* //XX-COL */
.booking .form-group{
  margin-top: 15px;
}
.booking input{
  margin-top: 0;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  text-align: left;
  color: #d9d9d9;
  padding: 8px 5px;
  margin-top: 8px;
}
.rt{
  margin-left: 8px;
}
.booking textarea{
  background: transparent;
  width: 95%;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  padding: 8px;
  color: #d9d9d9;
}
.booking button{
  background: #e22b63;
  border: none;
  padding: 15px;
  margin-top: 5px;
  color: #d9d9d9;
  letter-spacing: 2px;
}
footer{
  background: #212529;
}
.ft-lft{
  padding: 10px 4%;
}
.ft-lft p{
  color: #d9d9d9;
}
