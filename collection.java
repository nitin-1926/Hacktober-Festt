import java.util.*; 
  
public class ListDemo 
{ 
    public static void main (String[] args) 
    { 
        List<Integer> l1 = new ArrayList<Integer>(); 
        l1.add(0, 1);   
        l1.add(1, 2);   
        System.out.println(l1); 
        List<Integer> l2 = new ArrayList<Integer>(); 
        l2.add(1); 
        l2.add(2); 
        l2.add(3);  
        l1.addAll(1, l2); 
        System.out.println(l1);  
        l1.remove(1);      
        System.out.println(l1);
        System.out.println(l1.get(3));  
        l1.set(0, 5);    
        System.out.println(l1);  
    } 
} 


import java.util.*; 
public class Set_example 
{ 
    public static void main(String[] args) 
    { 
        Set<String> hash_Set = new HashSet<String>(); 
        hash_Set.add("Geeks"); 
        hash_Set.add("For"); 
        hash_Set.add("Geeks"); 
        hash_Set.add("Example"); 
        hash_Set.add("Set"); 
        System.out.print("Set output without the duplicates"); 
  
        System.out.println(hash_Set); 
  
        System.out.print("Sorted Set after passing into TreeSet"); 
        Set<String> tree_Set = new TreeSet<String>(hash_Set); 
        System.out.println(tree_Set); 
    } 
}


import java.util.LinkedList; 
import java.util.Queue; 
  
public class QueueExample 
{ 
  public static void main(String[] args) 
  { 
    Queue<Integer> q = new LinkedList<>(); 
  
    for (int i=0; i<5; i++) 
     q.add(i); 
  
    System.out.println("Elements of queue-"+q); 
  
    int removedele = q.remove(); 
    System.out.println("removed element-" + removedele); 
  
    System.out.println(q); 
  
    int head = q.peek(); 
    System.out.println("head of queue-" + head); 
  
    int size = q.size(); 
    System.out.println("Size of queue-" + size); 
  } 
} 