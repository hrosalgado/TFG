<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Simulador</title>

        <!-- CSS -->
        <link rel="stylesheet" href="../resources/css/bootstrap.min.css">
        <link rel="stylesheet" href="../resources/css/customHome.css">

        <!-- Favicon and touch icons -->
        <link rel="shortcut icon" href="../resources/img/icon2.ico">

        <!-- Selected language -->
        <?php
	        require_once('../core/language.php');
	        $lang = $_GET['lang'];
	    ?>

	    <!-- JavaScript -->
	    <script type="text/javascript">
	    	var language = <?php echo json_encode($lang); ?>;
	    </script>
	    <script src="../resources/js/checkHome.js"></script>
    </head>
    <body>
    	<div class="top">
    		<h1><?php echo translate('Behaviour modeling tool in spatial systems', $lang); ?></h1>
    	</div>
    
    	<div class="section-container">
	        <div class="container layouts">
	            <div class="row">
	                <div class="col-sm-12 section-description">
	                    <h3><?php echo translate('Choose a system', $lang); ?></h3>
	                </div>
	            </div>

	            <div class="row">
	            	<div class="col-sm-10 col-sm-offset-1">
	            		<div class="row">
	            			<div class="col-sm-2 layout-box"></div>

		                	<div class="col-sm-4 layout-box">
			                	<a href="#" id="s1" onclick="return checkLanguage()">
			                		<img src="../resources/img/s1.png" alt="">
			                	</a>
			                	<p><?php echo translate('Biological system 1', $lang); ?></p>
		                    </div>

		                    <div class="col-sm-4 layout-box">
		                    	<a href="#" id="s2" onclick="return checkLanguage()">
				                	<img src="../resources/img/s1.png" alt="">
			                    </a>
			                    <p><?php echo translate('Biological system 2', $lang); ?></p>
		                    </div>

		                    <div class="col-sm-2 layout-box"></div>
	                    </div>
                    </div>
	            </div>

	            <div class="row">
	            	<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5"></div>

		        	<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
		        		<div class="form-group">
		        			<select class="form-control" id="language">
		        				<option value="select"><?php echo translate('Language', $lang); ?>...</option>
		        				<option value="es"><?php echo translate('Spanish', $lang); ?></option>
		        				<option value="ga"><?php echo translate('Galician', $lang); ?></option>
		        				<option value="en"><?php echo translate('English', $lang); ?></option>
		        			</select>
		        		</div>
		        	</div>

	            	<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5"></div>
        		</div>
	        </div>
        </div>
        
        <div class="container footer">
            <div class="row">
                <div class="col-sm-12">
                	&copy; 2016 - TFG - ESEI
                </div>
            </div>
        </div>
    </body>
</html>