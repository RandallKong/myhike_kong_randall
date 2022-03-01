//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('./text/nav.html'));
    console.log($('#footerPlaceholder').load('./text/footer.html'));
}
loadSkeleton();  //invoke the function

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


function writeHikeData() {
    max = 3;
     
    var hikesRef = db.collection("hikes");
    for (i = 1; i <= max; i++) {
        hikesRef.add({ 
        code:"id" + i,
        name: "hike" + i,    
        city: "city" + i,
        province: "Province" + i,
        level: "Moderate" + i,
        length: "11 Km" + i,
        details: "The trail first follows ski runs with steep and rocky sections, before heading into a pretty forest." + i
        })
   }
}