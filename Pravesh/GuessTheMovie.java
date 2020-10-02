import java.io.File;
import java.util.*;
public class GuessTheMovie {
    public static void main(String[] args) throws Exception{
       File file=new File("GuessTheMovie.txt");
       Scanner sc = new Scanner(file);
       Scanner input = new Scanner(System.in);
       String movies[] = new String[26];
       int i=0;
       while(sc.hasNextLine()){
           movies[i]=sc.nextLine();
           i++;
       }
       int index=(int)((Math.random()*3)+1);
       if(index>25){
           index=25;
       }
       String Myguess=movies[index];
       Myguess=Myguess.replaceAll("\\s","");
       int MyguessCharacter=Myguess.length();
       char guess[] = new char[MyguessCharacter];
       for( i=0;i<MyguessCharacter;i++){
           guess[i]='-';
       }
       int j=0;
       int indexinmovie;
       while(j<MyguessCharacter){
           System.out.println("\nEnter the word");
           char letter;
           letter=input.next().charAt(0);
           for(int k=0;k<MyguessCharacter;k++){
               if(letter==Myguess.charAt(k)&&guess[k]!=letter){
                   indexinmovie=k;
                   guess[indexinmovie]=Myguess.charAt(k);
                   j++;
               }

           }
           for(int k=0;k<MyguessCharacter;k++)
               System.out.print(guess[k]);
       }
        System.out.println("\nThe movie is ");
       for(int k=0;k<MyguessCharacter;k++)
           System.out.print(guess[k]);
    }
}