<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/portfolio-subpage.css'>";
$customTitle="<title>Ben Lapidus | Design</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<header class="head-content">
		<div class="center-wrapper">
			<div class="title-wrapper"  id="etms-title">
				<h1>Design</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">In the spirit of creating beautiful and thoughtful user experiences, these are some of the highlights of my experience with self-taught graphic design.</p>
				<p class="tags">Personal Projects • GIMP, Inkscape</p>
			</div>

			<div class="head-b-wrapper">
				<a id="home-button" class="head-b-generate-quiz" href="index.php">Back</a>
			</div>
		</div>
	</header>
	<section>
		<div class="flex-container">
	
				<div class="image-container" style="background-color: #e3e3e3">
					<img class="myImg design-item" src="images/design/d1.png" alt="Flyer for speaker series promotion.">
					<img class="myImg design-item" src="images/design/d2.png" alt="SpotOn logo - dots form an abstract S shape, highlight the site colors, and serve as 'spots' in an homage to the site name.">
					<img class="myImg design-item" src="images/design/d3.png" alt="Thumbnail advertising a general interest meeting for new club members.">
					<img class="myImg design-item" src="images/design/d4.png" alt="Cover page for a 'How to Register' booklet for incoming students">
					<img class="myImg design-item" src="images/design/d5.png" alt="Flyer distributed at annual activities fair.">
					<img class="myImg design-item" src="images/design/d9.png" alt="Hall program advertisement for an oreo ranking social.">
					
					<img class="myImg design-item" src="images/design/d7.png" alt="Door tags created to advertise academic advising sessions.">
					<img class="myImg design-item" src="images/design/d8.png" alt="Splash page within course registration guide.">
					<img class="myImg design-item" src="images/design/d6.png" alt="Advertisement for hall program to make friendship bracelets.">
					

					<!-- Source: https://www.w3schools.com/howto/howto_js_lightbox.asp -->

					<div id="myModal" class="modal">
						<img class="modal-content" id="img01">
						<div id="caption"></div>
					</div>
				</div>
	
			

		</div>
	</section>
	<?php
	include "inc/footer.php";
	include "js/modal-image.php";
	include "js/toggle-x.php";
	include "js/toggle-nav.php";
	?>
</body>
</html>