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
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<?php include("css.php"); ?>
<link rel="stylesheet" href="css/stock.css">
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/shopping_cart.css">
<body>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <!-- Navigation -->
  <!-- //Navigation -->
  <!-- header -->
      <?php include("Menu.php"); ?>
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
          <?php
          $i=0;
          while ( $i<count($allType) )
          {
            $icon=$iconList[$i];
            $type=$allType[$i];
            $categoryName=$allType[$i];
            include('CategoryIcon.php');
            $i++;
          }
          ?>
        </div>
      </div>

    </div>

    <?php
    include("below.php");
    ?>
  </div>
</body>
</html>
