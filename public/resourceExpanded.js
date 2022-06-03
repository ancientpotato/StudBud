
//JS for expanded card state
var expandCard;
var expandBtn = document.getElementsByClassName('viewMore');
var addResource = document.getElementById('groupBtn');

var isVisible = false;
var selectedResource = 0;

function viewResourceLinks(index) {
    
    if (isVisible) {
        isVisible = false;
        expandBtn[index].innerHTML = "View More";
        document.getElementsByClassName('card')[index].style.width = "400px";
        document.getElementsByClassName('expandedArea')[index].style.width = undefined;
        document.getElementsByClassName('expandedArea')[index].style.display = "none";
        document.getElementsByClassName('card')[index].style.position = "relative";
        document.getElementsByClassName('card')[index].style.zIndex = "0";

    } else {
        isVisible = true;
        expandBtn[index].innerHTML = "< back";
        document.getElementsByClassName('card')[index].style.width = "80%";
        document.getElementsByClassName('expandedArea')[index].style.width = "100%";
        document.getElementsByClassName('expandedArea')[index].style.display = "block";
        document.getElementsByClassName('card')[index].style.position = "absolute";
        document.getElementsByClassName('card')[index].style.zIndex = "1";
        selectedResource = index;
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
    var resourceCard = document.getElementsByClassName('expandedArea')[selectedResource];

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
          <a class="resourceLink" href="${resource.resourceLink}" target="_blank">${resource.resourceLink}</a>
        </div>
      </div>`
    }
}

//JS for onclick event where clicking on the icon will open 
//all links within resource group

function openAllLink() {
    //https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
    links = document.querySelectorAll('.resourceLink')

    links.forEach(function(element) {
        window.open(element.innerHTML);
    });
}