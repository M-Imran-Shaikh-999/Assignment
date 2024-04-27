const make_shirt = (size: string = 'Large',message: string = 'I love TypeScript'): void => {
console.log(`size: ${size}, Message: "${message}"`);
};

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt('Medium');

// small shirt with a different message
make_shirt('Small', 'I love coding!');

