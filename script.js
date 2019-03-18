var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var item = document.getElementById("elem");
var h = document.getElementById("prio high");
var i;

//check if input field is empty//
function inputLength() {
	return input.value.length;
}

//add new item to the bottom of the list//
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));	
  ul.appendChild(li);
  li.id = "elem";
  li.contentEditable = true;
	
	var done = document.createElement("button");
	var txt = document.createTextNode("\u2713");
	done.className = "line";
	done.contentEditable = false;
  done.appendChild(txt)
  li.appendChild(done);
	
  var fini = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  fini.className = "close";
  fini.appendChild(txt)
  li.appendChild(fini);
	
  input.value = "";
	
  delBtn();
  strike();
}

//if input field value is > 0 then add list item on click//
function addListAfterClick() {
  if (inputLength() > 0) {
		createListElement();
	}
}

//if input field value is > 0 then add list item on keypress//
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//listener for when button to add list item is clicked//
button.addEventListener("click", addListAfterClick);

//listener for when key is pressed to add list item//
input.addEventListener("keypress", addListAfterKeypress);

//remove new list item when close button is clicked//
function delBtn(){
	var delBtn = document.getElementsByClassName("close");
    for (i = 0; i < delBtn.length; i++) {
      delBtn[i].onclick = function() {
        this.parentNode.remove()
    }
  }
}

//add line-through when list item is clicked//
function strike(){
	var strike = document.getElementsByClassName("line");
		for( i=0; i < strike.length; i++){
			strike[i].onclick = function() {
        this.parentNode.classList.toggle('done');
    }
	}
}