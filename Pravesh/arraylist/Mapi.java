package arraylist;
import java.security.KeyStore.Entry;
import java.util.*;
public class Mapi {

	public static void main(String[] args) {
		HashMap<Integer,String> m=new HashMap<Integer,String>();
		m.put(1,"anu");
		m.put(12,"sheena");
		m.put(5,"rahul");
		Set<java.util.Map.Entry<Integer, String>> s=m.entrySet();
		Iterator<java.util.Map.Entry<Integer, String>> itr=s.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
	}
}
