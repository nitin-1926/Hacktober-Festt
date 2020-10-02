class GFG { 
  
    public static String swapPair(String str) 
    { 
  
        if (str == null || str.isEmpty()) 
            return str; 
        char[] ch = str.toCharArray(); 
        for (int i = 0; i < ch.length - 1; i += 2) { 
  
            // Swapping the characters 
            char temp = ch[i]; 
            ch[i] = ch[i + 1]; 
            ch[i + 1] = temp; 
        } 
        return new String(ch); 
    } 
    public static void main(String args[]) 
    { 
        String str = "GeeksForGeeks"; 
        System.out.println(swapPair(str)); 
    } 
