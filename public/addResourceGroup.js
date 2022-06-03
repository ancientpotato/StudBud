//Add Group Modal
var groupModal = document.getElementById("addGroupModal");
// Get the card elements
var card = document.getElementById('groupCard');


function openGroupModal() {
  groupModal.style.display = "block";
}

function closeGroupModal() {
  groupModal.style.display = "none";
}

// Lists for the resource group
var groupCardItems = [];

// set resource array to what is in local storage
// Storing objects code from Stack overflow (referenced in markdown)
groupCardItems = JSON.parse(localStorage.getItem('groupCardItems'));

if (!groupCardItems) {
  // if there is nothing in local storage;
  groupCardItems = [];
}

loadStoredResourceGroups();

function getGroupData() {

  // Hides the modal once user clicks save
  groupModal.style.display = "none";

  // Get the data from the inputs on the modal
  var title = document.getElementById('group-title').value;
  var description = document.getElementById('group-description').value;

  // Prepare the object with the data from the modal above
  var resourceGroup = {
    resourceTitle: title,
    resourceDescription: description,
    id: groupCardItems.length

  };

  // Store object into list array
  groupCardItems.push(resourceGroup);
  localStorage.setItem('groupCardItems', JSON.stringify(groupCardItems));

  // Call function which creates a card using the above data
  var grouphtml = resourceGroupTemplate(resourceGroup);

  card.insertAdjacentHTML('beforeend', grouphtml);

}


function loadStoredResourceGroups() {
  groupCardItems.forEach(function (resourceGroup) {
    var html = resourceGroupTemplate(resourceGroup);
    card.insertAdjacentHTML('beforeend', html);
  });
}

function resourceGroupTemplate(resourceGroup) {

  return `<div class="card">
    <div class="cardContent">
      <div class="cardTop">
        <div class="smallerIcons">
        <button class="smallerIcons" onclick="openAllLink(${resourceGroup.id + 1})"><i class="fa-solid fa-up-right-from-square"></i></button>
        </div>
        <div class="groupTitle">
        ${resourceGroup.resourceTitle}
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
        <p>${resourceGroup.resourceDescription}

        </p>
      </div>

      <div class="expandButton">
        <button type="button" onclick="viewResourceLinks(${resourceGroup.id + 1})" class="viewMore">View More</button>
      </div>
    </div>
    <div class="expandedArea">
    <button id="resourceBtn" class="addResource" onclick="openResourceModal()">+ add resources</button></div>
  </div>`
}