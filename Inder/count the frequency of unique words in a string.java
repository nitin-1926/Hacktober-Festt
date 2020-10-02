package string1;
import java.util.*;
public class STRING1 {

    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
                String str=s.nextLine();
                String arr[] = str.split(" ");
                char[] ch=str.toCharArray();
                int[] f=new int[arr.length];
                int i,j,count;
                for(i=0;i<arr.length;i++)
                {
                    f[i]=-1;
                }
                for(i=0;i<arr.length;i++)
                {
                    count=1;
                    for( j=i+1;j<arr.length;j++)
                    {
                        if(arr[i].equals(arr[j]))
                        {
                            count++;
                            f[j]=0;
                        }
                    }
                    if(f[i]!=0)
                    {
                        f[i]=count;
                    }
                }
        for(i=0;i<arr.length;i++)
        {
            if(f[i]!=0)
            {
                System.out.println(arr[i]+"occurs"+f[i]+"times");
            }
        }

    }

}
