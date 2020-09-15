1.EachCategory.php -每個分類各自的頁面
input-<?php echo "EachCategory.php?type=".$type ?>

2.Connect.php - 連結local端db (要自己更改自己的username password host dbname)

3.CategoryIcon.php - 在index.php中，每個分類的小框框
input-$icon=icon picture								
      $type=dvd type;
      $categoryName=category icon's name;

4.db.php - mysql語法統一寫在裡面，寫成function

5.Goods.php - 每個商品顯示出來的照片 和 名稱
input-	$Name=dvd_Name;
	$URL=dvd_URL;

6.MenuStrip.php - 將左側的DVD分類選項獨立出來(每個頁面若都有左邊的種類選擇 就直接include)