<!-- 
Name:M Rachana Shenoy
Usn:4MT17IS024
7. Write a PHP program to display a digital clock which displays the current time of the server. -->

<strong style="color:green">
<?php
date_default_timezone_set('Asia/Calcutta');
header("Refresh: 1");
$d=date('yy-m-d H:i:s');
echo "SERVER TIME </br> <strong>".$d."</strong>";
?>