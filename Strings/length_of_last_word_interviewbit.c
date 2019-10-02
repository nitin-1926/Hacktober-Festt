int Solution::lengthOfLastWord(const string A) {
    int count1=0,i;
   while(A[i]!='\0')
   {
       count1++;
       i++;
   }
    int count = 0; 
    bool flag = false; 
    for (i = count1 - 1; i >= 0; i--) { 
        if ((A[i] >= 'a' && A[i] <= 'z') || (A[i] >= 'A' && A[i] <= 'Z')) { 
            flag = true; 
            count++; 
        } 
        else { 
            if (flag == true) 
                return count; 
        } 
    } 
    return count; 
}