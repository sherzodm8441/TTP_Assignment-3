//Select the section with an id of container without using querySelector.
var a = document.getElementById("container");
console.log(a);

//Select the section with an id of container using querySelector.
var b = document.querySelector("#container");
console.log(b);

//Select all of the list items with a class of "second".
var c = document.getElementsByClassName("second");
console.log(c[0], c[1]);

//Select a list item with a class of third, but only the list item inside of the ol tag.
var d = document.querySelector("ol").querySelector(".third");
console.log(d);

//Give the section with an id of container the text "Hello!".
a.innerText = "Hello";

//Add the class main to the div with a class of footer.
var e = document.querySelector(".footer");
console.log(e);

//Remove the class main on the div with a class of footer.
e.className = "main";
console.log(e);
e.removeAttribute("class");
console.log(e);

//Create a new li element.
//Give the li the text "four".
var f = document.createElement("li");
f.textContent = "four";
console.log(f);

//Append the li to the ul element.
var g = document.querySelector("ul");
g.append(f);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
var h = document.querySelector("ol");
var i = h.getElementsByTagName("li");
console.log(i);

for (let index = 0; index < i.length; index++) {
    i[index].style.backgroundColor = "green";
}
//Remove the div with a class of footer.
e.remove();