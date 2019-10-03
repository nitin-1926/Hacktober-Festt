#include<stdio.h>

struct node1
{
    int data;
    struct node *next;
};

struct node2
{
    int data;
    struct node *next;
};

void print(struct node **head1)
{
    struct node1 *traverse = *head1;
    while(traverse != '\0') {
        printf("%d ", traverse -> data);
        traverse = traverse -> next;
    }
}

void add_at_begin1(struct node **head, int data)
{
    struct node1 *new_node = (struct node*) malloc(sizeof(struct node1));
    new_node -> data = data;
    new_node -> next = *head;
    *head = new_node;
}

void add_at_begin2(struct node **head, int data)
{
    struct node2 *new_node = (struct node*) malloc(sizeof(struct node2));
    new_node -> data = data;
    new_node -> next = *head;
    *head = new_node;
}

void pairs(struct node1 **head1, struct node2 **head2, int sum)
{
    int count = 0;
    struct node1 *n1 = *head1;
    struct node2 *n2 = *head2;
    while(n1 != '\0') {
        n2 = *head2;
        while(n2 != '\0') {
            if(n1 -> data + n2 -> data == sum) {
                count++;
                printf("(%d, %d)", n1 -> data, n2 -> data);
            }
            n2 = n2 -> next;
        }
        n1 = n1 -> next;
    }
    printf("\nTotal number of pairs: %d", count);
}

int main()
{
    struct node1 *head1 = '\0';
    struct node2 *head2 = '\0';
    add_at_begin1(&head1, 1);
    add_at_begin1(&head1, 2);
    add_at_begin1(&head1, 3);
    add_at_begin1(&head1, 4);
    add_at_begin2(&head2, 1);
    add_at_begin2(&head2, 2);
    add_at_begin2(&head2, 3);
    add_at_begin2(&head2, 2);
    add_at_begin2(&head2, 3);
    add_at_begin2(&head2, 0);
    printf("1st Linked list: ");
    print(&head1);
    printf("\n2nd Linked list: ");
    print(&head2);

    int sum;
    printf("\nEnter the sum: ");
    scanf("%d", &sum);
    pairs(&head1, &head2, sum);
}

