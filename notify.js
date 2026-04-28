document.addEventListener("DOMContentLoaded", function () {

  const notificationsDiv = document.getElementById("notifications");
  const lostForm = document.getElementById("lostForm");
  const input = document.getElementById("lostItemTitle");

  function showNotification(message) {
    const div = document.createElement("div");
    div.className = "notification new";
    div.textContent = message;

    notificationsDiv.prepend(div);
  }

  function triggerNewItem(title) {
    showNotification("🆕 New item reported: " + title);
  }

  // Only ONE event listener
  lostForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = input.value.trim();

    if (value === "") {
      alert("Enter item name");
      return;
    }

    triggerNewItem(value);

    input.value = "";
  });

});