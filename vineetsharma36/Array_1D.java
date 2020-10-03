//Question link: https://www.hackerrank.com/challenges/java-1d-array/problem

import java.util.*;

public class Solution {

    public static boolean canWin(int leap, int[] game) {
        int l=game.length;
        int index=0;
        int i=0;boolean flag=true;
        if (leap>l)
        return flag;
        while(i<l)
        {
            if (game[i]==0)
            {
                i++;
            }
            else
            {
                index=i;
                break;
            }
            index=i;
        }
        if((l-index)<leap)
            return true;
        else 
        {
            for(int j=index;j<l-leap;j++)
            {
                if(game[j+leap]==0)
                {
                    index=j+leap;

                }
                else if(game[j]==0)
                j++;
                else if(j<l-leap)
                flag=false;
            }
        }
            return flag;
        // Return true if you can win the game; otherwise, return false.
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int q = scan.nextInt();
        while (q-- > 0) {
            int n = scan.nextInt();
            int leap = scan.nextInt();

            int[] game = new int[n];
            for (int i = 0; i < n; i++) {
                game[i] = scan.nextInt();
            }

            System.out.println( (canWin(leap, game)) ? "YES" : "NO" );
        }
        scan.close();
    }
}
