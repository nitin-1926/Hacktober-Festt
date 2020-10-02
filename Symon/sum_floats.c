#include <stdio.h>

int main() {
    float valores = 0, total = 0;

    scanf("%f", &valores);

    while (valores != 0){

        total = total + valores;
        scanf("%f", &valores);
    }

    printf("Valor total: %.2f\n", total);
    
    return 0;
}