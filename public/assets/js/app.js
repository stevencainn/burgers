// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-Eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("newEaten");
  
      var newEatenState = {
        Eaten: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed Eaten to", newEaten;
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        Eaten: $("[name=Eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  