function make_great(magicians: string[]): string[] {
return magicians.map((magician) => `the Great ${magician}`);
}
function show_magicians(magicians: string[]):void {
let greatMagicians = make_great(magicians);
greatMagicians.forEach((magician) => console.log(magician));
}
let magicians: string[] = ["Harry Houdini", "Criss Angel", "David Blaine"];
show_magicians(magicians);