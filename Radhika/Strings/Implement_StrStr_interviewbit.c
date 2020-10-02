int strStr(const char* A, const char* B) {
    int l1=strlen(A);
    int l2=strlen(B);
    if(l2>l1)
   return -1;
    int j,i=0;
    int lps[l2];
    lps[0]=0;
    for(j=1;j<l2;)
    {
        if(B[j]==B[i])
        {
            lps[j]=i+1;
            i++;
            j++;
        }
        else
        {
            if(i==0)
            {
            lps[j]=0;
            j++;
            }
            else
            {
                i=lps[i-1];
            }
            
        }
    }
    j=0;
    for(i=0;i<l1;)
    {
        if(A[i]==B[j])
        {
            i++;
            j++;
            if(j==l2)
            break;
        }
        else
        {
            if(j==0)
            i++;
            else
            {
                j=lps[j-1];
            }
        }
    }
    if(j==l2)
    return i-l2;
    else
    return -1;
   
}