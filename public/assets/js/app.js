// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-Eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("newEaten") === false;
  
      var newEatenState = {
        devour: newEaten
      };

      console.log(`id: ${id}
eaten: ${newEatenState.devour}`);
  
      // Send the PUT request. // WHERE IS MY ERROR
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
          }).then(
        function() {
          console.log("changed Eaten to", newEaten);
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
      };

      console.log(newBurger);
  
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
  