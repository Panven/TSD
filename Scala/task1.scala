object scala_basic {
    def t1(w: String): String = {
    w.take(w.length() - 4) + w.drop(w.length() - 4).toUpperCase()
   }
   def main(args: Array[String]): Unit = {
      println(t1("Example longth string"));
      println(t1("tes"));      
    }
 }