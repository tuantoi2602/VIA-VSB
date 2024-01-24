<?php
	// zde zpracujeme text (v nasem pripade prevedeme na velka pismena) a jednoduse ho vypiseme
    if (isset($_GET['inputText']))
    	echo strtoupper($_GET['inputText']);
?>
