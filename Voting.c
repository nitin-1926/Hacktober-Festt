#include<stdio.h>
void main()
{
    int v;
     int i,j,a,b,c,d,x,y[1000],n,h,u,z;
    a=b=c=n=i=0;
     for(z=0; z<1000; z++)
     {
    printf("1-ADMIN\n2-VOTER\n3-EXIT\n");
    printf("\nEnter Your Choice\n");
    scanf("%d",&v);
    switch(v)
    {
        case 1:

   printf("Enter Your Password");
   scanf("%d",&u);
   if(u==1234)
   {
     printf("no of votes to party a=%d\nno of votes to party b=%d\nno of votes to party c=%d\n",a,b,c);
   }
   else
   {
       printf("incorrect password\n");
   }
   break;
        case 2:


    for(h=0; h<=1000; h++)
    {
          printf("\nEnter Your Voter ID\n");

            scanf("%d",&x);
            n=0;
            if(x==0000)
                break;
            else
            {


            for(j=0; j<i; j++)
            {
                if(x==y[j])
                    n++;
            }
                if(n==0)
        {
             y[i++]=x;
              printf("1-Party a\n2-Party b\n3-Party c\n");
              printf("Enter Number Corresponding To Your Party\n");
              scanf("%d",&d);

              switch(d)
              {
                  case 1:

                  a++;
                  printf("Your Vote Has Been Successfully Submitted To Party a\n");
                  break;


              case 2:
                  b++;
                  printf("Your Vote Has Been Successfully Submitted To Party b\n");
                  break;


              case 3:
                  c++;
                  printf("Your Vote Has Been Successfully Submitted To Party c\n");
                  break;

                }

            }

            else
                printf("You Can Vote Only Once");
            }

    }

    break;
    case 3:

        printf("\nHave A Nice Day\n");
     break;
    }
    if(v==3)
        break;
       if(u==1234)
            break;
     }

}
