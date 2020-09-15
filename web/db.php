<?php if (!isset($_SESSION)){session_start();} ?>
<?php
function GetDVDByCategory($category)
{
  include 'Connect.php';
  $sql="select * from dvd where Category='$category'";
  $result=  $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i]=$rows;
    $i++;
   }
   return $list_arr;
 }

 function GetAllDVD()
 {
   include 'Connect.php';
   $sql="select * from dvd";
   $result=  $conn->query($sql);
   $i=0;
   $list_arr=array();
   while($rows= mysqli_fetch_array($result)){
     $list_arr[$i]=$rows;
     $i++;
    }
    return $list_arr;
  }

 function GetName($category)
 {
   include 'Connect.php';
   $sql="select * from dvd where Category='$category'";
   $result=  $conn->query($sql);
   $i=0;
   $list_arr=array();
   while($rows= mysqli_fetch_array($result)){
     $list_arr[$i] = $rows['Name'];
     $i++;
    }
    return $list_arr;
  }

  function GetDvdInformation($id)
  {
    include 'Connect.php';
    $sql="select * from dvd where Id='$id'";
    $result=  $conn->query($sql);
    $list_arr=array();
    while($rows= mysqli_fetch_array($result)){
      $list_arr = $rows;
     }
    return $list_arr;
  }

  function InsertMember($id,$Name,$Email,$tel,$Birthday,$IDNumber,$Password,$Sex,$status)
  {
    include 'Connect.php';
    $sql ="INSERT INTO member(Id,Name,Password,Email,Phone,Sex,Birthday,Address,Status)  VALUES ('$id','$Name','$Password','$Email','$tel','$Sex','$Birthday','$IDNumber','$status')";
    $r = $conn->query($sql);
  }

  function FindMax($table)
  {
    include 'Connect.php';
    $sql = "SELECT MAX(Id) FROM ".$table;
    $result=  $conn->query($sql);
    $list_arr=array();
    while($rows= mysqli_fetch_array($result)){
      $list_arr = $rows;
     }
    return $list_arr[0];
  }

  function GetComment($DVD_ID)
  {
    include 'Connect.php';
    $sql="select * from comment where DVD_Id='$DVD_ID'";
    $result=  $conn->query($sql);
    $list_arr=array();
    $i=0;
    while($rows= mysqli_fetch_array($result)){
      $list_arr[$i] = $rows;
      $i++;
     }
    return $list_arr;
  }

  function AddComment($dvd_id,$text)
  {
    include 'Connect.php';
    $member_id=GetSession();
    $Date_Time = date("Y-m-d");
    echo $dvd_id.$text;
    $sql="Insert into comment (DVD_Id,Member_Id,Score,Comment_Text,Date_Time) Value('$dvd_id','$member_id','5','$text','$Date_Time')";
    $result=  $conn->query($sql);
  }

  function GetSession()
  {
    if(isset($_SESSION['Id']))
    {
      return $_SESSION['Id'];
    }
    else
    {
      return -1;
    }
  }

function HaveSameEmail($email)
{
}

function FindMember($account,$password)
{
  include 'Connect.php';
  $sql = "SELECT Id FROM member where Email='$account' and Password='$password'";
  $result=  $conn->query($sql);
  $list_arr=array();
  if(!$result)
	{
		echo ("Error: ".mysqli_error($conn));
		exit();
	}
  while($rows= mysqli_fetch_array($result)){
    $list_arr = $rows;
   }
 if(!empty($list_arr))
    return $list_arr[0];
else
    return -1;
return -2;
}

function FindShoppingCart($member_Id)
{
  include 'Connect.php';
  $sql = "Select * from dvd , shopping_cart as s where s.Member_Id='$member_Id' and Id=s.DVD_Id";
  $result=  $conn->query($sql);
  $list_arr=array();
  if(!$result)
	{
		echo ("Error: ".mysqli_error($conn));
		exit();
	}
  $i=0;
  while($rows = mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
 //if(!empty($list_arr))
    return $list_arr;
//else
  //  return 0;
}

function DeleteGoodsInCart($id)
{
    include 'Connect.php';
    $member_Id=GetSession();
    $sql = "delete from shopping_cart where Member_Id='$member_Id' and DVD_ID='$id'";
    $result=  $conn->query($sql);
}

function AddToCart($id)
{
  include 'Connect.php';
  $member_id=GetSession();
  $quantity=1;
  $sql = "Insert into shopping_cart(Member_Id,DVD_Id,Quantity) Value('$member_id','$id','$quantity')";
  $result=  $conn->query($sql);
}

function AddStroage($member_id,$DVD_id,$quantity,$cost)
{
  include 'Connect.php';
  $Date_Time = date("Y-m-d");
  $sql = "Insert into stroge_list(Member_Id,DVD_Id,Quantity,Cost,Date_Time) Value('$member_id','$DVD_id','$quantity','$cost','$Date_Time')";
  $result=  $conn->query($sql);
}

function InsertDVD($name,$picture,$publisher,$introduction,$category,$date,$level,$time,$actor,$price,$quantity)
{
  include 'Connect.php';
  $id = FindMax('dvd') + 1;
  $sql = "Insert into dvd(Id,Name,Picture,Publisher,Introduction,Category,Publish_Date,Level,Time,Actor,Price) Value('$id','$name','$picture','$publisher','$introduction','$category','$date','$level','$time','$actor','$price')";
  $result=  $conn->query($sql);
  $Date_Time = date("Y-m-d");
  $A=1;
  $sql = "Insert into stroge_list(Member_Id,DVD_Id,Quantity,Cost,Date_Time) Value('$A','$id','$quantity','$price','$Date_Time')";
  $result=  $conn->query($sql);
}

function GetStroge()
{
  include 'Connect.php';
  $sql="select * from stroge_list";
  $result=  $conn->query($sql);
  $list_arr=array();
  $i=0;
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return $list_arr;
}

function SearchDVDByName($name)
{
  include 'Connect.php';
  $sql="select Id from dvd where Name='$name'";
  $result=  $conn->query($sql);
  $list_arr=array();
  $i=0;
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
   }
   if(!empty($list_arr))
      return $list_arr[0]['Id'];
   return "-1";
}

function GetOrderListById($id)
{
  include 'Connect.php';
  $sql="select * from order_list where Member_Id='$id'";
  $result=  $conn->query($sql);
  $list_arr=array();
  $i=0;
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return  $list_arr;
}
function GetCartByID($id)
{
  include 'Connect.php';
  $sql="select * from shopping_cart where Member_Id=".$id;
  $result=  $conn->query($sql);
  $list_arr=array();
  $i=0;
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return  $list_arr;
}
function GetOrderList()
{
  include 'Connect.php';
  $sql="select * from order_list";
  $result=  $conn->query($sql);
  $list_arr=array();
  $i=0;
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return  $list_arr;
}

function GetDVDByOrderId($id)
{
  include 'Connect.php';
  $sql="select * from order_list_dvd where order_list_id='$id'";
  $result=  $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return  $list_arr;
}

function GetStatus()
{
  include 'Connect.php';
  $id=GetSession();
  $sql="select status from member where Id='$id'";
  $result=  $conn->query($sql);
  $i=0;
  $status=-1;
  while($rows= mysqli_fetch_array($result)){
    $status = $rows['status'];
   }
  return $status;
}


function GetMember($id)
{
  include 'Connect.php';
  $sql="select * from member where Id='$id'";
  $result = $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return  $list_arr[0];
}

function GetStrogeByDVD($dvd_id)
{
  include 'Connect.php';
  $sql="select * from stroge_list where DVD_Id='$dvd_id'";
  $result = $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows= mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
   }
  return  $list_arr[0];
}

function UpdateState($state,$id)
{
  include 'Connect.php';
  $sql="UPDATE order_list SET State='$state' where Id='$id'";
  $result = $conn->query($sql);
}
$boo = 0;
function comparison($code,$totalPrice)
{

  $correct=0;
  if ($code == "dvdshop") {
    if($totalPrice>=1000) {
      $correct=300;
    }
  }
  return $correct;
}


function GetOrderByDate($first,$last)
{
  include 'Connect.php';
  $sql="select DVD.DVD_Id as id,count(DVD.DVD_Id) as Count from order_list as O ,order_list_dvd as DVD where O.Date_Time<='$last' and O.Date_Time>='$first' and O.Id=DVD.order_list_Id GROUP BY DVD.DVD_Id;";
  $result = $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows = mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
  }
  return  $list_arr;
}

function GetCustomerAccount()
{
  include 'Connect.php';
  $sql="select * from member where status=0";
  $result = $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows = mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
  }
  return  $list_arr;
}

function GetManagerAccount()
{
  include 'Connect.php';
  $sql="select * from member where status=1";
  $result = $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows = mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
  }
  return  $list_arr;
}

function GetAccountById($id)
{
  include 'Connect.php';
  $sql="select * from member where Id='$id'";
  $result = $conn->query($sql);
  $i=0;
  $list_arr=array();
  while($rows = mysqli_fetch_array($result)){
    $list_arr[$i] = $rows;
    $i++;
  }
  return  $list_arr;
}
function UpdateAccount($id,$Name,$Email,$tel,$Birthday,$IDNumber,$Password)
{
  include 'Connect.php';
  //$sql="UPDATE member SET Name='$Name',Password='$Password',Eamil='$Email',Phone='$tel',Birthday='$Birthday',Address='$IDNumber' where Id='$id'";
  $sql="UPDATE member SET Name='$Name',Password='$Password',Email='$Email',Phone='$tel',Birthday='$Birthday',Address='$IDNumber' where Id='$id'";
  $result = $conn->query($sql);
}

?>
