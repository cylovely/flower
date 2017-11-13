<?php
	header("Content-Type:application/json;charset=utf-8");
	$conn=mysqli_connect("127.0.0.1","root","","flower",3306);
	mysqli_query($conn,"set names utf8");
	$sql="select * from flowerlist";
	$result=mysqli_query($conn,$sql);
	$rowList=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($rowList);
?>