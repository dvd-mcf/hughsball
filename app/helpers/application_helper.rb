module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | St Hugh's Ball"      
    end
  end
end
