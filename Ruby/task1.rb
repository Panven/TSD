module InstanceModule
  def square
    return self * self
  end
end

module ClassModule
  def sample(arr)
    if arr >= 0
      return Array.new(arr){rand(20)}
    end
    raise ArgumentError.new "Number cannot be negative"
  end
end

class Integer
  include InstanceModule
  include ClassModule
  alias :random sample 
  def factorial
    if self >= 0
      return (1..self).inject(:*)
    end
    raise RuntimeError.new "cannot count factorial for negative number"
  end
end


num1 = 3
num2 = -1
#puts(num2.factorial)
puts(num1.factorial)
puts(num1.square)
puts(num2.square)
puts(num1.sample(num1))
puts(num1.random(num1))
