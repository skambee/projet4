// NAVBAR TOGGLE
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }
  
  // MODALS DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const closeModal = document.querySelectorAll(".close");
  const content = document.querySelector(".content");
  const testmodal = document.querySelector(".postRegisterModal");
  const testm = document.querySelectorAll(".testm");
  const testcontent = document.querySelector(".postRegisterContent");
  const testclose = document.querySelector(".postRegisterClose");
  const btnfermer = document.querySelector(".btn-fermer");
  
  //  -------------- POST REGISTRATION MODAL --------------
  
  // event listeners post registration modal
  testm.forEach((btn) => btn.addEventListener("click", launchM));
  testclose.addEventListener("click", handleM); // Use addEventListener directly
  btnfermer.addEventListener("click", handleM);
  
  // launch post registration modal
  function launchM() {
  testmodal.style.display = "block";
  testcontent.classList.remove("hide-modal");
  }
  
  // close  post registration modal
  function handleM() {
	testcontent.classList.add("hide-modal"); 
	setTimeout(function () {
	  testmodal.style.display = "none";
	}, 222); // timeout for a smoother effect
  }
  
  //  -------------- REGISTRATION MODAL --------------

  // event listeners
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  closeModal.forEach(function (element) {
	element.addEventListener("click", handleCloseModal);
  });
  
  // launch modal form
  function launchModal() {
	modalbg.style.display = "block";
	content.classList.remove("hide-modal");
  }
  
  // close modal form
  function handleCloseModal() {
	content.classList.add("hide-modal"); 
  // Listen for the animation end event to actually hide the modal after the animation completes
	content.addEventListener("animationend", function (event) {
	  if (event.animationName === "modalclose") {
		modalbg.style.display = "none";
		content.classList.remove("hide-modal"); 
	  }
	});
  }
  
  // FORM VALIDATION 
  
  function validateName(input, errorElement) {
	const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;
	if (!regex.test(input.value)) {
	  errorElement.style.display = "block";
	  //input.classList.add("field-error");
	  return false;
	} else {
	  errorElement.style.display = "none";
	  input.classList.remove("field-error");
	  return true;
	}
  }
  
  function validateEmail(input, errorElement) {
	const emailRegex = /^[A-Za-z]{1,}[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;
	if (!emailRegex.test(input.value)) {
	  errorElement.style.display = "block";
	  input.classList.add("field-error");
	  return false;
	} else {
	  errorElement.style.display = "none";
	  input.classList.remove("field-error");
	  return true;
	}
  }
  
  function validateBirthdate(input, errorElement) {
	if (input.value === "") {
	  errorElement.style.display = "block";
	  input.classList.add("field-error");
	  return false;
	} else {
	  const birthdate = new Date(input.value);
	  const currentDate = new Date();
	  const age = currentDate.getFullYear() - birthdate.getFullYear();
	  if (age > 100 || age < 12) {
		errorElement.style.display = "block";
		input.classList.add("field-error");
		return false;
	  } else {
		errorElement.style.display = "none";
		input.classList.remove("field-error");
		return true;
	  }
	}
  }
  
  function validateCheckbox(input, errorElement) {
	if (!input.checked) {
	  errorElement.style.display = "block";
	  return false;
	} else {
	  errorElement.style.display = "none";
	  return true;
	}
  }
  
  function validateQuantity(input, errorElement) {
	if (input.value === "" || isNaN(input.value)) {
	  errorElement.style.display = "block";
	  input.classList.add("field-error");
	  return false;
	} else {
	  errorElement.style.display = "none";
	  input.classList.remove("field-error");
	  return true;
	}
  }
  
  function validateLocation(locationInputs, errorElement) {
	let isLocationSelected = false;
	locationInputs.forEach((input) => {
	  if (input.checked) {
		isLocationSelected = true;
	  }
	});
	if (!isLocationSelected) {
	  errorElement.style.display = "block";
	  errorElement.classList.add("field-error");
	  return false;
	} else {
	  errorElement.style.display = "none";
	  errorElement.classList.remove("field-error");
	  return true;
	}
  }
  
  
  // FORM VALIDATION PROCESS
  
  const firstNameInput = document.getElementById("first");
  const firstNameError = document.getElementById("firstNameError");
  const lastNameInput = document.getElementById("last");
  const lastNameError = document.getElementById("lastNameError");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdateError");
  const checkbox = document.getElementById("checkbox1");
  const checkboxError = document.getElementById("checkboxError");
  const quantityInput = document.getElementById("quantity");
  const quantityError = document.getElementById("quantityError");
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const locationError = document.getElementById("locationError");
  
  //EVENTS LISTENERS ON CHANGE
  firstNameInput.addEventListener("input", function() {
	validateName(firstNameInput, firstNameError);
  });
  lastNameInput.addEventListener("input", function() {
	validateName(lastNameInput, lastNameError);
  });
  emailInput.addEventListener("input", function() {
	validateEmail(emailInput, emailError);
  });
  birthdateInput.addEventListener("input", function() {
	validateBirthdate(birthdateInput, birthdateError);
  });
  quantityInput.addEventListener("input", function() {
	validateQuantity(quantityInput, quantityError);
  });
  locationInputs.forEach((input) => {
	input.addEventListener("input", function() {
	  validateLocation(locationInputs, locationError);
	});
  });
  
	function validate() {
	  const firstNameValid = validateName(firstNameInput, firstNameError);
	  const lastNameValid = validateName(lastNameInput, lastNameError);
	  const emailValid = validateEmail(emailInput, emailError);
	  const birthdateValid = validateBirthdate(birthdateInput, birthdateError);
	  const quantityValid = validateQuantity(quantityInput, quantityError);
	  const locationValid = validateLocation(locationInputs, locationError);
	
	  const isValid =
		firstNameValid &&
		lastNameValid &&
		emailValid &&
		birthdateValid &&
		quantityValid &&
		locationValid;
	
	  if (isValid) {
		launchM();
		event.preventDefault();
		handleCloseModal();
		return true;
	  } else {
		return false;
	  }
	}