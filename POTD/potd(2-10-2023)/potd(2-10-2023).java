class Solution {
    public boolean winnerOfGame(String colors) {
        int a = 0;
        int b = 0;
        for(int i=1; i<colors.length() -1 ; i++){
            char currentChar = colors.charAt(i);
            
            if (currentChar == 'A' && colors.charAt(i - 1) == 'A' && colors.charAt(i + 1) == 'A') {
                a++;
            } else if (currentChar == 'B' && colors.charAt(i - 1) == 'B' && colors.charAt(i + 1) == 'B') {
                b++;
            }
        }
        return a > b;
    }
}