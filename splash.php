<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/portfolio-subpage.css'>";
$customTitle="<title>Ben Lapidus | Splash</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<header class="head-content">
		<div class="center-wrapper">
			<div class="title-wrapper"  id="splash-title">
				<h1>Splash</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">Splash is an educational and fun iOS game. Cast your line and try to hook a fish! After a successful catch, log it and learn something new about your fish using the FishWatch API.</p>
				<p class="tags">December 2019 • Final Project • Swift</p>
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
					<img class="myImg image-item" src="images/splash/demo-0.gif" alt="Demonstration of Splash in action!">
					<img class="myImg image-item" src="images/splash/demo-1.png" alt="Splash launch screen">
					<img class="myImg image-item" src="images/splash/demo-2.png" alt="Animated casting view (1)">
					<img class="myImg image-item" src="images/splash/demo-3.png" alt="Animated casting view (2)">
					<img class="myImg image-item" src="images/splash/demo-4.png" alt="Underwater view; users swipe to control the hook direction and tap the hook to reel in.">
					<img class="myImg image-item" src="images/splash/demo-5.png" alt="Catch log was connected to the FishWatch API to pull fish names and facts upon a successful catch and reel.">


					<!-- Source: https://www.w3schools.com/howto/howto_js_lightbox.asp -->

					<div id="myModal" class="modal">
						<img class="modal-content" id="img01">
						<div id="caption"></div>
					</div>
				</div>
			</div>
			<div class="flex-child left" id="splash-section">
				<div class="pastel-wrapper">
					<p class="pastel-body-p">Splash was my final project for CSC214, Mobile App Development. I designed it to teach about over 50 types of fish and be fun! From animations to implementing graphics to back-end development, I implemented the full stack.</p>
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