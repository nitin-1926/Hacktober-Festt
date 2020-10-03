package arraylist;
import java.util.Scanner;
import java.util.*;
import java.util.ArrayList;
class Employee1 {
int empId;
String empName;
String empEmail;
char empGender;
float empSalary;
Employee1(){

}
Employee1(int empId,String empName,String empEmail,char empGender,float empSalary){
this.empId = empId;
this.empName = empName;
this.empEmail = empEmail;
this.empGender = empGender;
this.empSalary = empSalary;
}
public int getEmpId() {
return empId;
}
public String getEmpName() {
return empName;
}
public String getEmpEmail() {
return empName;
}
public char getEmpGender() {
return empGender;
}
public float getEmpSalary() {
return empSalary;
}
public void getEmployeeDetails() {

System.out.println(getEmpId()+"  "+getEmpName()+"  "+getEmpEmail()+"  "+getEmpGender()+"  "+getEmpSalary());
}
}
class EmployeeDB extends Employee1{
ArrayList<Employee1> list = new ArrayList<>();
boolean  addEmployee(Employee1 e) {
list.add(e);
return true;
}
boolean deleteEmployee(int empId) {
for(int i = 0; i < list.size(); i++) {
int n = list.get(i).getEmpId();
if(n == empId) {
list.remove(i);
return true;
}
}
System.out.println("No data Found for Employee Id = " + empId);
return false;
}
String showPaySlip(int empId) {
for(int i = 0; i < list.size(); i++) {
int n = list.get(i).getEmpId();
if(n == empId) {
return "Pay Slip = " + list.get(i).getEmpSalary();
}
}
return "No data Found";
}
boolean listAll() {
if(list.size() == 0)
return false;
System.out.println("EmpId  "+"Name   "+"Email  "+"Gender  "+"Salary  ");
for(int i = 0; i < list.size(); i++) {
list.get(i).getEmployeeDetails();
}
return true;
}
boolean search(int empId) {
for(int i = 0; i < list.size(); i++) {
int n = list.get(i).getEmpId();
if(n == empId) {
list.remove(i);
return true;
}
}
System.out.println("No data Found for Employee Id = " + empId);
return false;
}
}
 class Alist_asm{
public static void main(String args[]) {
Scanner sc = new Scanner(System.in);
EmployeeDB obj = new EmployeeDB();
System.out.println("Press 1 to add Employee Details");

int emp = sc.nextInt();

while(emp != -1) {
switch(emp) {
case 1:  
System.out.println("Enter empId");
int empId = sc.nextInt();
System.out.println("Enter empName");
String empName = sc.next();
System.out.println("Enter empEmail");
String empEmail = sc.next();
System.out.println("Enter Gender M (Male) F (Female)");
char empGender = sc.next().charAt(0);
System.out.println("Enter Salary");
float empSalary = sc.nextFloat();
Employee1 data = new Employee1();
data = new Employee1(empId,empName,empEmail,empGender,empSalary);
obj.addEmployee(data);
break;
case 2:
System.out.println("Enter empId you want to delete");
empId = sc.nextInt();
System.out.println(obj.deleteEmployee(empId));
break;
case 3:
System.out.println("Enter empId whom you want to see PaySlip");
empId = sc.nextInt();
System.out.println(obj.showPaySlip(empId));
break;
case 4:
System.out.println("Show all Employees data");
obj.listAll();
break;
case 5:
System.out.println("Enter empId to search employee");
empId = sc.nextInt();
System.out.println(obj.search(empId));
break;
}
System.out.println("Add 1/ Delete 2/ Showpay 3/ listshow 4/ search 5");
emp = sc.nextInt();
}
sc.close();
}
}
