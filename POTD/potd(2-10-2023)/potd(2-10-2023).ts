// POD- Leet Code (2-10-2023)
function winnerOfGame(colors: string): boolean {
    let a:number = 0;
    let b:number = 0;

    for(let i=1; i<colors.length - 1; i++){
        let currChar:string = colors[i];
        if(currChar == 'A' && currChar == colors[i-1] && currChar == colors[i+1]){
            a += 1;
        }else if(currChar == 'B' && currChar == colors[i-1] && currChar == colors[i+1]){
            b += 1;
        }
    }
    console.log(a, b);
    return a > b;
};