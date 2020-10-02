import java.util.Scanner;
import java.lang.*;
// Other imports go here
// Do NOT change the class name
class Search <T extends Comparable<T>>
{
   public  T arr[];
   public int count=0,pint=0,flag=0;
   public T arr1[];
   public T a;
    Search(T arr[], T arr1[]){
        this.arr=arr;
        this.arr1=arr1;
    }
    public int get(){
        for(int i=0;i<5;i++)
        {
            if(arr[i].compareTo(arr1[i])>0)
            {
                count++;
            }
            if(arr[i].compareTo(arr1[i])<0)
            {
                pint++;
            }
        }
        if(count>pint)
        {
            flag=count;
            System.out.println("First Array is big with-"+flag+" elements");
        }
        else if(count<pint)
        {
            flag=pint;
            System.out.println("Second  Array is big with-" +flag+" elements");

        }
        return flag;
    }
}



class Main
{
    public static void main(String[] args)
    {
        // Write your code here
        Scanner sc = new Scanner(System.in);
        
        Integer array[]= new Integer[5];
        Integer array1[]= new Integer[5];
        for(int i=0;i<5;i++)
        {
            array[i]=sc.nextInt();
            
        }
        for(int i=0;i<5;i++)
        {
            array1[i]=sc.nextInt();
            
        }
        
        Search<Integer> s1 = new Search<Integer>(array,array1);
        s1.get();
        
    }
    }