<?php
$customCSS="<link rel='stylesheet' type='text/css' href='css/styles.css'>
			<link rel='stylesheet' type='text/css' href='css/form.css'>
			<link rel='stylesheet' type='text/css' href='css/portfolio.css'>";
$customTitle="<title>Ben Lapidus | Aspiring Developer</title>";
include "inc/html-top.php";
?>

<body>
	<?php include "inc/nav.php";?>
	<a href="#" id="scroll" style="display: none;"><span></span></a>
	<header class="head">
		<div id="vertical-bar-wrapper">
			<div class="vertical-bar pink"></div>
			<div class="vertical-bar green"></div>
			<div class="vertical-bar yellow"></div>
			<div class="vertical-bar blue"></div>
		</div>
		<div class="grid">
			<div class="col-1-2-1">
				<div class="module">
					<div class="image-wrapper">
						<img src="images/profile.png" class="profile-pic shadowed" alt="Ben Lapidus in greyscale" ondragstart="return false;"> 
					</div>
				</div>
			</div>
			<div class="col-1-2-2">
				<div class="module">
					<div class="head-title">
						<h1>Ben Lapidus</h1>
						<h2 id='greeting'>Aspiring Developer</h2>
					</div>
					<ul class="head-buttons">
						<li>
							<a href="assets/ben-lapidus-resume.pdf" target="_blank">
								<div class="resume-button">
									<img src="https://img.icons8.com/ios/80/000000/resume.png" alt="resume icon"/>
									<span>Resume</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#portfolio">
								<div class="portfolio-button">
									<img src="https://img.icons8.com/ios/50/000000/portfolio.png" alt="portfolio icon"/>
									<span>Portfolio</span>
								</div>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/benjaminlapidus/" target="_blank">
								<div class="linkedin-button">
									<img src="https://img.icons8.com/windows/64/000000/linkedin.png" alt="LinkedIn icon"/>
									<span>LinkedIn</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<section class="portfolio" id="portfolio">
		<div class="container">
			<div class="grid">
				<div class="contain clearfix">
					<div class="sticky">
						<div class="col-1-3-sticky">
							<h3>Portfolio</h3>
							<div class="portfolio-links">
								<a id="portfolio-contact" href="#contact">Contact Me<span class="down">»</span></a>
								<a id="portfolio-linkedin" href="https://www.linkedin.com/in/benjaminlapidus/" target="_blank">LinkedIn<span class="outbound">»</span></a>
								<a id="portfolio-resume" href="assets/ben-lapidus-resume.pdf" target="_blank">Resume<span class="outbound">»</span></a>
								<a id="portfolio-github" href="https://github.com/benjaminlapidus" target="_blank">GitHub<span class="outbound">»</span></a>
							</div>
						</div>
					</div>
					<div class="col-2-3">
						<div class="module">
							<div class="list-wrapper">
								<ul class="left-portfolio-list" id="left-portfolio">
									<li class="portfolio-item" id="spoton-item">
										<a href="spot-on.php" class="portfolio-item-link">
											<div class = "img-hover-zoom">
												<img src="images/profile-spoton.png" alt="Laptop and iPhone displaying a webpage" id="spoton">
											</div>
											<div class="portfolio-card-footer">
												<h4>Spot On</h4>
												<div class="portfolio-tags">
													<span>March 2020 - Present • Personal Project • ReactJS</span>
												</div>
											</div>
										</a>
									</li>
									<li class="portfolio-item" id="wcsa-item">
										<a href="wcsa.php" class="portfolio-item-link">
											<div class = "img-hover-zoom">
												<img src="images/profile-wcsa.png" alt="A laptop displaying a webpage" id="wcsa">
											</div>
											<div class="portfolio-card-footer">
												<h4>Programs Redesign</h4>
												<div class="portfolio-tags">
													<span>March 2020 • Professional Redesign • HTML/UI Design/Foundation</span>
												</div>

											</div>
										</a>
									</li>
									<li class="portfolio-item" id="revolutionary-item">
										<a href="revolutionary.php" class="portfolio-item-link">
											<div class = "img-hover-zoom">
												<img src="images/profile-revolutionary.png" alt="Laptop and iPhone displaying a webpage" id="revolutionary">
											</div>
											<div class="portfolio-card-footer">
												<h4>Revolutionary</h4>
												<div class="portfolio-tags">
													<span>May 2020 • Final Project • HTML/CSS/JavaScript</span>
												</div>
											</div>
										</a>
									</li>
								</ul>
								<ul class="right-portfolio-list">
									<li class="portfolio-item" id="etms-item">
										<a href="etms.php" class="portfolio-item-link">
											<div class = "img-hover-zoom">
												<img src="images/profile-court.png" alt="Desktop computer displaying an application" id="court">
											</div>
											<div class="portfolio-card-footer">
												<h4>E.T.M.S.</h4>
												<div class="portfolio-tags">
													<span>Summer 2019, 2020 • Professional Project • React, Java Spring, MySQL</span>
												</div>
											</div>
										</a>
									</li>
									<li class="portfolio-item" id="splash-item">
										<a href="splash.php" class="portfolio-item-link">
											<div class = "img-hover-zoom">
												<img src="images/profile-splash.png" alt="Two landscape phones vertically stacked displaying an app" id="splash">
											</div>
											<div class="portfolio-card-footer">
												<h4>Splash</h4>
												<div class="portfolio-tags">
													<span>December 2019 • Final Project • Swift</span>
												</div>
											</div>
										</a>
									</li>
									<li class="portfolio-item" id="design-item">
										<a href="design.php" class="portfolio-item-link">
											<div class = "img-hover-zoom">
												<img src="images/profile-design.png" alt="Flyers arranged diagonally and overlapping" id="court">
											</div>
											<div class="portfolio-card-footer">
												<h4>Design</h4>
												<div class="portfolio-tags">
													<span>Personal Projects • GIMP, Inkscape</span>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="about" id="about">
		<div class="container">
			<div class="grid">
				<div class="contain clearfix">
					<div class="col-1-3">
						<div class="module">
							<h3>About</h3>
						</div>
					</div>
					<div class="col-2-3">
						<div class="module">
							<p>I’m a student and incoming developer majoring in <span id="cs">Computer Science</span> and <span id="econ">Economics</span> with a minor in <span id="dms">Digital Media Studies</span>. As a developer, I'm bringing ideas to life by using priciples founded in economics. Analytical, curious, and independent thinking drive my passion for creating <span id="beauty">beautiful and thoughtful</span> user experiences.</p>	
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="contact" id="contact">
		<div class="container">
			<div class="grid">
				<div class="contain clearfix">
					<div class="col-1-3">
						<div class="module">
							<h3>Contact</h3>
							<div class="portfolio-links">
								<span id="contact-1">blapidus@u.rochester.edu</span>
								<span id="contact-2">(631) 521-9939</span>
							</div>
						</div>
					</div>
					<div class="col-2-3">
						<div class="module">
							<div class="container-contact">
								<div class="wrapper-contact">
									<form class="contact-form validate-form" action="thank-you.php" method="post">
										<div class="input-wrapper validate-input" data-validate="Please enter your name">
											<input class="input" type="text" placeholder="Name" id="name" name="name">
											<span class="focus-input"></span>
										</div>
										<div class="input-wrapper validate-input" data-validate="Please enter your email: email@abc.com">
											<input class="input" type="email" placeholder="Email" id="mail" name="mail">
											<span class="focus-input"></span>
										</div>
										<div class="input-wrapper validate-input" data-validate="Please enter your message">
											<textarea class="input" placeholder="Message" id="message" name="message"></textarea>
											<span class="focus-input"></span>
										</div>
										<div class="wrapper-contact-button">
											<input class="contact-button" type="submit" value="Send">
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<svg height="0" xmlns="http://www.w3.org/2000/svg">
		<filter id="drop-shadow">
			<feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
			<feOffset dx="15" dy="0" result="offsetblur"/>
			<feFlood flood-color="rgba(0,0,0,0.2)"/>
			<feComposite in2="offsetblur" operator="in"/>
			<feMerge>
				<feMergeNode/>
				<feMergeNode in="SourceGraphic"/>
			</feMerge>
		</filter>
	</svg>

	<?php
	include "inc/footer.php";
	include "js/header-rotate-text.php";
	include "js/return-to-top.php";
	include "js/smooth-scroll.php";
	include "js/toggle-nav.php";
	include "js/toggle-x.php";
	?>

</body>
</html>