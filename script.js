$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.pet-button').click(clickedPetButton);
    $('.feed-button').click(clickedfeedButton);

  
    //Toggleclass and hover are used here so when the mouse hovers over the cat image, it triggers a change. Toggle is what makes that change possible, toggling it on or off depending if the mouse is still over the image.
    $('.pet-image').hover(
      function() {
        $(this).toggleClass('pet-hover', true);
      },
      function() {
        $(this).toggleClass('pet-hover', false);
      }
    );

    //Easter egg for when one clicks the image
    $('.pet-image').click(clickedImage);
    
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Stuart", weight: 12, happiness: 80 }; //Using values of 0 to 100.

    var petCommentTimeout; //So the comment reaction to buttons are timed, not permanent.

    var petSound = new Audio(); //So we can play cat sounds.
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 10;
      // Increase pet weight
      pet_info.weight += 4; 
      checkAndUpdatePetInfoInHtml();
      updatePetComment("Meow!, Nom Nom Nom", "/images/stuart8.webp", "/sounds/stuartPurring.mp4");
    }
    
    function clickedPlayButton() {  
      // Increase pet happiness
      pet_info.happiness += 10;
      // Decrease pet weight
      pet_info.weight -= 2; 
      checkAndUpdatePetInfoInHtml();
      updatePetComment("Meow! The mouse must die!", "/images/stuart6.webp", "/sounds/meow2s.mp4");
    }
    
    function clickedExerciseButton() {
      // Decrease pet weight
      pet_info.weight -= 2; //decrease weight by 1 when exersising.
      // Decrease pet happiness
      pet_info.happiness -= 10;
      checkAndUpdatePetInfoInHtml();
      updatePetComment("Meow meow...mrrrrroooowww!", "/images/stuart3.webp", "/sounds/meow2s.mp4");
    }

    function clickedPetButton(){ //new
      pet_info.happiness += 10;
      checkAndUpdatePetInfoInHtml();
      updatePetComment("Purr...purr", "/images/pets2.webp", "/sounds/stuartPurring.mp4");
    }
  
    
    function clickedfeedButton(){ //new
      pet_info.weight += 4;
      checkAndUpdatePetInfoInHtml();
      updatePetComment("Nom nom nom", "/images/stuart.webp", "/sounds/meow2s.mp4");
    }

    function clickedImage(){
      updatePetComment("STARE INTO THE VOID!", "/images/stuartPOSSESED.webp", "/sounds/meow3.mp4");
    }
  

    function updatePetComment(comment, image, sound) { //Timing for the comments to show.
      $('.pet-comment').text(comment);
      $('.pet-comment').toggleClass('is-visible', true);  // show comment
      $('.pet-image').attr('src', image);//Change stuart image when button is pressed, for the duration of the comment.

      clearTimeout(petCommentTimeout); //Cancels a previosu comment remaining time if a button is pressed before its gone.

      petCommentTimeout = setTimeout(function() {
       $('.pet-comment').toggleClass('is-visible', false); // hide the comment after 3000 ms, or 3 seconds
       $('.pet-image').attr('src', '/images/stuart.webp'); //This one changes the image back to the original.
      }, 3000);

      //Added later, so it also has a sound effect.
      petSound.pause(); //to stop any ongoing sound.
      petSound.currentTime = 0; //reset
      petSound.src = sound; //assign new sound
      petSound.play(); //Play sound (the sound bits are at most 3s long)

    }

  

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight < 0){
        pet_info.weight = 0;
      }
      else if(pet_info.weight > 20){
        pet_info.weight = 20;
      }

      if(pet_info.happiness < 0){
        pet_info.happiness = 0;
      }
      else if(pet_info.happiness > 100){
        pet_info.happiness = 100;
      }

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  