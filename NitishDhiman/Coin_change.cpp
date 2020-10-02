#include <iostream>
#include <vector>
using namespace std;

int get_change(int m)
{
  //write your code here
  vector<int> coins = {1, 5, 10};
  int count = 0;
  for (int i = 2; i >= 0; i--)
  {
    while (m - coins[i] >= 0)
    {
      m = m - coins[i];
      count++;
    }
  }
  return count;
}

int main()
{
  int m;
  std::cin >> m;
  std::cout << get_change(m) << '\n';
}
