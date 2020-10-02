#include<iostream>
#include<list>
using namespace std;

class Graph{
	int V;
	list<int>*adj;
	public:
		Graph(int v);
		void add_edge(int a, int b);
		void BFS(int start);
		
};

Graph::Graph(int v){
	V=v;
	adj=new list<int>[V];
	
}
void Graph::add_edge(int a,int b){
	adj[a].push_back(b);
	adj[b].push_back(a);
}
void Graph::BFS(int s){
	bool *visited=new bool[V];
	for(int i=0;i<V;i++){
		visited[i]= false ;
	}
	list<int> queue;
	visited[s]=true;
	queue.push_back(s);
	list<int>::iterator i;
	while(!queue.empty()){
		s=queue.front();
		cout<<s;
		queue.pop_front();
		for(i=adj[s].begin();i!=adj[s].end();i++){
			if(!visited[*i]){
				visited[*i]=true;
				queue.push_back(*i);
			}
		}
	}
	
}


int main(){
	Graph g(4);
	g.add_edge(0,1);
	g.add_edge(0,2);
	g.add_edge(1,2);
	g.add_edge(3,3);
	g.add_edge(2,3);
	g.BFS(2);
}
