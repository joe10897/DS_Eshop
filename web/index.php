<?php
session_start();
if(is_array($_GET)&&count($_GET)>0)//先判断是否通过get传值了
{
  if(isset($_GET["Id"]))//是否存在"id"的参数
  {
    $_SESSION['Id']=$_GET["Id"];//存在
  }
}
include('db.php');

?>
<!DOCTYPE html>

<?php
$allType = array("horror", "drama","adventure","comedy","crime","sciencefiction","war","action");
$iconList=array("fa fa-bug","fa fa-television","fa fa-rebel","fa fa-smile-o","fa fa-lock","fa fa-flask","fa fa-shield","fa fa-motorcycle")
?>
<html lang="en">

</head>
<?php include("css.php"); ?>
<link rel="stylesheet" href="css/stock.css">
<body>
<script type="text/javascript" src="js/jquery.js"></script>
  <!--ゆっくり上げる-->
  <!--トップ上げる-->
  <script type="text/javascript" src="js/totop.min.js"></script>
  <!--ゆっくり上げる-->
  <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
  <!-- Navigation -->
  <!-- //Navigation -->
  <!-- header -->
  <div class="container">
    <div class="row agile-its-header">
      <div class="logo">
        <h1><a href="index.php"><span>NTUT  </span>DVD Store </a></h1>
      </div>
    </div>

    <div class="sliders">
    <div class="w3-content w3-display-container">
      <img class="mySlides" src="images/sale-0.png" style="width:100%">
      <img class="mySlides" src="images/sale-1.png" style="width:100%">
      <img class="mySlides" src="images/sale-2.png" style="width:100%">
      <img class="mySlides" src="images/sale-3.png" style="width:100%">

      <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
      <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
    </div>
  </div>

<script>
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
</script>

    <div class="main-content">
      <div class="w3-categories">
        <h3>Browse Categories</h3>
        <div class="container">
        </div>
      </div>
    </div>
  </div>
</body>
</html>
