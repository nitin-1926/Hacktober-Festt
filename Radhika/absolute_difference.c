#include<stdio.h>
int main()
{
int n1,n2,n3;
scanf("%d %d %d",&n1,&n2,&n3);
int arr1[n1],arr2[n2],arr3[n3];
for(int i=0;i<n1;i++)
{
scanf("%d",&arr1[i]);
}
for(int i=0;i<n2;i++)
{
scanf("%d",&arr2[i]);
}
for(int i=0;i<n3;i++)
{
scanf("%d",&arr3[i]);
}
int i=0,j=0,k=0;
int a,b,c,big,small,diff,min=678687;
int first,second,third;
while(i<n1 && j<n2 && k<n3)
{
a=arr1[i];
b=arr2[j];
c=arr3[k];
big = a > b ? ( a > c ? a : c) : (b > c ? b : c) ;
small = a < b ? ( a < c ? a : c) : (b < c ? b : c) ;
diff=big-small;
if(min>diff)
{
    min=diff;
    first=arr1[i];
    second=arr2[j];
    third=arr3[k];
}
if(small==a)
i++;
else if(small==b)
j++;
else if(small==c)
k++;
}
printf("Triplet is %d %d %d",first,second,third);
printf(" Absolute difference is %d",min);
}
