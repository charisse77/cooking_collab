<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<title>The Cooking Collaborate </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
<link href="css/stylesheet.css" rel="stylesheet" type="text/css">

<link href="css/stylesheet.scss">

	
</head>

<body>
<div class="container border">
    
  <nav class="navbar navbar-expand-md navbar-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">The Cooking Collaborate</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link"  href="about.html">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="addRecipe.html">ADD A RECIPE</a>
          </li>
             <li class="nav-item">
            <a class="nav-link" href="contact.php">CONTACT US</a>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>



    
    <header>
    <h1 class="border-bottom py-3 ps-3 text-light">Contact</h1>
    </header>
    
    
    
<main>
<div class="row">
    <div class="col-md-6 p-5">     
    <form id="form-container" method="post" action="response.php" class="text-light">
    <div class="mb-3"> <!--first name-->
    <label for="fName" class="form-label">First Name</label>    
    <input type="text" class="form-control" id="fName" name="fName" placeholder="Jane">
    </div>
        
    <div class="mb-3"> <!--last name-->
    <label for="lName" class="form-label">Last Name</label>    
    <input type="text" class="form-control" id="lName" name="lName" placeholder="Doe">
    </div>
		
		
	<div class="mb-3"  style="display: none;"> <!--middle name-->
    <label for="mName" class="form-label">Middle Name</label>    
    <input type="text" class="form-control" id="mName" name="mName" placeholder="M">
    </div>

        
    <div class="mb-3"> <!--email -->
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="email@email.com">
    
    </div>
       
     <div class="mb-3"> <!--phone -->
    <label for="phone" class="form-label">Phone Number</label>
    <input type="tel" class="form-control" id="phone" name="phone" placeholder="515-555-5555" pattern="/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i">
    
    </div>
        
    <div class="mb-3"> <!--subject drop down -->
  <label for="subject" class="form-label">Subject</label>
  <input type="text" class="form-control" id="subject" name="subject" placeholder="Say Hello!">
    </div>
        
    <div class="mb-3"> <!--message -->
    <label for="message" class="form-label">Message</label>
     <textarea name="message" class="form-control" rows="3"></textarea> 
    </div>

    <input type="submit" class="btn btn-primary" name="submit" value="Submit">
    <input type="reset" class="btn btn-primary" name="reset" value="Reset">
        
    </form>
        

    </div>

</div> <!--close row div-->
</main>
    
<footer>
<div class="text-center p-5">
<p>The Cooking Collaborate</p>
<p>About | Add Recipe | Contact Us</p>
    <p>contact@cookingcollab.com</p>
</div>
  <div class="text-center p-4">
   <p> &copy; </p>
  </div>
</footer>



</div> <!--close container div-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>
