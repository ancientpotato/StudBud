
//JS for expanded card state
var expandCard;
var expandBtn = document.getElementsByClassName('viewMore');
var addResource = document.getElementById('groupBtn');

var isVisible = false;

function viewResourceLinks() {
    
    if (isVisible) {
        isVisible = false;
        expandBtn[0].innerHTML = "< back";
        document.getElementsByClassName('card')[0].style.width = "100%";
        document.getElementsByClassName('expandedArea')[0].style.width = "100%";
        document.getElementsByClassName('expandedArea')[0].style.display = "block";
    } else {
        isVisible = true;
        expandBtn[0].innerHTML = "View More";
        document.getElementsByClassName('card')[0].style.width = "400px";
        document.getElementsByClassName('expandedArea')[0].style.width = undefined;
        document.getElementsByClassName('expandedArea')[0].style.display = "none";
      
    }
}

//JS for adding your own resources

var resourceModal = document.getElementById("addresourceModal");


function openResourceModal() {
    resourceModal.style.display = "block";
}

function closeResourceModal() {
    resourceModal.style.display = "none";
}

//List for resource
var resourceCardItems = [];

function getResourceData() {

    //Hides modal once user clicks save
    resourceModal.style.display = "none";

    //Get data from inputs in the modal
    var title = document.getElementById('resource-title').value;
    var description = document.getElementById('resource-description').value;
    var link = document.getElementById('resource-link').value;

    // Prepare the object with the data from the modal above
    var resource = {
        resourceTitle: title,
        resourceDescription: description,
        resourceLink: link
      
    };

    // Store object into list array
    resourceCardItems.push(resource);

    // Call function which creates a resource card using the above data
    var resourcehtml = resourceTemplate(resource);

    // Get the resource card elements
    var resourceCard = document.getElementById('resourceContainer');

    resourceCard.insertAdjacentHTML('beforeend', resourcehtml);

    function resourceTemplate(resource) {
        return `<div class="resources">
        <div class="resourceTopRow">
          <div class="resourceTitle">${resource.resourceTitle}</div>
          <i class="fa-solid fa-pen editIcon"></i>
        </div>
        <div class="resourceDescription">${resource.resourceDescription}</div>
        <div class="resourceBottomRow">
          <i class="fa-solid fa-link"></i>
          <div class="resourceLink">${resource.resourceLink}</div>
        </div>
      </div>`
    }
}