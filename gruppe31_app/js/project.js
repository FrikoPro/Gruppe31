//var currentUserCookie = getCookie("currentUser").split("[?]");
//var currentUser =  {name: currentUserCookie[0], firstName: currentUserCookie[1], lastName: currentUserCookie[2], password: currentUserCookie[3]}
//Current User
    var user = "Fredrik";
    //Addcard button Element
    var addCardBtn = document.getElementById("addCard");
    //addRow Button Element
    var addZoneBtn = document.getElementById("addRow");
    
    //Elementet til knappen man kan dra kort til, for å slette.
    var cardDisposal = document.getElementById("cardDisposal");

    var ActivityEl = document.getElementById("activityContainer");
    
    //Container Element der alle Drop Sonene skal opprettes.
    const mainEl = document.getElementById("main");
    
    //dropZones array
    const dropZones = ["todo", "doing", "done"];
    
    //looper gjennom alle variablene i dropzones og kjører updateDropZonesToDOM for hver av dem.
    dropZones.forEach(updateDropZonesToDOM);
        
    //card[] array med alle card objektene
    const cards = [];

    //et array som skal lagre alt som blir skrevet ut i activityLoggen
    const activityLogEntries = [];
    
    //kjøer updateCardsToDOM for hvert card objekt i Cards[].
    cards.forEach(updateCardsToDOM);

    //Printer ut alt som blir gjort
    function PrintOutActivityLog(handling, item1, item2){
      
        let activityText ="";
        let currentTime = new Date();
        let date = currentTime.getFullYear() + "-" + (currentTime.getMonth()+1) + "-" +currentTime.getDate();
        let time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        let dateTime = date + " " +  time;
        
        switch(handling){
            case "cardMoved": activityText = " flyttet " + item1 + " til " + item2;
                
                break;
                
            case "cardAdded": activityText = " Opprettet kortet " + item1;
       
                break;
                
            case "zoneAdded": activityText = " Opprettet kolonnen " + item1;
                   
                break;
                
            case "cardRemoved": activityText = " Slettet kortet " + item1;
            }
        
         activityLogEntries.push({
            logEntry: activityText,
            logDate: dateTime,
            name: user
            
        });
       renderActivityLogFromArray(activityLogEntries[activityLogEntries.length-1])
            
        }
 
    //tar inn et objekt fra activityLogEntries og rendrer det ut i ActivityLoggen på siden.  
    function renderActivityLogFromArray(entry){
        
        let createLogEntryContainer = document.createElement("DIV");
        let createLogEntryUser = document.createElement("H3");
        let createLogEntry = document.createElement("P");
        let createLogDate = document.createElement("p");
        
        createLogEntryContainer.className ="cm-text-light cm-card-2 cm-shadow-c";
        createLogEntryUser.className ="cm-text-p1";
        createLogEntry.className ="cm-text-p1";
        createLogDate.className ="activity-time cm-text-p1";
        
        createLogEntryUser.innerText = entry.name;
        createLogEntry.innerText = entry.logEntry;
        createLogDate.innerText = entry.logDate;
        
        ActivityEl.appendChild(createLogEntryContainer);
        createLogEntryContainer.appendChild(createLogEntryUser);
        createLogEntryContainer.appendChild(createLogEntry);
        createLogEntryContainer.appendChild(createLogDate);
        
         
        /*
        <div class="cm-text-light cm-card-2 cm-shadow-c">
                    <h3 class="cm-text-p1">Name</h3>
                    <p class="cm-text-p1">Did this</p>
                    <p class="activity-time cm-text-p1">2019-30-14</p>
                </div>
        */
    }

    //gjør ingenting akkurat nå.
    function openCardEdit(event){
    let editCardsWindow = document.getElementById("editCardWindow");
    let buttonElement = document.getElementById("cardEditBtn");
    let TargetCard = event.target.parentElement.parentElement.id;
        editCardsWindow.style.display = "inline";
        
        
        buttonElement.addEventListener("click", function(){
        
        editCardsWindow.style.display = "none";
        
            
        });
    
    console.log("click on " + TargetCard);
          
    }
    
    //Pusher en ny dropZone inn i arrayet DropZones[] og legger det up på siden.
    function AddZone(){
        
        console.log("click Zone");
        var newZone = prompt("title");
    
        dropZones.push(newZone);
        updateDropZonesToDOM(dropZones[dropZones.length-1]);  
        PrintOutActivityLog("zoneAdded", newZone);
    }
    
    //Pusher et nytt kort inn i arrayet Cards[] og legger det up på siden.
    function AddCard(){
        
        console.log("AddCard click");
    
        var newCard = {
    
                name: prompt("Name"),
                description: prompt("des"),
                status: "todo"      
        };
        cards.push(newCard);
        updateCardsToDOM(cards[cards.length-1]);
        
        PrintOutActivityLog("cardAdded", newCard.name);
    }   
    
    //drag start func, som kjøres når man starter å dra
    function dragstart_handler(event) {
     
        if(event.target.id)
        console.log("DRAG");
        console.log("TASK", event.target.id);
        event.dataTransfer.setData("text/plain", event.target.id);
        changeZIndex(event.target.id, "-1"); 
              
    } 
            
    //dragOver start func, som kjøres når man holder det over et som er "dropable"
    function dragover_handler(event) {
        console.log("dragover: " + event.target.id);
        event.preventDefault();
        
    }
    
    //dropHandler, som kjøres når man dropper
    function drop_handler(event) {
        let data = event.dataTransfer.getData("text/plain");
        let card = cards.find(function (enTaskFraArrayet) {
                return enTaskFraArrayet.name === data;
            });   
            //sjekker at det man drar er i cards
        if(cards.includes(card)){


            console.log("DROP");
            event.preventDefault();
        
    
        if (dropZones.includes(event.target.id) && card.status !== event.target.id) {
            let el = document.getElementById(data);
            event.target.appendChild(el);
            card.status = event.target.id;
        }
    
        console.log("CARDS", cards);
        
        PrintOutActivityLog("cardMoved", data, event.target.id);
        changeZIndex(data, "10");
  
       }

    }
    
    //Update DropContainer/render cards from Array
    function updateDropZonesToDOM(dropper) {
        let createColumn = document.createElement("SECTION");
        let createColumnHeader = document.createElement("DIV");
        let createColumnHeaderText = document.createElement("H1");
        let createColumnHeaderBtn = document.createElement("BUTTON");
        let createColumnHeaderBtnIcon = document.createElement("icon"); // Benjamin
        
        createColumn.className = "column";
        createColumnHeader.className = "column-header";
        createColumnHeaderText.className ="column-header-text";
        createColumnHeaderBtn.className = "column-header-btn";
        createColumnHeaderBtnIcon.className = "fas fa-bars"; // klasse fra FontAwesome.com
        
        createColumnHeaderText.innerText = dropper;
        
        mainEl.appendChild(createColumn);
        createColumn.appendChild(createColumnHeader);
        createColumnHeader.appendChild(createColumnHeaderText);
        createColumnHeader.appendChild(createColumnHeaderBtn);
        createColumnHeaderBtn.appendChild(createColumnHeaderBtnIcon); // Benjamin
        
        createColumn.id = dropper;
        
        createColumn.ondragover = dragover_handler;
        createColumn.ondrop = drop_handler;
    }
    
    //Update Cards/render cards from Array, Tar inn et objekt fra cards og lager et kort på siden.
    function updateCardsToDOM(card){
        //opretter alle elementene et "task" kort består av
        let dropZone = document.getElementById(dropZones[0]);
        let createCard = document.createElement("ARTICLE");          
        let createCardHeader = document.createElement("DIV");
        let createCardTitle = document.createElement("H3");
        let createCardTitleBtn = document.createElement("BUTTON");
        const createCardTitleBtnIcon = document.createElement("icon"); // Benjamin
        let createCardContent = document.createElement("DIV");
        let createCardMembersDiv = document.createElement("DIV");
        let createPersonBadge = document.createElement("DIV");
        
        //setter klasse navnene
        createCard.className = "card-project";
        createCardHeader.className = "card-header";
        createCardTitle.className = "card-title";
        createCardTitleBtn.className = "card-title-button";
        createCardTitleBtnIcon.className = "fas fa-ellipsis-h"; // Klasse fra FontAwesome.com
        createCardContent.className = "card-content";
        createCardMembersDiv.className = "card-members superGrid";
        createPersonBadge.className = "person";
        
        createCardTitle.innerText = card.name;
        createPersonBadge.innerText = "FH";
        createCardContent.innerText = card.description;
        
        
        dropZone.appendChild(createCard);
        createCard.appendChild(createCardHeader);
        createCardHeader.appendChild(createCardTitle);
        createCardHeader.appendChild(createCardTitleBtn);
        createCardTitleBtn.appendChild(createCardTitleBtnIcon); // Benjamin
        createCard.appendChild(createCardContent);
        createCard.appendChild(createCardMembersDiv);
        createCardMembersDiv.appendChild(createPersonBadge); // Benjamin: 
        
        createCard.id = card.name;
        createCard.draggable = true;
        createCard.ondragstart = dragstart_handler;
        createCardTitleBtn.onclick = openCardEdit;                          
        
    }

    //endrer zIndex på alle kortene unntatt "currentCard".
    function changeZIndex(currentCard, ZIndex){
        for(var i = 0; i < cards.length; i++){
            
            if(cards[i].name != currentCard && currentCard ){
                let cardsElement = document.getElementById(cards[i].name);
                cardsElement.style.zIndex = ZIndex;
            }
        }
    }
    
    //Kjøres når man dropper et "card" i søppelkassa
    function cardDisposalDrop(event){
        event.preventDefault();
        let cardData = event.dataTransfer.getData("text/plain");
        var findCardInArray = cards.find(function(element) {
              return element.name === cardData;
            });
        changeZIndex(cardData, "10");
        let targetCard = document.getElementById(cardData);
        targetCard.parentNode.removeChild(targetCard);
        cards.splice(cards.indexOf(findCardInArray), 1);
        PrintOutActivityLog("cardRemoved", cardData);
       
        
            
    
                        }
    
    //Kjøres når man dropper et "card" i søppelkassa
    function cardDisposalDragOver(event){
       event.preventDefault();
       event.target.focus();
    }
    
    //add card button/ Push new card in to cars[] and render it
    addCardBtn.addEventListener("click", AddCard);
    
    //add dropZone button
    addZoneBtn.addEventListener("click", AddZone);

    cardDisposal.ondrop = cardDisposalDrop;
    cardDisposal.ondragover = cardDisposalDragOver;


    
    
    
    
