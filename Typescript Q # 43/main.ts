function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
   }

 function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Harry Houdini", "Criss Angel","David Blaine"];
let copy_magician_names = magician_names.slice();
let copy_great_magicians = make_great(copy_magician_names);

console.log("original Array \n")
show_magicians(magician_names);

console.log("\ Copied Array \n")
show_magicians(copy_great_magicians)

