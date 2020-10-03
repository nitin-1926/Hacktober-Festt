package arraylist;

import java.util.ArrayList;

public class Alist {
public static void main(String args[])
{
	ArrayList al=new ArrayList();
	System.out.println(al.add("java class"));
	al.add(100);
	al.add(200.5);
	al.add("March");
	al.add(2);
	System.out.println(al);
	System.out.println(al.remove("March"));
	System.out.println(al);
	Integer i=new Integer (2);
	al.remove(i);
	System.out.println(al);
}
}
