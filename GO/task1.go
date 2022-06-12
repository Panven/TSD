package main

import (
	"fmt"
	"strings"
)

func t1(se string) int {
	return len(strings.Fields(se))
}

func main() {
	var s = "Task 1 solved!"
	fmt.Println(t1(s))
}