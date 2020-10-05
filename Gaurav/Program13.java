class Counting{
    void Break(){
        System.out.println("Implementation of Break.");
        for (int i=1;i<=10;i++){
            if (i==5){
                break;
            }
            System.out.print(i+"\t");
        }
    }
    void Continue(){
        System.out.println("\nImplementation of Continue.");
        for (int i=1;i<=10;i++){
            if (i==5){
                continue;
            }
            System.out.print(i+"\t");
        }
    }
}
class Main{
    public static void main(String args[]){
        Counting c = new Counting();
        c.Break();
        c.Continue();
    };
}
