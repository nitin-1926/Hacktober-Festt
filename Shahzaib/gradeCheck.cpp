#include<iostream>
using namespace std;
//                 *=================================*        
//                 *     Check Grade of Your Marks   *
//                 *=================================*
int main()
{
	int marks;
	string grade;
	cout<<"Enter your marks ";
	cin>>marks;
	if(marks>=50)
	{
		grade="D";
		if(marks>=55)
		{
			grade="C-";
			if(marks>=60)
			{
				grade="C";
				if(marks>=65)
				{
					grade="C+";
					if(marks>=70)
					{
						grade="B-";					
						if(marks>=75)
					   {
						    grade="B";
						    if(marks>=80)
					        {
						        grade="B+";
						        if(marks>=85)
					            {
						            grade="A-";
						            if(marks>=90)
					                {
						                grade="A";
						                if(marks>=95 && marks<=100)
						                {
						                	grade="A+";
										}
										else if(marks>100)
										{
											grade="Marks cannot be greater than 100";
										}
					                }
					            }
					        }
					   }
					}
				}
			}
		}
	}
	else{
		grade="F";
	}
	cout<<"Your Grade With "<<marks<<" marks is "<<grade;
}
