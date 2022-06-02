//Add Group Modal
var groupModal = document.getElementById("addGroupModal");

function openGroupModal() {
    groupModal.style.display = "block";
}

function closeGroupModal() {
    groupModal.style.display = "none";
}

// Lists for the resource group
var groupCardItems = [];

function getGroupData() {

    // Hides the modal once user clicks save
    groupModal.style.display = "none";

    // Get the data from the inputs on the modal
    var title = document.getElementById('group-title').value;
    var description = document.getElementById('group-description').value;

    // Prepare the object with the data from the modal above
    var resourceGroup = {
        TaskTitle: title,
        TaskDescription: description,
      
    };

    // Store object into list array
    groupCardItems.push(resourceGroup);

    // Call function which creates a card using the above data
    var grouphtml = resourceGroupTemplate(resourceGroup);

    // Get the card elements
    var card = document.getElementById('groupCard');

    card.insertAdjacentHTML('beforeend', grouphtml);

    function resourceGroupTemplate(resourceGroup) {
        return `<div class="card">
        <div class="cardTop">
          <div class="smallerIcons">
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
          <div class="groupTitle">
            ${resourceGroup.TaskTitle}
          </div>
          <div class="smallerIcons">
            <i class="fa-solid fa-pen"></i>
          </div>
        </div>

        <div class="cardImg">
          <img width="400px" height="250px"
            src="https://images.unsplash.com/photo-1546638008-efbe0b62c730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80">
        </div>

        <div class="cardDescription">
          <p>${resourceGroup.TaskDescription}

          </p>
        </div>

        <div class="expandButton">
          <button>View More</button>
        </div>
      </div>`
    }
}
