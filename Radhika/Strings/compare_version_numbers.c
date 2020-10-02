int compare(char* str1,char* str2,int len1,int len2)
{
    if(len1>len2)
    return 1;
    else if(len1<len2)
    return -1;
    else
    {
        int i=0,j=0;
        while(i<len1)
        {
        if(str1[i]<str2[j])
            return -1;
        else if(str1[i]>str2[j])
            return 1;
        i++;
        j++;
        }
        return 0;
    }
}
int compareVersion(char* A, char* B) {
    int len1=strlen(A);
    int len2=strlen(B);
    char* str1=(char *)malloc(sizeof(char)*1000);
    char* str2=(char *)malloc(sizeof(char)*1000);
    int i=0,j=0;
    while(i<len1 || j<len2)
    {
        int p=0,q=0;
        while(A[i]=='0')
            i++;
        while(B[j]=='0')
            j++;
        while(A[i]!='.' && i<len1)
            str1[p++]=A[i++];
        while(B[j]!='.' && j<len2)
            str2[q++]=B[j++];
        int res=compare(str1,str2,p,q);
        if(res)
            return res;
        i++;
        j++;
    }
    return 0;
}