class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        a,b = 0,0
        l = len(colors)
        for i in range(1, l-1):
            if(colors[i] == "A" and colors[i+1] == "A" and colors[i-1 ] == "A"):
                a += 1
            elif(colors[i] == "B" and colors[i+1] == "B" and colors[i-1 ] == "B"):
                b += 1
        return a>b