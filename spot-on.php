<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/portfolio-subpage.css'>";
$customTitle="<title>Ben Lapidus | Spot On</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<header class="head-content">
		<div class="center-wrapper">
			<div class="title-wrapper" id="spoton-title">
				<h1>Spot On</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">SpotOn is a web-based quiz that allows users to sign into their Spotify account. Then, <strike>thanks to hours of work</strike> automagically, a custom quiz based is generated based on the user's listening habits.</p>
				<p class="tags">March 2020 - Present • Personal Project • ReactJS • Django</p>
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
					<img class="myImg image-item" src="images/spoton/spot-on1.png" alt="Spot On homepage">
					<img class="myImg image-item" src="images/spoton/spot-on2.png" alt="User dashboard">
					<img class="myImg image-item" src="images/spoton/spot-on3.png" alt="Custom modal for name entry before starting quiz">
					<img class="myImg image-item" src="images/spoton/spot-on4.png" alt="Sample question within quiz">

					<!-- Source: https://www.w3schools.com/howto/howto_js_lightbox.asp -->

					<div id="myModal" class="modal">
						<img class="modal-content" id="img01">
						<div id="caption"></div>
					</div>
				</div>
			</div>
			<div class="flex-child left" id="spoton-section">
				<div class="pastel-wrapper">
					<p class="pastel-body-p">This is a work-in-progress side-project that I continue to work on with a friend - I've developed the front-end while he worked on the back-end. I used React Hooks, MaterialUI and Sass and the back-end is written in Django.</p>
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