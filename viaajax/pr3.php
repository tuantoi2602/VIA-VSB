<?php
	// zde by se mely nacitat kontakty z databaze,
	// pro jednoduchost budeme misto  databaze pouzivat pole
	$names = array ("Lee Babin","Joe Smith","John Doe", "Lara Croft", "Pepa Novak");
	$foundarr = array ();
	
	// prochazime pole jmen a ty jmena, ktere splnuji podminku, umistujeme do pole vysledku
	if ($_GET['sstring'] != ""){
		for ($i = 0; $i < count ($names); $i++){
			if (substr_count (strtolower ($names[$i]), strtolower ($_GET['sstring'])) > 0){
				$foundarr[] = $names[$i];
			}
		}
	}

	// pokud jsme neco nasli
	if (count ($foundarr) > 0){
	// tak vypiseme pole vysledku
	?>
	<div style="background: #CCCCCC">
	<?php for ($i = 0; $i < count ($foundarr); $i++) { ?>
	<div style="padding: 4px; height: 14px;" 
    	onmouseover="this.style.background = '#EEEEEE'" 
        onmouseout="this.style.background = '#CCCCCC'" 
        onclick="setvalue('<?php echo $foundarr[$i]; ?>')">
		<?php echo $foundarr[$i]; ?>
	</div>
	<?php } ?>
	</div>
<?php } ?>