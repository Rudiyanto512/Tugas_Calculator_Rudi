
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="calculator.css">
    <title>Document</title>
</head>
<body>
    <div class="calculator card">

        <input type="text" class="calculator-screen z-depth-1" value="" disabled />
      
        <div class="calculator-keys">
      
          <button type="button" class="operator btn btn-info" value="+">+</button>
          <button type="button" class="operator btn btn-info" value="-">-</button>
          <button type="button" class="operator btn btn-info" value="*">&times;</button>
          <button type="button" class="operator btn btn-info" value="/">&divide;</button>
          <button type="button" value="sin" style="background-color: #6495ED;">sin</button>

          
      
          
          <button type="button" value="7" class="btn btn-light waves-effect">7</button>
          <button type="button" value="8" class="btn btn-light waves-effect">8</button>
          <button type="button" value="9" class="btn btn-light waves-effect">9</button>
      
          <button type="button" value="cos" style="background-color: #6495ED;">cos</button>
          <button type="button" value="4" class="btn btn-light waves-effect">4</button>
          <button type="button" value="5" class="btn btn-light waves-effect">5</button>
          <button type="button" value="6" class="btn btn-light waves-effect">6</button>
      
          <button type="button" value="tan" style="background-color: #6495ED;">tan</button>
          <button type="button" value="1" class="btn btn-light waves-effect">1</button>
          <button type="button" value="2" class="btn btn-light waves-effect">2</button>
          <button type="button" value="3" class="btn btn-light waves-effect">3</button>

      
          <button type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear" style="background-color: #FF6347;">AC</button>
          <button type="button" class="decimal function btn btn-secondary" value=".">.</button>
          <button type="button" value="0" class="btn btn-light waves-effect">0</button>
          
      
          <button type="button" id="sadang" class="equal-sign operator btn btn-default" value="=" style="background-color: #FF6347;">=</button>
      
        </div>
      </div>

      <script src="calculator.js"></script>
</body>
</html>
