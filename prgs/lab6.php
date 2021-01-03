<!-- 
Name:M Rachana Shenoy
Usn:4MT17IS024
6. Write a PHP program to keep track of the number of visitors visiting the web pageand to
display this count of visitors, with proper headings. -->

<strong style="color:blue;">
<?php
$han=fopen("counter.txt","r");
if(!$han){
    echo "cant open file";
}
else{
    $c=(int)fread($han,20);
    fclose($han);
    $c++;
    echo "<p>Welcome to page</p><p align=center><strong>you are visitor no".$c."</strong></p>";
    $han=fopen("counter.txt","w");
    fwrite($han,$c);
    fclose($han);
}
?>