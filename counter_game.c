#include<stdio.h>
int main()
{
int n=132;
int count = 0;
unsigned int count1=0;
  while (n)
{
    if((n & 1)==1)
        count1++;

    if (count1>0)
        {
            continue;
        }
        else
        {
            count++;
        }

         n = n >> 1;
}
printf("%d %d",count,count1);
}
