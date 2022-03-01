function read_display_Quote() {
    db.collection("quotes").doc("tuesday")                                                     
      .onSnapshot(TuesdayDoc => {                                                           
           console.log("current document data: " + TuesdayDoc.data());                      
           document.getElementById("quote-goes-here").innerHTML = TuesdayDoc.data().quote;     
          
      })
}
read_display_Quote()     


db.collection("quotes").doc("tuesday")
  .get()
  .then(
   snap => {                       //input arg "snap" is snapshot return from get()
     console.log(snap.data());     //print key value pairs
   });


   function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {                                                                 
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
                  .then(userDoc => {
               var user_Name = userDoc.data().name;
               console.log(user_Name);
               //method #1:  insert with html only
               //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
               //method #2:  insert using jquery
               $("#name-goes-here").text(user_Name);                         //using jquery
            })
        } else {
            // No user is signed in.
        }
    });
}
insertName();   

function writeHikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("hikes");

    hikesRef.add({
        code:"Hike #1",
        name: "St. Mark’s Summit Trail",   
        province: "BC",
        level: "Moderate",
        length: "11 km",
        details: "The trail first follows ski runs with steep and rocky sections, before heading into a pretty forest."
    });
    hikesRef.add({
        code:"Hike #2",
        name: "Eagle Bluffs Trail",   
        city: "Vancouver",
        province: "BC",
        level: "moderate",
        length: "8 km",
        details: "This trail begins with a grueling ascent to Cabin Lake, which you can jump in to cool off."
    });
    hikesRef.add({
        code:"Hike #3",
        name: "Dog Mountain Trail",    
        city: "Vancouver",
        province: "BC",
        level: "Easy",
        length: "5 km",
        details: "You’ll be greeted with a stunning view of Metro Vancouver at the top of Dog Mountain."
    });
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("hikeCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;   // get value of the "name" key
                var details = doc.data().details;   // get value of the "details" key
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = "./images/ " + collection + ".jpg";

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

displayCards("hikes");