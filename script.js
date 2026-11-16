$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.pet-button').click(clickedPetButton);
    $('.feed-button').click(clickedfeedButton);

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Stuart", weight:"12", happiness:"80"}; //Using values of 0 to 100.
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 10;
      // Increase pet weight
      pet_info.weight += 4; 
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {  
      // Increase pet happiness
      pet_info.happiness += 10;
      // Decrease pet weight
      pet_info.weight -= 2; 
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet weight
      pet_info.weight -= 2; //decrease weight by 1 when exersising.
      // Decrease pet happiness
      pet_info.happiness -= 10;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedPetButton(){ //new
      pet_info.happiness += 10;
      checkAndUpdatePetInfoInHtml();
    }
  
    
    function clickedfeedButton(){ //new
      pet_info.weight += 4;
      checkAndUpdatePetInfoInHtml();
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
  