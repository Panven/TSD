package main
import (
    "encoding/csv"
    "fmt"
    "os"
	"io"
	"strconv"
	"log"
	"strings"
)
func main() {
	questions := 0
	points := 0
    file, e := os.Open("quiz.csv")
	if e != nil {
        log.Fatal(e)
    }
    defer file.Close()
    reader := csv.NewReader(file)
	for {
        tmp, e := reader.Read()
        if e == io.EOF {
            break
        }
		tmp1 := strings.Fields(tmp[0])
		ans, e := strconv.Atoi(strings.Fields(tmp[1])[0])
		tmp2:= strings.Split(tmp1 [0], "+")
		x, e := strconv.Atoi(tmp2[0])
		y, e := strconv.Atoi(tmp2[1])
		if(x + y == ans){
			points = points + 1
		}	
		questions= questions+ 1
    }   
	fmt.Println("Amount of questions: ", questions)
	fmt.Println("Correct answers: ", points)
}