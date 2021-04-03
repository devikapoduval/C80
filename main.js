name_of_the_student_array=[];

function submit(){
    var display_name=[]
    for (var j =1 ; j<= 4; j++) {
      var name_of_student=document.getElementById("name_of_the_student_"+j).value;
      console.log(name_of_student)
        name_of_the_student_array.push(name_of_student)
    }
    console.log(name_of_the_student_array);

var length_of_array=name_of_the_student_array.length;
console.log(length_of_array)

for ( var k = 0; k < length_of_array; k++) {
   display_name.push("<h4> NAME -"+name_of_the_student_array[k]+"</h4>") 
    console.log(display_name)
}
console.log(display_name);
document.getElementById("display_name_with_commas").innerHTML=display_name;

var without_comma=display_name.join(" ")
console.log(without_comma)
document.getElementById("display_name_without_commas").innerHTML=without_comma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
name_of_the_student_array.sort();
console.log (name_of_the_student_array)

var display_name_sorting=[]

var length_of_array=name_of_the_student_array.length;
console.log(length_of_array)

for ( var k = 0; k < length_of_array; k++) {
   display_name_sorting.push("<h4> NAME -"+name_of_the_student_array[k]+"</h4>") 
    console.log(display_name_sorting)
}
console.log(display_name_sorting);

without_comma=display_name_sorting.join(" ")
console.log(without_comma)
document.getElementById("display_name_without_commas").innerHTML=without_comma;
}