// import java.awt.event.KeyEvent;
// import java.awt.event.KeyListener;
import java.util.*;

class Board{
  public int row = 20,col = 20;
  public char ar[][] = new char [row][col];
  Board(){
    for(int i =0;i < row ;i++){
      for(int j = 0;j< col; j++){
        if(i==0 || j==0 || i==row-1 || j==col-1)
          ar[i][j] = '*';
        else
          ar[i][j]= ' ' ;
      }
    }
  }
  public void printBoard(){
    for(int i = row-1; i>=0;i--)
    {
      for (int j = 0; j < col; j++){
        System.out.print(ar[i][j] );
      }
      System.out.println(i);
    }
  }

  public void deleteRow(){
    for(int i = 1;i<row -1;i++){
      int flag = 1;
      for(int j=1;j<col-1;j++){
        if(this.ar[i][j] != '#'){
          flag = 0;break;
        }
      }
      if(flag == 1){
        // for(int j =1;j<col-1;j++){
        //   this.ar[i][j] = ' ';
        // }
        for(int k=i;k<row-2;k++){
          for(int j=0;j<col;j++){
            this.ar[k][j] = this.ar[k+1][j];
          }
        }
      }
    }
  }

  public int canMove(Shape shape,int ver,Point p){
    int flag = 1;
    for(int j=0;j<4;j++){
      if(ar[shape.version[ver][j].x + p.x][shape.version[ver][j].y + p.y] != ' '){
        flag = 0;
        break;
      }
    }
    return flag;
  }

  public void moveUp(Shape shape,int ver, Point p){
    clearBoardOnRotate(shape, p, ver);
    p.x = p.x +1;
    this.draw(shape, p, ver);
    this.printBoard();
  }

  public void moveRight(Shape shape, int ver, Point p){
    clearBoardOnRotate(shape, p, ver);
    p.y = p.y+1;
    if(canMove(shape,ver,p)==0){
      p.y = p.y - 1;
    }
    this.draw(shape, p, ver);
  }

  public void moveLeft(Shape shape, int ver, Point p) {
    clearBoardOnRotate(shape, p, ver);
    p.y = p.y - 1;
    if (canMove(shape, ver, p) == 0) {
      p.y = p.y + 1;
    }
    this.draw(shape, p, ver);
  }

  public int moveDown(Shape shape, int ver, Point p) {
    int flag = 1;
    clearBoardOnRotate(shape, p, ver);
    p.x = p.x - 1;
    if (canMove(shape, ver, p) == 0) {
      p.x = p.x + 1;
      flag = 0;
    } 
    this.draw(shape, p, ver);
    return flag;
  }

  public void clearBoardOnRotate(Shape shape, Point p, int version) {
    for (int i = 0; i < 4; i++) {
      this.ar[shape.version[version][i].x + p.x][shape.version[version][i].y + p.y] = ' ';
    }
  }

  public void draw(Shape shape, Point p, int version){
    for(int i=0; i<4; i++){
      this.ar[shape.version[version][i].x+p.x][shape.version[version][i].y+p.y] = '#'; 
    }
  }
}

class Point{
  public int x,y;

  Point(int x, int y){
    this.x = x;
    this.y = y;
  }
}

class Shape{
  public Point version[][];
  // public int currentShape;
  // public Point currentLocation;
  // public int ver;
  // public Shape(int s, Point l, int v){
  //   currentShape = s;
  //   currentLocation = l;
  //   ver = v;
  // }
  public Shape(){
  }
  public Shape(Shape shape){
    for(int i=0;i<version.length;i++){
      for(int j=0;j<4;j++){
        this.version[i][j] = new Point(shape.version[i][j].x,shape.version[i][j].y);
      }
    }
  }
}

// interface ActionStack {
//   public class ShapeObject{
//     Point location;
//     int shape;
//     int version;
//   }
//   char actions[] = new char[40];

//   public void push(char action);
//   public int pop();
// }

public class Tetris {


  public static void clearScreen() {
    System.out.print("\033[H\033[2J");
    System.out.flush();
  }

  // public void push(char action){

  // }

  public static void main(String args[]){
 

    Shape shapes[] = new Shape[5];

    for(int i=0;i<5;i++){
      shapes[i] = new Shape();
    }
    

    ///////////////////////   Shapes Points
    {
    shapes[0].version = new Point[2][4];
    shapes[0].version[0][0] = new Point(0, 0);
    shapes[0].version[0][1] = new Point(-1, 0);
    shapes[0].version[0][2] = new Point(-2, 0);
    shapes[0].version[0][3] = new Point(-3, 0);

    shapes[0].version[1][0] = new Point(0, 0);
    shapes[0].version[1][1] = new Point(0, -1);
    shapes[0].version[1][2] = new Point(0, 1);
    shapes[0].version[1][3] = new Point(0, 2);

    shapes[1].version = new Point[4][4];
    shapes[1].version[0][1] = new Point(0, 0); // L
    shapes[1].version[0][0] = new Point(1, 0);
    shapes[1].version[0][2] = new Point(-1, 0);
    shapes[1].version[0][3] = new Point(-1, 1);

    shapes[1].version[1][1] = new Point(0, 1);
    shapes[1].version[1][0] = new Point(0, 0);
    shapes[1].version[1][2] = new Point(0, 2);
    shapes[1].version[1][3] = new Point(1, 2);

    shapes[1].version[2][0] = new Point(1, -1);
    shapes[1].version[2][1] = new Point(1, 0);
    shapes[1].version[2][2] = new Point(0, 0);
    shapes[1].version[2][3] = new Point(-1, 0);

    shapes[1].version[3][0] = new Point(1, 0);
    shapes[1].version[3][1] = new Point(0, 0);
    shapes[1].version[3][2] = new Point(1, 1);
    shapes[1].version[3][3] = new Point(1, 2);

    shapes[2].version = new Point[1][4];
    shapes[2].version[0][0] = new Point(1, 0);
    shapes[2].version[0][1] = new Point(1, 1);
    shapes[2].version[0][2] = new Point(0, 0);
    shapes[2].version[0][3] = new Point(0, 1);

    shapes[3].version = new Point[2][4];
    shapes[3].version[0][0] = new Point(0, 0);
    shapes[3].version[0][1] = new Point(0, 1);
    shapes[3].version[0][2] = new Point(-1, 1);
    shapes[3].version[0][3] = new Point(-1, 2);

    shapes[3].version[1][0] = new Point(0, 0);
    shapes[3].version[1][1] = new Point(0, 1);
    shapes[3].version[1][2] = new Point(-1, 0);
    shapes[3].version[1][3] = new Point(1, 1);

    shapes[4].version = new Point[4][4];
    shapes[4].version[0][0] = new Point(0, 0); // T
    shapes[4].version[0][1] = new Point(0, 1);
    shapes[4].version[0][2] = new Point(0, -1);
    shapes[4].version[0][3] = new Point(-1, 0);

    shapes[4].version[1][0] = new Point(1, 0);
    shapes[4].version[1][1] = new Point(0, 0);
    shapes[4].version[1][2] = new Point(0, 1);
    shapes[4].version[1][3] = new Point(-1, 0);

    shapes[4].version[2][0] = new Point(0, -1);
    shapes[4].version[2][1] = new Point(0, 0);
    shapes[4].version[2][2] = new Point(0, 1);
    shapes[4].version[2][3] = new Point(1, 0);

    shapes[4].version[3][0] = new Point(1, 1);
    shapes[4].version[3][1] = new Point(0, 1);
    shapes[4].version[3][2] = new Point(-1, 1);
    shapes[4].version[3][3] = new Point(0, 0);
    }

    //////////////////////

    Random rand = new Random();
    Board board = new Board();
    Scanner sc = new Scanner(System.in);


    Point currentLocation = new Point(board.row - 3, rand.nextInt(board.col - 6) + 2);
    int randomShape = rand.nextInt(5);
    int randomVersion = rand.nextInt(shapes[randomShape].version.length);

    // Shape obj = new Shape(randomShape,currentLocation,randomVersion);
    // undo.push(obj);

    // Stack undo = new Stack();
    // Stack redo = new Stack();
    
    Shape currentShape = new Shape();
    currentShape = shapes[randomShape];
    
    char ch = '0';
    int set = 0;
    boolean running = true;
    int ver  = randomVersion;
    while( running == true){
      if(ch == 'q'){
        running = false;
        break;
      }
      if(ch  == 'l')
      {
        //ch = 's';
        for (int j = 0;j<4;j++) {
          board.clearBoardOnRotate(currentShape, currentLocation, ver);
        }
        ver = ver <= 0?currentShape.version.length-1:(ver - 1);
        
      }
      else if(ch == 'k'){
        // ch = 's';
        for (int j = 0; j < 4; j++) {
          board.clearBoardOnRotate(currentShape, currentLocation, ver);
        }
        ver = (ver+1)%currentShape.version.length;
        
      }

      if (ch == 'd') {
        board.moveRight(currentShape, ver, currentLocation);
        ch = 's';
      }
      else if(ch == 'w'){
        board.moveUp(currentShape, ver, currentLocation);
        ch = 's';
      }
      else if(ch == 'a'){
        board.moveLeft(currentShape, ver, currentLocation);
        ch = 's';
      }
      else if(ch == 's'){
        int canMove = board.moveDown(currentShape, ver, currentLocation);
        if(canMove == 0){
          set = 1;
          randomShape = rand.nextInt(5);
          randomVersion = rand.nextInt(shapes[randomShape].version.length);
          ver = randomVersion;
          currentLocation = new Point(board.row-3, rand.nextInt(board.col-4)+2);
          currentShape = shapes[randomShape];
        }
      }
      // if(ch == 'z'){

      // }
      // obj = new Shape(randomShape,currentLocation,ver);
      // undo.push(obj);

      board.draw(currentShape, currentLocation, ver);
      if(set == 1){
        board.deleteRow();
        set = 0;
      }
      board.printBoard();

      
      ch =sc.nextLine().charAt(0);
      
      //clearScreen();      
    }
  }

}