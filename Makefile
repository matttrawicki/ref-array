main:
	gcc -shared -o libadd.dylib add.c
clean:
	rm *.dylib
