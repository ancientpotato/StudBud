var groupModal = document.getElementById("addGroupModal");
var groupBtn = document.getElementById("groupBtn");
var close = document.getElementsByClassName("cancel-group")[0];

 groupBtn.onclick = function() {
    groupModal.style.display = "block";
  }

  close.onclick = function() {
    groupModal.style.display = "none";
  }
