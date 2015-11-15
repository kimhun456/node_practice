
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <signal.h>
#include <pthread.h> // gcc  test.c -o test -lpthread


void* My(void* Para)
{
 int i;
  for(i=0;i<10;i++)
  {
   printf("[+] Child : Hello World ! \n");
   sleep(2);
  }
}


int main()
{
 pthread_t re;
 int a;
 void* s;

 a = pthread_create(&re,NULL,My,NULL);


 while(1)
 {
   printf("[+] Parent : Hello World !\n");
   sleep(1);
 }
 pthread_join(re,&s);
 printf("%s\n",(char*)s);

 return 0;
}
