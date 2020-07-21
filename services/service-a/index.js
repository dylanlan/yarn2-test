const { packageA } = require('package-a');
const { packageC } = require('package-c');

const serviceA = () => {
    const resultA = packageA();
    console.log(`A: ${resultA}`);

    const resultC = packageC();
    console.log(`C: ${resultC}`);
};

serviceA();
