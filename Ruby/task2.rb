class Task2
  def minmaxsum(arr)
    arr.combination(4).to_a.map {|n| n.inject(:+)}.minmax
  end
  def bintodec(num)
    b = num.length-1
    tmp = 0
    num.split('').each{|n|  tmp+=n.to_i*(2**b); b-=1}
    return tmp
  end
  def cword(w)
    return w.split(' ').group_by(&:itself).transform_values(&:count)
  end
  def pangram(p)
    return ('a'..'z').all? {|n| p.downcase.include? n}
  end    
end
  
  
  t2 = Task2.new()
  puts t2.minmaxsum([1,2,3,4,5])
  puts t2.bintodec("101")
  puts t2.cword("olly olly come here free")
  puts t2.pangram("The quick brown fox jumps over the lazy dog.")
  puts t2.pangram("abde")