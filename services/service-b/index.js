const { packageB } = require('package-b');
const { packageC } = require('package-c');

const serviceB = () => {
    const resultB = packageB();
    console.log(`B: ${resultB}`);

    const resultC = packageC();
    console.log(`C: ${resultC}`);
};

serviceB();
