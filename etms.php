<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/portfolio-subpage.css'>";
$customTitle="<title>Ben Lapidus | E.T.M.S.</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<header class="head-content">
		<div class="center-wrapper">
			<div class="title-wrapper"  id="etms-title">
				<h1>E.T.M.S.</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">The Employee Training Management System is a an internal tool developed for the Clerk's Office at the U.S. Bankruptcy Court. It maintained a log of training courses, individual training records, and multiple access levels. (plus dark mode!)</p>
				<p class="tags">Summer 2019, 2020 • U.S. Federal Bankruptcy Court • ReactJS, Java Spring, MySQL</p>
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
					<img class="myImg image-item" src="images/etms/etms.png" alt="Glamor shot showcasing cross device compatibility.">
					<img class="myImg image-item" src="images/etms/etms1.png" alt="Dashboard of application - Featured trainings can be displayed to all users.">
					<img class="myImg image-item" src="images/etms/etms2.png" alt="Sample log entry in virtual training log.">
					<img class="myImg image-item" src="images/etms/etms3.png" alt="Sample entry form for the training log.">

					<!-- Source: https://www.w3schools.com/howto/howto_js_lightbox.asp -->

					<div id="myModal" class="modal">
						<img class="modal-content" id="img01">
						<div id="caption"></div>
					</div>
				</div>
			</div>
			<div class="flex-child left" id="etms-section">

				<div class="pastel-wrapper">
					<p class="pastel-body-p">Using React, Java Spring, and MySQL, I independently developed an internal training management tool to replace the court's paper records.</p>
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