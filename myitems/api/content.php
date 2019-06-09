<?php
echo "---------------";
header("Content-Type:text/xml;charset=UTF-8");
$data = array(
    "topImg"=>array(
        "left"=>"../images/main-00.gif",
        "center"=>"../images/main-02.jpg",
        "right"=>"../images/main-01.jpg"
    ),
    "0"=>array(
        "title"=>"海南小台芒1kg",
        "des"=>"29.8",
        "udes"=>"36.8",
        "src"=>"../images/images/main-01.jpg"
    ),
    "1"=>array(
        "title"=>"海南精选荔枝1kg",
        "des"=>"39.8",
        "udes"=>"46.8",
        "src"=>"../images/images/m-02.jpg"
    ),
    "2"=>array(
        "title"=>"台湾水仙芒2kg",
        "des"=>"51.8",
        "udes"=>"58",
        "src"=>"../images/images/m-03.jpg"
    ),
    "3"=>array(
        "title"=>"澳芒7kg",
        "des"=>"468",
        "udes"=>"689",
        "src"=>"../images/images/m-04.jpg"
    ),
    "4"=>array(
        "title"=>"北京空运早春水蜜桃4个装",
        "des"=>"46.8",
        "udes"=>"59",
        "src"=>"../images/images/m-06.jpg"
    ),
    "5"=>array(
        "title"=>"北京空运水蜜桃8个装",
        "des"=>"79.8",
        "udes"=>"88",
        "src"=>"../images/images/m-06.jpg"
    ),
    "6"=>array(
        "title"=>"泰国山竹1kg",
        "des"=>"42.8",
        "udes"=>"48",
        "src"=>"../images/images/m-07.jpg"
    ),
    "7"=>array(
        "title"=>"泰国山竹2.5kg",
        "des"=>"98",
        "udes"=>"128",
        "src"=>"../images/images/m-07.jpg"
    ),
    "8"=>array(
        "title"=>"泰国金枕头榴莲4-5斤",
        "des"=>"178",
        "udes"=>"198",
        "src"=>"../images/images/m-08.jpg"
    ),
    "9"=>array(
        "title"=>"泰国金枕榴莲5-7斤",
        "des"=>"218",
        "udes"=>"238",
        "src"=>"../images/images/m-08.jpg"
    ),
    "10"=>array(
        "title"=>"海南西州蜜瓜4kg",
        "des"=>"78.9",
        "udes"=>"88",
        "src"=>"../images/images/m-09.jpg"
    ), 
    "11"=>array(
        "title"=>"甘美西瓜1个装（6.5-... ",
        "des"=>"59.8",
        "udes"=>"66.8",
        "src"=>"../images/images/m-10.jpg"
    ),
);

echo json_encode($data);




?>