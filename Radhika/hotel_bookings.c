#include<stdio.h>
struct dates
{
    int arr;
    int dep;
};
int comparator(const void * a,const void * b)
{

    int l=((struct dates *)a)->arr;
    int m=((struct dates *)b)->arr;
    return(l-m);
}


int comparator1(const void * a,const void * b)
{

    int l=((struct dates *)a)->dep;
    int m=((struct dates *)b)->dep;
    return(l-m);
}

void main()
{
    printf("Enter the size:");
    int n;
    scanf("%d",&n);

    struct dates array[n],array2[n];

    printf("Enter the arrival dates:");
    int a[n];
    for(int i=0;i<n;i++)
    {
    scanf("%d",&a[i]);
    array[i].arr=a[i];
    }
    printf("Enter the departure dates:");
    int d[n];
    for(int i=0;i<n;i++)
    {
    scanf("%d",&d[i]);
    array2[i].dep=d[i];
    }
        int k;
    printf("Enter the number of rooms:");
    scanf("%d",&k);


    qsort(array,n,sizeof(array[0]),comparator);
    qsort(array2,n,sizeof(array2[0]),comparator1);
    int p;
    k--;

    for(int i=1;i<n;i++)
    {
        if(array[i-1].dep<array[i].arr)
        k++;
        if(k!=0)
        k--;
        else
        {
        printf("Structure is not possible..");
        break;
        }
        p=i;
    }
    if(p==(n-1))
    printf("Structure is possible..");
}
