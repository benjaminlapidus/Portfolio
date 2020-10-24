<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/portfolio-subpage.css'>";
$customTitle="<title>Ben Lapidus | Revolutionary</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<header class="head-content">
		<div class="center-wrapper">
			<div class="title-wrapper" id="revolutionary-title">
				<h1>Revolutionary</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">Revolutionary was my final project for CSC170, Web Development. It highlights four individuals that revolutionized their respective industries.</p>
				<p class="tags">May 2020 • Final Project • HTML, CSS, JavaScript, PHP, SEO, Mobile Optimization</p>
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
					<img class="myImg image-item" src="images/revolutionary/demo-1.png" alt="Mobile view of Revolutionary">
					<img class="myImg image-item" src="images/revolutionary/demo-2.png" alt="Standard desktop view of Revolutionary">
					<img class="myImg image-item" src="images/revolutionary/demo-3.png" alt="Full page view of Alan Turing">
					<img class="myImg image-item" src="images/revolutionary/demo-4.png" alt="CSS-animated landing page">

					<!-- Source: https://www.w3schools.com/howto/howto_js_lightbox.asp -->

					<div id="myModal" class="modal">
						<img class="modal-content" id="img01">
						<div id="caption"></div>
					</div>
				</div>
			</div>
			<div class="flex-child left" id="revolutionary-section">
				<div class="pastel-wrapper">
					<p class="pastel-body-p">For my final project, I was given HTML files and without modifying their content, I wrote CSS and JS to create a seamless website highlighting various visionaries.</p>
					<div class="pastel-button">
						<a href="revolutionary/index.php" target="_blank">View live</a>
					</div>
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