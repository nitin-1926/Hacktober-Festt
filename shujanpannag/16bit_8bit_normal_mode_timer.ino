// fo ~ 1sec
int main() {
cli();
DDRB |= 1 << PB1;
TCCR1B |= (1 << CS12) | (0 << CS10); //256 ps
TIMSK1 |= 1 << TOIE1;
sei();
while (1);
return 0;
}

ISR(TIMER1_OVF_vect) {
PORTB ^= (1 << PB1);
}
// fo * 65 ~ 1sec
int main() {
cli();
DDRB |= 1 << PB1;
TCCR0B |= (1 << CS02) | (1 << CS00);
TIMSK0 |= 1 << TOIE0;
sei();
while (1);
return 0;
}

ISR(TIMER0_OVF_vect) {
PORTB ^= (1 << PB1);
}
