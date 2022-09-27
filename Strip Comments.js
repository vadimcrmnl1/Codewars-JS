function solution(input, markers) {
    let isFounded = false;
    let letters = input.split('');
    let stripped = letters.reduce((acc , letter) => {
        if(markers.includes(letter)) isFounded = true;
        if(isFounded && letter === '\n') isFounded = false;
        if(!isFounded) acc.push(letter)
        return acc;
    }, [])

    return stripped.join('').replace(/\s\n/ , '\n').trim();
};