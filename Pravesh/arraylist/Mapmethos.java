package arraylist;
import java.util.*;
import java.util.Map.Entry;
public class Mapmethos {
	public static void main(String[] args) {
		
		Map<Integer,String> m =new HashMap<Integer,String>();
		Map<Integer,String> m1 =new HashMap<Integer,String>();
		m.put(1, "anu");
		m.put(30,"sheena");
		m.put(5,"rohul");
		
		m1.put(1, "anu");
		m1.put(30,"sheena");
		m1.put(5,"rohul");
		Set <Entry<Integer,String>> s=m.entrySet();
		Iterator <Entry<Integer,String>> itr=s.iterator();
		 for (Entry<Integer, String> me:s) {
			System.out.println(me.getValue());
			System.out.println(me.getKey());
			m.putAll(m1);
			//m.remove(m1));	
		}
	}

}
