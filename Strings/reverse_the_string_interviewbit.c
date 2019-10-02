char* solve(char* A) {
    int len=strlen(A);
    int j=0,i=0;
    char *rev=(char *)malloc(sizeof(char)*100);
    int wordstart=len-1;
    int wordend=len-1;
    while(wordstart>0)
    {
        if(A[wordstart]==' ')
        {
            i=wordstart+1;
            while(i<=wordend)
            {
                rev[j]=A[i];
                i++;
                j++;
            }
            rev[j++]=' ';
            wordend=wordstart-1;
        }
        wordstart--;
    }
    for(i=0;i<=wordend;i++)
    {
        rev[j]=A[i];
        j++;
    }
    rev[j]='\0';
    return rev;
}