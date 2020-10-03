package arraylist;

import java.util.Scanner;

public class Histo {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int arr[]=new int[n];
		for(int i=0;i<n;i++)
		{
			arr[i]=sc.nextInt();
		}
		int area,count,max=0;
		for(int i=0;i<arr.length;i++)
		{
			area=0;
			count=0;
			for(int j=i;j<arr.length;j++)
			{
				int start=i;
				while(start!=0)
				{
					if(arr[start]<arr[i])
					{
						break; 
					}
					else
						count++;
					start--;
				}
				if(arr[j]<arr[i])
				{
					area=arr[i]*count;
					break;
				}
				count++;
			}
			max=Math.max(max,area);
		}
		System.out.println(max);
	}
}
