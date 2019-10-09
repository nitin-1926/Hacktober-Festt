package A;

import java.util.*;

 class cls
       
         {

                    Scanner sc=new Scanner(System.in);

                    int a,b,c;
 
                   public void setdata()

                    {
       
                 a=sc.nextInt();
   
                     b=sc.nextInt();

                    }
           
            public void add()
   
                    {
  
                         c=a+b;
   
                        System.out.println(c);
  
                     }

 
                        public void sub()
    
                   {

                           c=a-b;

                           System.out.println(c);

                       }
 
                      public void div()

                       {

                           if(b!=0)

                           {

                              c=a/b;

                           System.out.println(c);
 
                          }

                       }
  
                     public void multi()
   
                    {

                           c=a*b;

                           System.out.println(c);
     
                  }
      
          public static void main(String[] args)
     
           {
            
        cls c=new cls();
 
                   c.setdata();
 
                   c.add();
         
                   c.sub();
    
                   c.div();
    
                   c.multi();
       
         }
                     
       
         }