<!DOCTYPE html>
<html>
<head>
    <meta charset=utf-8>
    <title>Php İle Çarpım Tablosu</title>
</head>
<body>


    <table border="4" width="700" cellspacing="5" cellpadding="10">
        <tbody>

          <th align="center" colspan='5'> <b><center><font color=" #FF0000">ÇARPIM TABLOSU<? echo "sa"; ?></font></center></th>   </b>
      </tr>

      <tr>

        <?php

        for ($i=1; $i<=10;$i++)
        {
            echo '<td>';
            for ($j=1; $j<=10;$j++)
            {
                echo $i.' x '.$j.' = '. $i*$j.'<br />';
            }
            echo '</td>';
            if($i%5==0) echo '</tr> <tr>';
        }

        ?>
    </tr>
</tbody>
</table>
</body>
</html>