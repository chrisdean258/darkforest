//mazegen.cpp


#include <cstdio>
#include <cstdlib>
#include <vector>
#include <ctime>

using namespace std;


class Maze
{
	public:
		int r;
		int c;
		vector<vector<int> > board;

		Maze(int,int);
		void GenMaze();
		void Print();
		void PrintForChris();

	protected:
		int wr; 	//working
		int wc;
		int maxr;
		int maxc;

		int MakeLegalBlock();
		int IsDone();
		int IsPossibleBlock(int a,int b);
		int IsAlreadyLegal(int a,int b);
		void Restart();
};

int max(int a,int b) {return (a>b) ? a : b;}

Maze::Maze(int a,int b)
{
	int i,j;

	r = a;
	c = b;
	board.resize(r);
	for(i=0; i<r; i++)
		for(j=0; j<c; j++)
			board[i].push_back(0);
	board[0][0] = 1;
	wr = 0;
	wc = 0;
	maxr = 0;
	maxc = 0;
}

void Maze::Restart()
{
	int i,j;

	board.resize(0);
	board.resize(r);
	for(i=0; i<r; i++)
		for(j=0; j<c; j++)
			board[i].push_back(0);
	board[0][0] = 1;
	wr = 0;
	wc = 0;
	maxr = 0;
	maxc = 0;
	GenMaze();
}

int Maze::IsDone()
{
	if(wr==r-1 && wc==c-2) return 1;
	if(wr==r-2 && wr==r-1) return 1;
	return 0;
}

int Maze::IsAlreadyLegal(int a,int b)
{
	if(board[a][b]==1) return 1;
}

int Maze::IsPossibleBlock(int a,int b)
{
	int count = 0;

	if(a<0 || b<0 || a>=r || b>=c) return 0;
	if(IsAlreadyLegal(a,b)) return 0;
	if((a==0 || a==1 || a==r-2 || a==r-1) && b==wc-1) return 0;
	if((b==0 || b==1 || b==c-2 || b==c-1) && a==wr-1) return 0;

	if(a-1>=0 && IsAlreadyLegal(a-1,b)) count++;
	if(b-1>=0 && IsAlreadyLegal(a,b-1)) count++;
	if(a+1<r && IsAlreadyLegal(a+1,b)) count++;
	if(b+1<c && IsAlreadyLegal(a,b+1)) count++;

	if(count==0) Print(),fprintf(stderr,"error2.wr=%d,wc=%d\n",wr,wc),exit(0);
	return 1;
	if(count==1 || count==2 || count==3) return 1;
	return 0;
}

int Maze::MakeLegalBlock()
{
	vector<pair<int,int> > possibleWrong;
	vector<pair<int,int> > possibleCorrect;
	pair<int,int> temp;
	int randnum;
	int i;

	if(IsDone())
	{
		board[r-1][c-1]=1;
		return 1;
	}

	if(wr-1>=0 && IsPossibleBlock(wr-1,wc))
	{
		temp.first=wr-1;
		temp.second=wc;
		possibleWrong.push_back(temp);
	}
	if(wc-1>=0 && IsPossibleBlock(wr,wc-1))
	{
		temp.first=wr;
		temp.second=wc-1;
		possibleWrong.push_back(temp);
	}
	if(wr+1<r && IsPossibleBlock(wr+1,wc))
	{
		temp.first=wr+1;
		temp.second=wc;
		possibleCorrect.push_back(temp);
	}
	if(wc+1<c && IsPossibleBlock(wr,wc+1))
	{
		temp.first=wr;
		temp.second=wc+1;
		possibleCorrect.push_back(temp);
	}

	if(!possibleWrong.size() && !possibleCorrect.size())
	{
		if(maxr>maxc)
			for(i=c-1; i>=0; i--)
				if(board[maxr][i])
				{
					wr=maxr;
					wc=i;
					return MakeLegalBlock();
				}

		else
			for(i=r-1; i>=0; i--)
				if(board[i][maxc])
				{
					wr=i;
					wc=maxc;
					return MakeLegalBlock();
				}
		Restart();
		return 1;
	}

	if(!possibleWrong.size())
	{
		randnum = rand() % possibleCorrect.size();
		wr = possibleCorrect[randnum].first;
		wc = possibleCorrect[randnum].second;
	}
	else if(!possibleCorrect.size())
	{
		randnum = rand() % possibleWrong.size();
		wr = possibleWrong[randnum].first;
		wc = possibleWrong[randnum].second;
	}
	else
	{
		randnum = rand() % 10;
		if(randnum>2)
		{
			randnum = rand() % possibleWrong.size();
			wr = possibleWrong[randnum].first;
			wc = possibleWrong[randnum].second;
		}
		else
		{
			randnum = rand() % possibleCorrect.size();
			wr = possibleCorrect[randnum].first;
			wc = possibleCorrect[randnum].second;
		}
	}

	maxr = max(maxr,wr);
	maxc = max(maxc,wc);
	board[wr][wc] = 1;

	return 0;
}

void Maze::GenMaze()
{
	while(!MakeLegalBlock());
}

void Maze::Print()
{
	int i,j;

	printf("     ");
	for(i=0; i<c; i++)
		if(!(i%10))
			printf("1");
		else
			printf(" ");
	printf("\n");

	for(i=r-1; i>=0; i--)
	{
		printf("%-5d",i);
		for(j=0; j<c; j++)
			printf("%c",(board[i][j]) ? '0' : '+');
		printf("\n");
	}
}

void Maze::PrintForChris()
{
	int i,j;

	printf("var maze_xs = ");
	printf("[");
	for(i=0; i<r; i++)
		for(j=0; j<c; j++)
			if(board[i][j])
			{
				printf(" %d",j);
				if(i != r-1 || j != c-1)
					printf(",");
			}
	printf(" ]; ");

	printf("var maze_ys = ");
	printf("[");
	for(i=0; i<r; i++)
		for(j=0; j<c; j++)
			if(board[i][j])
			{
				printf(" %d",i);
				if(i != r-1 || j != c-1)
					printf(",");
			}
	printf(" ]; ");

	printf("var boardWidth = %d; ",c);
	printf("var boardHeight = %d;\n",r);
}

int main(int argc, char ** argv)
{
	Maze* maze;

	if(argc != 3 && argc != 4)
	{
		fprintf(stderr,"error 1\n");
		exit(0);
	}

	if(argc==4) srand(atoi(argv[3]));
	else srand(time(0));

	maze = new Maze(atoi(argv[1]),atoi(argv[2]));

	maze->GenMaze();

	maze->PrintForChris();

	return 0;
}
