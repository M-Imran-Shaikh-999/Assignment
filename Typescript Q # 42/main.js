function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
function show_magicians(magicians) {
    var greatMagicians = make_great(magicians);
    greatMagicians.forEach(function (magician) { return console.log(magician); });
}
var magicians = ["Harry Houdini", "Criss Angel", "David Blaine"];
show_magicians(magicians);
