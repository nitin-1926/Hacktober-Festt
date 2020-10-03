package arraylist;

import java.util.*;  
class Empi implements Comparable<Empi>{
	int empId;
	String name;
	Empi(int empId,String name)
	{
		this.empId=empId;
		this.name=name;
	}	
	public int compareTo(Empi obj) {
		if(this.empId==obj.empId)
			return(this.name.compareTo(obj.name));
		else
		return(this.empId-obj.empId);
	}
	public String toString()
	{
		return this.empId+""+this.name;
	}
	
}
public class Sorti {
	public static void main(String args[]) {
		
Empi obj1=new Empi(3,"anu");
Empi obj2=new Empi(2,"sheena");
Empi obj3=new Empi(3,"riya");
Empi arremp[]= {obj1,obj2,obj3};
Arrays.sort(arremp);
for(Empi obj:arremp){  
	System.out.println(obj.empId+" "+obj.name); 
}}
}