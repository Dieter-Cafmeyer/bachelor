<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="author" content="Dieter Cafmeyer | Gilles De Muynck"/>
    <meta name="description" content="">
    <meta name="keywords" content="fertility awareness campaign">
    <meta http-equiv="content-language" content="NL" />
    <meta name="linkage" content="http://tpattractions.com" />
    <meta name="MSThemeCompatible" content="no" />
    <meta name="revisit-after" content="1 days" />

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vervaldatum</title>

    <link href="css/style.css" rel="stylesheet">


    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC:700" rel="stylesheet">
  </head>

  <body>

    <header class="navigation">
      <div class="innernavigation">
        <a href="/index.php?page=home"><h1 class="logo"><span>Logo</span></h1></a>

        <nav>
          <ul>
            <a href="/index.php?page=home"><li class="mainlink verval nav_active">Vervaldatum? <div></div></li></a>
            <a href="/index.php?page=home#quizclip" class="qza"><li class="mainlink qz">Quiz <div></div></li></a>
            <a href="/index.php?page=diepgaand"><li class="mainlink diep">Diepgaand <div></div></li></a>
            <a target='blank' href="https://www.vives.be/nl"><li class="mainlink ovons">Over Ons <div></div></li></a>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <?php echo $content; ?>
    </main>

    <div class="waves2">
      <img src="../../assets/images/wave2.png" alt="">
    </div>

    <footer>
      <h1>In samenwerking met:</h1>

      <div class="sponsors">
        <a href="https://www.zorg-en-gezondheid.be/" target='blank'>
          <img src="../../assets/images/sponsors/1.png" alt="">
        </a>
        <a href="https://www.kindengezin.be/" target='blank'>
          <img src="../../assets/images/sponsors/2.png" alt="">
        </a>
        <a href="https://www.vvog.be/" target='blank'>
          <img src="../../assets/images/sponsors/3.png" alt="">
        </a>
        <a href="https://www.sensoa.be/" target='blank'>
          <img src="../../assets/images/sponsors/4.png" alt="">
        </a>
        <a href="http://www.vroedvrouwen.be/" target='blank'>
          <img src="../../assets/images/sponsors/5.png" alt="">
        </a>
        <a href="http://www.vlaamsapothekersnetwerk.be/" target='blank'>
          <img src="../../assets/images/sponsors/6.png" alt="">
        </a>

      </div>

      <div class="madeby">Copyright © 2018 | Devine</div>
    </footer>


    <script src="../js/rellax.min.js"></script>
    <script src="../js/script.js"></script>
    <script>
      let rellax = new Rellax('.rellax');
    </script>
  </body>

</html>
