<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/portfolio-subpage.css'>";
$customTitle="<title>Ben Lapidus | W.C.S.A.</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<header class="head-content">
		<div class="center-wrapper">
			<div class="title-wrapper"  id="wcsa-title">
				<h1>Programs Redesign</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">During the midst of COVID-19, teams rushed to release new virtual programming, but the website lagged behind and grew chaotic and messy. This is the published redesign of the virtual programming website at the University of Rochester.</p>
				<p class="tags">March 2020 • Wilson Commons Student Activities • HTML/UI Design/Foundation</p>
			</div>

			<div class="head-b-wrapper">
				<a id="home-button" class="head-b-generate-quiz" href="index.php">Back</a>
			</div>
		</div>
	</header>
	<section>
		<div class="flex-container">
			<div class="flex-child right">
				<div class="image-container">
					<img class="myImg image-item wcsa-image" src="images/wcsa/demo-0.png" alt="Initial design sketch and request for graphics">
					<img class="myImg image-item wcsa-image" src="images/wcsa/demo-1.png" alt="Initial Virtual Programming page">
					<img class="myImg image-item wcsa-image" src="images/wcsa/demo-2.png" alt="Virtual Programming page after redesign">
					<img class="myImg image-item wcsa-image" src="images/wcsa/demo-3.png" alt="Subpage within redesign.">
					<img class="myImg image-item wcsa-image" src="images/wcsa/demo-4.png" alt="Designed and implemented page to encourage student engagement amid COVID-19.">


					<!-- Source: https://www.w3schools.com/howto/howto_js_lightbox.asp -->

					<div id="myModal" class="modal">
						<img class="modal-content" id="img01">
						<div id="caption"></div>
					</div>
				</div>
			</div>
				<div class="flex-child left" id="wcsa-section">
					<div class="pastel-wrapper">
					<p class="pastel-body-p">In collaboration with student designers, I designed and executed a restructuring of the virtual programs website, splitting content into several subpages. These changes were well recieved and the same structure was requested and used for summer programs.</p>
					<div class="pastel-button">
						<a href="https://rochester.edu/college/wcsa/programs/virtualprograms.html" target="_blank">View live</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php
	include "inc/footer.php";
	include "js/modal-image.php";
	include "js/toggle-nav.php";
	include "js/toggle-x.php";

	?>

</body>
</html>