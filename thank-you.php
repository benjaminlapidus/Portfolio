<?php
$mail = Trim(stripslashes($_POST['mail'])); 
$emailFrom = $mail;
$emailTo = "blapidus@u.rochester.edu";
$subject = "Portfolio Notification";
$name = Trim(stripslashes($_POST['name'])); 
$message = Trim(stripslashes($_POST['message'])); 
$body = "";
$body .= "Name: \n";
$body .= $name;
$body .= "\n\n";
$body .= "Email: \n";
$body .= $mail;
$body .= "\n\n";
$body .= "Message: \n";
$body .= $message;
$body .= "\n\n";
mail($emailTo, $subject, $body, "From: <$emailFrom>");
?>

<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/thank-you.css'>";
$customTitle="<title>Ben Lapidus | Message Sent</title>";
include "inc/html-top.php";
?>

<body>
<?php include "inc/nav.php";?>
	<header class="head-content" >
		<div class="center-wrapper">
			<div class="title-wrapper"  id="splash-title">
				<h1>Thank You!</h1>
			</div>
			<div class="description-wrapper">
				<p class="content-description">Your message has been sent :)</p>
			</div>

			<div class="head-b-wrapper">
				<a id="home-button" class="head-b-generate-quiz" href="index.php">Back</a>
			</div>
		</div>
	</header>

	<?php
	include "inc/footer.php";
	include "js/modal-image.php";
	include "js/toggle-x.php";
	include "js/toggle-nav.php";
	?>
</body>
</html>
