package arraylist;

import java.util.LinkedList;

public class Llist {
public static void main(String[] args)
{
	LinkedList l=new LinkedList();
	l.addFirst(1);
	l.addFirst(3);
	l.addLast(2);
	System.out.println(l.getFirst());
	System.out.println(l.getLast());
	System.out.println(l.removeFirst());
	System.out.println(l.removeLast());
}
}
