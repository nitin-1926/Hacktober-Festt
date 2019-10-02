#include<stdio.h>
int binary_search(int arr[],int n,int elem)
{
int l=0,h=n-1;
while(l<=h)
{
int mid=l+(h-l)/2;
if(arr[mid]<elem)
l=mid+1;
else if(arr[mid]>elem)
h=mid-1;
else
return mid;
}
if(l>h)
return -1;
}
int main()
{
int n;
printf("Enter the number of elements");
scanf("%d",&n);
int a[n];
printf("Enter the elements of array");
for(int i=0;i<n;i++)
{
    scanf("%d",&a[i]);
}
int elem;
scanf("%d",&elem);
int x=binary_search(a,n,elem);
if(x==-1)
printf("Element doesn't exist");
else
printf("Element exists at %d index",x);
}
