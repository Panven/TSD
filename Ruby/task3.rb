class Clock 
  attr_accessor :hour, :minute , :sec
  def initialize(hour, minute, sec)
    @hour = hour
    @minute = minute 
    @sec = sec
  end

  
  def +(time)
      @sec += time.sec 
      @minute += @sec / 60
      @sec = @sec % 60
      @minute += time.minute
      @hour += @minute / 60
      @minunte = @minute % 60
      @hour = (@hour + time.hour) % 24 
    return Clock.new(@hour, @minute, @sec)
  end
  
  def -(time)
    @sec -= time.sec
    @minute += @sec/60
    if @sec < 0  
    @sec += 60 
    end
    @minute -= time.minute
    @hour += @minute/60
    if @minute < 0
      @minute += 60
    end
    @hour -= time.hour
    if @hour < 0
      @hour += 24
    end
    return Clock.new(@hour, @minute, @sec)
  end

  def ==(time)
     return @hour==time.hour && @minute == time.minute && @sec == time.sec ?  true :  false
  end
  
   def measure_time
       puts "Something is happening here"
      sleep 3
      self.+(Clock.new(0,0,3))
      self.print
     
    end
  
  def print
    puts "The current time is #{@hour}:#{@minute}:#{@sec}"
    end
end

clock1 = Clock.new(10, 10, 10)
clock2 = Clock.new(10, 11, 11)
clock1.print
clock2.print 
clock1 += clock2
clock1.print
clock1 -= clock2
clock1.print
puts clock1 == clock2
puts clock1 == Clock.new(clock1.hour, clock1.minute, clock1.sec)
clock1.print
Clock.new(10,10,10).measure_time