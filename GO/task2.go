package main

import (
	"fmt"
)

func t2() func() int {
	x, y := 0, 1
	return func() int {
		x, y = y, x+y
		return y - x
	}
}
func main() {
	f := t2()
	x := 15
	for i := 0; i < x; i++ {
		fmt.Println(f())
	}
}