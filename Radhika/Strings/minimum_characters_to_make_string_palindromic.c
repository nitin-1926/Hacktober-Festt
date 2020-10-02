int solve(char* A) {
 int len=strlen(A);
 char str2[len],str4[len];
 strcpy(str2,A);
 int j=0,i;
    for(i=(strlen(str2)-1); i>=0;i--)
        str4[j++]=str2[i];
 
        str4[j]='\0';
 strcat(A,"$");
 strcat(A,str4);
 int f=strlen(A);
 int lsp[f];
 lsp[0]=0;
 i=0;
 for(j=1;j<f;)
 {
    if(A[i]==A[j])
    {
    lsp[j]=i+1;
    i++;
    j++;
    }
    else
    {
    if(i==0)
    {
    lsp[j]=0;
    j++;
    }
    else
    {
    i=lsp[i-1];
    }
    }
 }
 int k=0,h=len-1;
int n=len-lsp[f-1];
return n;
}