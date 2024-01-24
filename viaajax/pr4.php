<?php
	// zde by se mely nacitat kontakty z databaze,
	// pro jednoduchost budeme misto  databaze pouzivat pole

	$names = array ("Lee Babin","Joe Smith","John Doe", "Lara Croft", "Pepa Novak");
	$foundarr = array ();
	
	// prochazime pole jmen a ty jmena, ktere splnuji podminku, umistujeme do pole vysledku
	if ($_GET['term'] != ""){
		for ($i = 0; $i < count ($names); $i++){
			if (substr_count (strtolower ($names[$i]), strtolower ($_GET['term'])) > 0){
				$foundarr[] = $names[$i];
			}
		}
	}
  echo json_encode($foundarr);
?>
