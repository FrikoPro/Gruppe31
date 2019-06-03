//var currentUserCookie = getCookie("currentUser").split("[?]");
//var currentUser =  {name: currentUserCookie[0], firstName: currentUserCookie[1], lastName: currentUserCookie[2], password: currentUserCookie[3]}
//Current User
    
    var cardCounter = 0;
    var zoneCounter = 3;
    var user = "Fredrik";
    //dropZones array
    const dropZones = [
        {name: "todo", elementId: "zone0"},
        {name: "doing", elementId: "zone1"},
        {name: "done", elementId: "zone2"}
       
    ];
    //card[] array med alle card objektene
    const cards = [];
    //et array som skal lagre alt som blir skrevet ut i activityLoggen
    const activityLogEntries = [];

    //Addcard button Element
    var addCardBtn = document.getElementById("addCard");
    //addRow Button Element
    var addZoneBtn = document.getElementById("addRow");
    
    //Elementet til knappen man kan dra kort til, for å slette.
    var cardDisposal = document.getElementById("cardDisposal");

    var ActivityEl = document.getElementById("activityContainer");
    
    //Container Element der alle Drop Sonene skal opprettes.
    const mainEl = document.getElementById("main");
    
    //body element
    var bodyEl = document.getElementsByTagName("BODY")[0];
       
    //looper gjennom alle variablene i dropzones og kjører addDropZonesToDOM for hver av dem.
    dropZones.forEach(addDropZonesToDOM);
          
    //kjøer addCardsToDOM for hvert card objekt i Cards[].
    cards.forEach(addCardsToDOM);

    // tar inn handling som sier hva som har blitt gjort og item1 og 2 ettersom hvilke elementer som har vært involvert.
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
                break;
                
            case "edited": activityText = " Endret navn på " + item1 + " til " + item2;
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

    //func som kjører når man trykker på CardEdit
    function onCardClick(event){
        let targetCard = event.currentTarget.parentNode.parentNode;
        let targetCardObj = getCardObjectById(targetCard.id);
        updateCard(targetCardObj, false);
        
    }

    //kjøres når man redigerer på et kort
    function updateCard(cardObj, isNewCard){
        let cardEl = document.getElementById(cardObj.elementId);
        
        let backgroundBlocker = document.createElement("DIV");
        let editCardsWindow = document.createElement("DIV");
        let buttonElement = document.createElement("button");
        let cardEditHeader = document.createElement("H2");
        let cardEditDes = document.createElement("DIV");
        let cardEditDesText = document.createElement("P");
        
        cardEditDes.id = "des";
        cardEditDesText.id ="des-text";
        backgroundBlocker.id = "backgroundBlocker";
        editCardsWindow.id ="editCardWindow";
        buttonElement.id = "cardEditBtn";
        cardEditHeader.id ="card-Name";
        cardEditHeader.className ="edit-Name";
        
        
        buttonElement.innerText = "Save";
        cardEditHeader.innerText = getCardObjectById(cardEl.id).name; 
        cardEditHeader.contentEditable = true;
        cardEditDesText.innerText = getCardObjectById(cardEl.id).description;
        cardEditDesText.contentEditable = true;
        
        
        console.log(cardEditDesText.innerText);
        bodyEl.appendChild(backgroundBlocker);
        bodyEl.appendChild(editCardsWindow);
        editCardsWindow.appendChild(cardEditHeader);
        editCardsWindow.appendChild(cardEditDes);
        cardEditDes.appendChild(cardEditDesText);
        editCardsWindow.appendChild(buttonElement);
        
        /*
        <div id="editCardWindow">
        <h2 id="card-Name">Card Name</h2>
        <div id="des"><p id="des-text">Card Des</p></div>
        <button id="cardEditBtn">Save</button>
    </div>
        */
           
        
        buttonElement.addEventListener("click", function(){
            
            let nameBeforeEdit = getCardObjectById(cardEl.id).name; //name before Edit
            let cardNameEl = cardEl.querySelector(".card-title");
            let desTextEl = cardEl.querySelector(".card-content");
            
            //oppdaterer kortet sitt object med Endringene som har blitt gjort
            getCardObjectById(cardEl.id).name = cardEditHeader.innerText;
            getCardObjectById(cardEl.id).description = cardEditDesText.innerText;
            
            //oppdaterer kortet på siden med de nye endringene
            cardNameEl.innerText = cardObj.name;
            desTextEl.innerText = cardObj.description;
            
            editCardsWindow.parentNode.removeChild(editCardsWindow);
            backgroundBlocker.parentNode.removeChild(backgroundBlocker);
            if(isNewCard){
                PrintOutActivityLog("cardAdded", cardObj.name);
               }else{
                   PrintOutActivityLog("edited", nameBeforeEdit, cardObj.name)
               }
                
            });
          
         
    }
    
    //kjøres når man redigerer på en zone/kolonne
    function updateDropZone(zoneObj, isNewZone){
        
        let backgroundBlocker = document.createElement("DIV"); 
        let editZoneWindow = document.createElement("DIV");
        let editZoneHeader = document.createElement("H2");
        let editZoneBtn = document.createElement("BUTTON");
        
        backgroundBlocker.id = "backgroundBlocker";
        editZoneWindow.id = "editZoneWindow";
        editZoneHeader.id= "zone-Name";
        editZoneHeader.className = "edit-Name";
        editZoneBtn.id = "zoneEditBtn";
        
        bodyEl.appendChild(backgroundBlocker);
        bodyEl.appendChild(editZoneWindow);
        editZoneWindow.appendChild(editZoneHeader);
        editZoneWindow.appendChild(editZoneBtn);
        editZoneHeader.innerText = zoneObj.name;
        editZoneHeader.contentEditable = true;
        editZoneBtn.innerText = "Save";
        
        editZoneBtn.addEventListener("click", function(){
            let nameBeforeEdit = zoneObj.name;
            let zoneElement = document.getElementById(zoneObj.elementId);
            let zoneNameEl = zoneElement.querySelector(".column-header-text");
            
            zoneObj.name = editZoneHeader.innerText;
            zoneNameEl.innerText = editZoneHeader.innerText;
            
            if(isNewZone){
                PrintOutActivityLog("zoneAdded", zoneObj.name);
               }else{
                   PrintOutActivityLog("edited", nameBeforeEdit, zoneObj.name)
               }
            editZoneWindow.parentNode.removeChild(editZoneWindow);
            backgroundBlocker.parentNode.removeChild(backgroundBlocker);
            
        });
        
        
        /* <div id="editZoneWindow">
        <h2 id="">ZoneName</h2>
        <button id="zoneEditBtn">Save</button>
    </div>
    */
    }
    
    //Pusher en ny dropZone inn i arrayet DropZones[] og legger det up på siden.
    function AddZone(){
        
        console.log("click Zone");
        var newZone = {name: "NewZone", elementId: "zone" + zoneCounter.toString()};
        zoneCounter++;
        dropZones.push(newZone);
        addDropZonesToDOM(dropZones[dropZones.length-1]);
        updateDropZone(dropZones[dropZones.length-1], true);
        
        
    }
    
    //Pusher et nytt kort inn i arrayet Cards[] og legger det up på siden.
    function AddCard(){
        
        console.log("AddCard click");
        
        var newCard = {
    
                name: "New Card",
                description: "Card Content",
                status: "zone0",
                elementId: "card" + cardCounter 
        };
          
        
        cards.push(newCard);
        addCardsToDOM(cards[cards.length-1]);
        updateCard(cards[cards.length-1], true);
        
        cardCounter++;
    }   
    
    //drag start func, som kjøres når man starter å dra
    function dragstart_handler(event) {
     
        console.log("DRAG");
        console.log("TASK", event.target.id);
        event.dataTransfer.setData("text/plain", event.target.id);
        console.log("dragStart: " + event.target.id);
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
        let card = getCardObjectById(data);  
        event.preventDefault();
            
        //sjekker at det man drar er i cards
        if(cards.includes(card)){
           
            //sjekker at dropsonen er i arryet dropZones[] og at kortet ikke ble droppet i den sonen den allerede var i
        if(dropZones.includes(getZoneObjectById(event.target.id))&&(card.status !== event.target.id)) {
            let el = document.getElementById(data);
            event.target.appendChild(el);
            card.status = event.target.id;
            PrintOutActivityLog("cardMoved", getCardObjectById(data).name, getZoneObjectById(event.target.id).name);
        }

       }
            changeZIndex(data, "10");
    }
    
    //Update DropContainer/render cards from Array
    function addDropZonesToDOM(dropper) {
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
        
        createColumnHeaderText.innerText = dropper.name;
        
        mainEl.appendChild(createColumn);
        createColumn.appendChild(createColumnHeader);
        createColumnHeader.appendChild(createColumnHeaderText);
        createColumnHeader.appendChild(createColumnHeaderBtn);
        createColumnHeaderBtn.appendChild(createColumnHeaderBtnIcon); // Benjamin
        
        createColumn.id = dropper.elementId;
        
        createColumn.ondragover = dragover_handler;
        createColumn.ondrop = drop_handler;
    }
    
    //Update Cards/render cards from Array, Tar inn et objekt fra cards og lager et kort på siden.
    function addCardsToDOM(card){
        //opretter alle elementene et "task" kort består av
        let dropZone = document.getElementById(card.status);
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
        createCardTitleBtnIcon.style.zIndex ="10";
        
        dropZone.appendChild(createCard);
        createCard.appendChild(createCardHeader);
        createCardHeader.appendChild(createCardTitle);
        createCardHeader.appendChild(createCardTitleBtn);
        createCardTitleBtn.appendChild(createCardTitleBtnIcon); // Benjamin
        createCard.appendChild(createCardContent);
        createCard.appendChild(createCardMembersDiv);
        createCardMembersDiv.appendChild(createPersonBadge); // Benjamin: 
        
        createCard.id = card.elementId;
        createCard.draggable = true;
        createCard.ondragstart = dragstart_handler;
        createCardTitleBtn.onclick = onCardClick;                          
        console.log(card.elementId);
     }

    //endrer zIndex på alle kortene unntatt "currentCard".
    function changeZIndex(currentCard, ZIndex){
        
        let columnHeaders = mainEl.querySelectorAll(".column-header");
            
        for(var i = 0; i < columnHeaders.length; i++){
            columnHeaders[i].style.zIndex = ZIndex;
        }
        for(var i = 0; i < cards.length; i++){
            if(cards[i].elementId != currentCard){
                let cardsElement = document.getElementById(cards[i].elementId);
                cardsElement.style.zIndex = ZIndex;
                
            }
        }
    }
    
    //Kjøres når man dropper et "card" i søppelkassa
    function cardDisposalDrop(event){
        event.preventDefault();
        let cardData = event.dataTransfer.getData("text/plain");
        
        changeZIndex(cardData, "10");
        deleteCard(cardData);
    }
    
    //tar inn element IDen til et kort og sletter det fra Siden og i Cards[] Arrayet.
    function deleteCard(cardId){
        let targetCard = document.getElementById(cardId);
        let currentCardObj = getCardObjectById(cardId);
        
        targetCard.parentNode.removeChild(targetCard);
        cards.splice(cards.indexOf(currentCardObj), 1);
        PrintOutActivityLog("cardRemoved", currentCardObj.name);
    }
    
    //Kjøres når man Holder et "card" over søppelkassa
    function cardDisposalDragOver(event){
       event.preventDefault();
      
    }
    
    //skriver inn element Iden og får returnert objektet til kortet
    function getCardObjectById(cId){
         for(var i = 0; i <cards.length; i++){
             
             if(cards[i].elementId == cId){
                 return cards[i];
             }
         }
    }
    
    //skriver inn element Iden og får returnert objektet til sonen/kolonnen
    function getZoneObjectById(zId){
        for(var i = 0; i < dropZones.length; i++){ 
             if(dropZones[i].elementId == zId){
                 return dropZones[i];
             } 
         }
        return {name: "feil"};
    }
    
    addCardBtn.addEventListener("click", AddCard);
    
    //add dropZone button
    addZoneBtn.addEventListener("click", AddZone);

    cardDisposal.ondrop = cardDisposalDrop;
    cardDisposal.ondragover = cardDisposalDragOver;
