class Solution
{
public:
    bool winnerOfGame(string colors)
    {
        int a = 0;
        int b = 0;
        for (int i = 1; i < colors.length() - 1; i++)
        {
            char currentChar = colors[i];
            if (currentChar == 'A' && colors[i - 1] == 'A' && colors[i + 1] == 'A')
            {
                a++;
            }
            else if (currentChar == 'B' && colors[i - 1] == 'B' && colors[i + 1] == 'B')
            {
                b++;
            }
        }

        return a > b;
    }
};