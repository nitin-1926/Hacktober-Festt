#include <stdio.h>
#include <string.h>
#include <time.h>


struct ListNode
{
    int data;
    struct ListNoode* next;
};


//This function is used to create the stack but not allocating any kind of memory for the stack

//This is the PUSH function that is used to push the data into the stack as per the Linked List Data Structure.
void PushStack(struct ListNode **top,int data){
    struct ListNode* temp;
    temp = (struct ListNode*)malloc(sizeof(struct ListNode));
    if(!temp){
        return NULL;
    }
    temp->data = data;
    temp->next = *top;
    *top = temp;
}

//This is the function that is used to check whether the stack is empty or not.
int IsEmptyStack(struct ListNode *top){
    return top == NULL;
}


//This is the function used to pop the top most element from the Stack.
int PopStack(struct ListNode **top){
    int data;;
    struct ListNode* temp;
    temp = (struct ListNode*)malloc(sizeof(struct ListNode));
    temp = *top;
    *top = (*top)->next;
    data = temp->data;
    free(temp);
    return data;

}


//This is the function that is used to return the data element of the top of the stack.
int Top(struct ListNode* top){
    if(IsEmptyStack(top)){
        return __INT_MAX__;
    }
    return top->data;
}



void DeleteStack(struct ListNode** top){
    struct ListNode *temp,*p;
    p = *top;
    while(p->next){
        temp = p->next;
        p->next = temp->next;
        free(temp);
    }
}