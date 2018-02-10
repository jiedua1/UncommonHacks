var textBox = document.getElementById("textBox");

function submit() {
  var fireBaseRef = firebase.database().ref();
  if(textBox.value !== "") {
    fireBaseRef.child("imageURL").set(textBox.value);
  }
}

var playersRef = firebase.database().ref("players/");
playersRef.set ({
   John: {
      number: 1,
      age: 30,
      children: {
        child1: "Bob"
      }
   },

   Amanda: {
      number: 2,
      age: 20,
      children: {
        child1: "Amanda Jr.",
        child2: "Billy"
      }
   }
});
