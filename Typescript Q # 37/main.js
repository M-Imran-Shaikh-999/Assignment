var make_shirt = function (size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("size: ".concat(size, ", Message: \"").concat(message, "\""));
};
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt('Medium');
// small shirt with a different message
make_shirt('Small', 'I love coding!');
