#include <stdio.h>
#include<math.h>
int main(void) {
	int N,W,L;
	int H[N],R[N];
	unsigned long long int sum=0;
	scanf("%d %d %d",&N,&W,&L);
	for(int i=0;i<N;i++)
	{
	    scanf("%d %d",&H[i],&R[i]);
	}
	unsigned long long int l=0,h=pow(2,60);
	int mid;
	while(l!=h)
	{
	    mid=(l+h)/2;
	    for(int i=0;i<N;i++)
	    {
	    if(H[i]+R[i]*mid>L)
	    sum=sum+H[i]+R[i]*mid;
	    }
	    if(sum>W)
	    {
	    h=mid;
	    }
	    else if(sum==0 || sum<W)
	    {
	    l=mid+1;
	    }
	     sum=0;
	}
	printf("%d",l);
	return 0;
}

