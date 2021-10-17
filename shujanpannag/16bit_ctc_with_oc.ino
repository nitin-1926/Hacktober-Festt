int main(void)
{
DDRB |= (1 << PINB1);
TCCR1A |= (0 << WGM11);

TCCR1B |= (1 << WGM12); //for CTC OCR
// TCCR1B |= (1 << WGM13); //for CTC ICR
TCCR1B |= (1 << CS12) | (0 << CS10); //256 ps
//ICR1 = 50000;
TCCR1A |= (1 << COM1A0);
OCR1A = 20000;

while (1);
return (0);
}
