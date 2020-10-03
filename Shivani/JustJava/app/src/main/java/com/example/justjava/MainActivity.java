package com.example.justjava;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.text.NumberFormat;

public class MainActivity extends AppCompatActivity {
    int quantity=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void SubmitOrder(View view) {
        CheckBox c=(CheckBox)findViewById(R.id.checkbox);
        boolean ch=c.isChecked();
        CheckBox choco1=(CheckBox)findViewById(R.id.checkbox1);
        boolean choco=choco1.isChecked();
        EditText e=(EditText) findViewById(R.id.ed);
        String name=e.getText().toString();
        int price=calculatePrice(ch,choco);
        String priceMessage=createOrderSummary(name ,price,ch,choco);
        Intent intent = new Intent(Intent.ACTION_SENDTO);
        intent.setData(Uri.parse("mailto:"));
        intent.putExtra(Intent.EXTRA_SUBJECT, "Just Java order for "+name);
        intent.putExtra(Intent.EXTRA_TEXT, priceMessage);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }
    }
    private String createOrderSummary(String name,int price, boolean ch,boolean choco)
    {
        String m = getString(R.string.order_summary_name,name)+"\n Add whipped cream ?"+ch+"\nAdd chocolate ?"+choco+"\n Quantity : "
                +quantity+"\n Total: Rs "+price+"\n "+getString(R.string.thank_you);
        return m;
    }
    private int calculatePrice(boolean ch, boolean choco)
    {
        int p=5;
        if(ch)
            p=p+1;
        if(choco)
            p=p+2;
        return quantity*p;
    }
    public void increment(View view) {
        if(quantity==100)
        {
            Toast.makeText(this,"You cannot have more than 100 coffees",Toast.LENGTH_SHORT).show();
            return;
        }
        quantity=quantity+1;
        display(quantity);
    }
    public void decrement(View view) {
        if(quantity==1)
        {
            Toast.makeText(this,"You cannot have less than 1 coffees",Toast.LENGTH_SHORT).show();
            return;
        }
        quantity=quantity-1;
        display(quantity);
    }
    private void display(int number) {
        TextView quantityTextView = (TextView) findViewById(
                R.id.quantity_text_view);
        quantityTextView.setText(" " + number);
    }
    private void displayPrice(int number) {
        TextView priceTextView = (TextView) findViewById(R.id.price_text_view);
        priceTextView.setText(NumberFormat.getCurrencyInstance().format(number));
    }
}