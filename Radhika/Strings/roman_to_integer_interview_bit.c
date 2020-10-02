int value(char c)
{
    if(c=='I')
        return 1;
    else if(c=='V')
        return 5;
    else if(c=='X')
        return 10;
    else if(c=='L')
        return 50;
    else if(c=='C')
        return 100;
    else if(c=='D')
        return 500;
    else if(c=='M')
        return 1000;
 
    return -1;
}
int romanToInt(char* A) {
    int res=0;
    int i;
    for(i=0;i<strlen(A);i++)
    {
        int g=value(A[i]);
        if(i+1<strlen(A))
        {
            int f=value(A[i+1]);
            if(g>=f)
                res=res+g;
            else
            {
                res=res+f-g;
                i++;
            }
        }
        else
            res=res+g;
    }
    return res;
}