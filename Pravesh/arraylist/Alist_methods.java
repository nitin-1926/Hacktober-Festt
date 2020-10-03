package arraylist;

import java.util.ArrayList;

public class Alist_methods {

	public static void main(String[] args) {
		ArrayList al1=new ArrayList();
		ArrayList al2=new ArrayList();
		ArrayList al3=new ArrayList();
		al1.add(1);
		al1.add(2);
		al3.add(10);
		al2.add(3);
		al2.add(4);
		al1.add(2,3);
		System.out.println(al1);
		al1.addAll(al2);
		System.out.println(al1);
		al1.addAll(4,al3);
		System.out.println(al1);
		al1.remove(2);
		System.out.println(al1);
		Integer i=new Integer(10);
		al1.remove(i);
		System.out.println(al1);
		Integer j=new Integer(4);
		al1.indexOf(j);
		System.out.println(al1);
		Integer k=new Integer(3);
		al1.lastIndexOf(k);
		System.out.println(al1);
		System.out.println(al1.contains(k));
		System.out.println(al1.containsAll(al2));
		System.out.println(al1.isEmpty());
		System.out.println(al1.size());
	}

}
