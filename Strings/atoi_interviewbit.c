int Solution::atoi(const string A) {
     int res=0;
    long long re1=0;
    int sign=1;
    int i=0;
    if(A[0]=='-')
    {
            sign=-1;
            i++;
    }
    if(A[0]=='+')
    {
        sign=1;
        i++;
    }
    while(A[i]!='\0')
    {
        if(A[i]>=48&&A[i]<=57)
        {
         res=res*10+(A[i]-'0');
        re1=re1*10+(A[i]-'0');
        i++;
        }
        else
        break;
    }
    if(re1==res)
       return res*sign;
    if(sign==1&&re1!=res)
       return INT_MAX;
    else
    return INT_MIN;
    
}