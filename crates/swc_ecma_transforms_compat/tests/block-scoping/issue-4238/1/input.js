out: for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; ++j) {
        if (i < 2) continue out;

        [1].forEach((_) => {
            console.log(i, j);
        });
    }
}
