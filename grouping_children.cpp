#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int group(vector<float> &children)
{
    int currentChild = 1;
    int lastChild = children.size();
    int start = 0;
    int groups = 0;
    while (currentChild < lastChild)
    {
        if (children[currentChild] - children[start] > 1)
        {
            start = currentChild;
            groups++;
        }
        if (currentChild == lastChild - 1)
        {
            groups++;
        }
        currentChild++;
    }
    return groups;
}

int main()
{
    int n;
    cin >> n;
    vector<float> children(n);
    cout << "Enter the age of children \n";
    for (int i = 0; i < n; i++)
    {
        cin >> children[i];
    }
    sort(children.begin(), children.end());

    cout << endl
         << "No. of groups formed = "
         << group(children);
}
