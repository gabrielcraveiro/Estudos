<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">
      header {
        margin: 0;
        background: #666;
        height: 400px;
      }
      
      h1 {
        margin-top: 50px;
        text-align: center;
      }
    </style>
</head>
<body>
  <header>
    <h1>
      <?php 
        
        $name = $_GET['name'];
        
        echo 'Hello $name';
        
      ?>
    </h1>
  </header>
</body>
</html>