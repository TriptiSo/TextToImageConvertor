document.getElementById("convertButton").addEventListener("click", function () {
    var text = document.getElementById("textInput").value;
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
  
    // Set canvas dimensions
    canvas.width = 500; // Set canvas width
    canvas.height = 500; // Set canvas height
  
    // Set background color
    context.fillStyle = "#ffffff"; // White background color
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Measure text width
    context.font = "20px Arial";
    var textWidth = context.measureText(text).width;
  
    // Calculate text position for center alignment
    var x = (canvas.width - textWidth) / 2;
    var y = canvas.height / 2;
  
    // Draw text
    context.fillStyle = "#000000"; // Text color
    context.fillText(text, x, y);
  
    // Add border
    context.strokeStyle = "#000000"; // Border color
    context.lineWidth = 2; // Border width
    context.strokeRect(0, 0, canvas.width, canvas.height);
  
    var dataURL = canvas.toDataURL("image/png");
    document.getElementById("downloadLink").href = dataURL;
    document.getElementById("downloadLink").style.display = "block";
  });
  