<?php
header("Content-Type:text/html;charset=UTF-8");

$phone=$_REQUEST["dataAll"]["phone"];
$password=$_REQUEST["dataAll"]["password"];
$type=$_REQUEST["type"];
$res=true;

$filePath = "information.json";

      

        // 获取JSON数据

     $content=fread(fopen($filePath,"r"),filesize($filePath));
     $data=json_decode($content,true);

         
    //  var_dump($data);
            if($type=="add"){
          
                    for($n=0;$n<count($data);$n++){     
                       
                            if( $data[$n]["phone"]==$phone){
                                    // echo "204";
                                    echo "204";
                                    $res=false;
                                    // echo $phone;
                                    // var_dump($data[$n]["phone"]);
            
                            }
                    }
                  
                if($res=="true"){
                    array_push($data,$_REQUEST["dataAll"]);
                }



            }else{
              
            for($j=0;$j<count($data);$j++){
            //     var_dump($data);
            //     echo $phone+"++++++";
            // var_dump($data[$j]["phone"]);

               if( $data[$j]["phone"]==$phone){
                   if($data[$j]["password"]==$password){
                       echo "200";
                       break;
                   }else{
                       echo "202";
                       break;
                   }
               }
            }

            };
         
    
fwrite(fopen($filePath,"w"),json_encode($data,true));
// echo $inf01;


?>